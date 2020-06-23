variable "project_name" {}
variable "project_region" {}
variable "service_account_path" {}
variable "sheet_id" {}
variable "tab_id" {}
variable "start_row" {}
variable "basic_auth_pass" {}
variable "firestore_collection" {
    default             = "entries"
}
variable "pubsub_topic" {
    default             = "scrape"
}
variable "timezone" {
    default             = "Etc/UTC"
}


provider "google" {
    credentials         = file(var.service_account_path)

    project             = var.project_name
    region              = var.project_region
}


provider "google-beta" {
  credentials           = file(var.service_account_path)

  project               = var.project_name
  region                = var.project_region
}


resource "google_vpc_access_connector" "default" {
    ip_cidr_range       = "10.8.0.0/28"
    max_throughput      = 300
    min_throughput      = 200
    name                = "vpc-connector-blmsheet"
    network             = "default"
    region              = var.project_region
    provider            = google-beta
}


resource "google_project_service" "service" {
    for_each = toset([
        "iam.googleapis.com",
        "cloudresourcemanager.googleapis.com",
        "run.googleapis.com",
        "firestore.googleapis.com",
        "cloudscheduler.googleapis.com",
        "redis.googleapis.com",
        "cloudbuild.googleapis.com"
    ])

    service             = each.key
    project             = var.project_name
    disable_on_destroy  = false
}


resource "google_cloud_run_service" "app" {
    provider            = google
    location            = var.project_region
    name                = "blmsheet-api"

    template {
        metadata {
            annotations = {
                "autoscaling.knative.dev/maxScale"        = "1000"
                "run.googleapis.com/vpc-access-connector" = google_vpc_access_connector.default.self_link
            }
        }

        spec {
            container_concurrency = 80

            containers {
                image   = "gcr.io/blmsheet/blmsheet:latest"

                env {
                    name  = "SHEET_ID"
                    value = var.sheet_id
                }
                env {
                    name  = "TAB_ID"
                    value = var.tab_id
                }
                env {
                    name  = "START_ROW"
                    value = var.start_row
                }
                env {
                    name  = "DB_NAME"
                    value = var.firestore_collection
                }
                env {
                    name  = "REDIS_HOST"
                    value = google_redis_instance.cache.host
                }
                env {
                    name  = "PROJECT_ID"
                    value = var.project_name
                }
                env {
                    name  = "SCRAPE_TOPIC"
                    value = var.pubsub_topic
                }
                env {
                    name  = "AUTH_PASS"
                    value = var.basic_auth_pass
                }

                resources {
                    limits   = {
                        "cpu"    = "1000m"
                        "memory" = "256Mi"
                    }
                    requests = {}
                }
            }
        }
    }

    timeouts {}

    traffic {
        latest_revision = true
        percent         = 100
    }
}


data "google_iam_policy" "noauth" {
  binding {
    role = "roles/run.invoker"
    members = [
      "allUsers",
    ]
  }
}


resource "google_cloud_run_service_iam_policy" "noauth" {
  location              = google_cloud_run_service.app.location
  project               = google_cloud_run_service.app.project
  service               = google_cloud_run_service.app.name

  policy_data           = data.google_iam_policy.noauth.policy_data
}


resource "google_firestore_index" "composite-name-location-asc" {
    project             = var.project_name
    collection          = var.firestore_collection
    database            = "(default)"
    
    fields {
        field_path      = "name_first_letter"
        order           = "ASCENDING"
    }
    fields {
        array_config    = "CONTAINS"
        field_path      = "location_tags"
    }
    fields {
        field_path      = "__name__"
        order           = "ASCENDING"
    }
}


resource "google_firestore_index" "composite-name-location-dsc" {
    project             = var.project_name
    collection          = var.firestore_collection
    database            = "(default)"
    
    fields {
        field_path      = "name_first_letter"
        order           = "DESCENDING"
    }
    fields {
        array_config    = "CONTAINS"
        field_path      = "location_tags"
    }
    fields {
        field_path      = "__name__"
        order           = "ASCENDING"
    }
}


resource "google_firestore_index" "composite-name-genre-asc" {
    project             = var.project_name
    collection          = var.firestore_collection
    database            = "(default)"

    fields {
        field_path      = "name_first_letter"
        order           = "ASCENDING"
    }
    fields {
        array_config    = "CONTAINS"
        field_path      = "genre_tags"
    }
    fields {
        field_path      = "__name__"
        order           = "ASCENDING"
    }
}


resource "google_firestore_index" "composite-name-genre-dsc" {
    project             = var.project_name
    collection          = var.firestore_collection
    database            = "(default)"
    
    fields {
        field_path      = "name_first_letter"
        order           = "DESCENDING"
    }
    fields {
        array_config    = "CONTAINS"
        field_path      = "genre_tags"
    }
    fields {
        field_path      = "__name__"
        order           = "ASCENDING"
    }
}


resource "google_redis_instance" "cache" {
    display_name        = "Redis Instance for ${var.project_name} Cache"
    memory_size_gb      = 1
    name                = "${var.project_name}-redis-1"
    project             = var.project_name
    redis_version       = "REDIS_5_0"
    region              = var.project_region
    tier                = "BASIC"
}


resource "google_pubsub_topic" "scrape" {
    name                = var.pubsub_topic
}


resource "google_cloud_scheduler_job" "clear-cache" {
    name                = "clear-cache"
    project             = var.project_name
    region              = var.project_region
    schedule            = "0 0 29 2 1"
    time_zone           = var.timezone

    http_target {
        headers         = {}
        http_method     = "POST"
        uri             = "${google_cloud_run_service.app.status[0].url}/api/clear"
    }

    depends_on = [
        google_cloud_run_service.app,
    ]
}


resource "google_cloud_scheduler_job" "scrape-bandcamp" {
    name                = "daily-scrape-bandcamp"
    project             = var.project_name
    region              = var.project_region
    schedule            = "0 */6 * * *"
    time_zone           = var.timezone

    http_target {
        headers         = {}
        http_method     = "POST"
        uri             = "${google_cloud_run_service.app.status[0].url}/cron/scrape-bandcamp?auth=${var.basic_auth_pass}"
    }

    depends_on = [
        google_cloud_run_service.app,
    ]
}


resource "google_cloud_scheduler_job" "remove-old" {
    name                = "remove-old-entries"
    project             = var.project_name
    region              = var.project_region
    schedule            = "0 */12 * * *"
    time_zone           = var.timezone

    http_target {
        headers         = {}
        http_method     = "POST"
        uri             = "${google_cloud_run_service.app.status[0].url}/cron/remove-old?auth=${var.basic_auth_pass}"
    }

    depends_on = [
        google_cloud_run_service.app,
    ]
}


resource "google_cloud_scheduler_job" "sync-sheet" {
    name                = "sync-sheet-to-firestore"
    project             = var.project_name
    region              = var.project_region
    schedule            = "0 */3 * * *"
    time_zone           = var.timezone

    http_target {
        headers         = {}
        http_method     = "POST"
        uri             = "${google_cloud_run_service.app.status[0].url}/cron/sync?auth=${var.basic_auth_pass}"
    }

    depends_on = [
        google_cloud_run_service.app,
    ]
}


resource "google_cloudbuild_trigger" "push-trigger" {
    description         = "Push to master branch"
    disabled            = false
    filename            = "cloudbuild.yaml"
    name                = "default-push-trigger-1"
    project             = var.project_name
    substitutions  = {
      "_FUNCTION_NAME"  = "scrape-bandcamp-details"
      "_REGION"         = var.project_region
      "_SERVICE_NAME"   = google_cloud_run_service.app.name
      "_TOPIC_NAME"     = var.pubsub_topic
    }
}
