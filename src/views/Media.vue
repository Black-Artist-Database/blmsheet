<template>
  <div class="page">
    <div class="container" v-if="watch">
      <router-link to="/watch" class="back">Back to the list</router-link>
      <div class="head">
        <h1>{{watch.name}}</h1>
        <p class="intro" v-if="watch.introduction" v-html="watch.introduction"></p>
        <div class="media" v-if="watch.url">
          <div v-html="watch.url"></div>
        </div>
      </div>
      <div class="footer-links">
        <div class="link" v-for="(link, index) in watch.footer_links" :key="`footer-link-${index}`">
          <p><a :href="link.url" target="_blank">{{link.name}}</a></p>
        </div>
        <div class="link" v-for="(link, index) in watch.embed_links" :key="`footer-link-${index}`">
          <div v-html="link"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'watch',
  computed: {
    ...mapState({
      list: state => state.watch.list,
      watch: state => state.watch.current
    })
  },
  mounted () {
    window.scrollTo(0, 0)
    if (this.$route.params.id) {
      this.$store.commit('watch/set_current_by_id', this.$route.params.id)
      console.log(this.watch)
    } else if (!this.watch && this.list.length === 0 || !this.$route.params.id){
      this.$router.push({name: 'Watch'})
    }
  },
}
</script>

<style lang="scss" scoped>
.page {
  text-align: left;
}

  .back {
    display: block;
    color: black;
    margin-left: 20px;
    margin-top: 20px;
    margin-right: auto;
  }
  .head {
    text-align: center;
    max-width: 800px;
    margin: auto;
    margin-top: 40px;
    p.intro {
      text-align: left;
      width: 100%;
      margin-top: 20px;
    }
    img {
      width: 100%;
      max-width: 700px;
      margin: 20px auto;
    }
    .media {
      margin: 20px auto;
      div {
        position: relative;
        padding-bottom: 56.25%; /* 16:9 */
        height: 0;
        width: 100%;
        /deep/ iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .header-links, .footer-links{
    max-width: 800px;
    margin: auto;
    text-align: left;
    .link {
      /deep/ iframe {
        margin-bottom: 40px;
      }
    }
  }
  .footer-links {
    margin-top: 50px;
  }
  .questions {
    max-width: 800px;
    margin: auto;
    text-align: left;
    .quote {
      font-size: 20px;
      text-align: center;
      font-weight: bold;
    }
    .bandcamp_pick {
      margin-bottom: 80px;
      .link {
        margin: 20px auto;
      }
      .title {
        font-size: 24px;
      }
    }
    .image {
      text-align: center;
      p {
        margin-top: 0;
        font-size: 0.9em;
      }
    }
    .bold {
      font-weight: bold;
      margin-bottom: 0px;
    }
    .question {
      margin: 40px 0;
      p {
        width: 100%;
      }
      .title {
        font-weight: bold;
        margin-bottom: 5px;
      }
      img {
        display: block;
        width: 100%;
        max-width: 320px;
        margin: 20px auto;
        &.landscape {
          max-width: 690px;
        }
        &.cover {
          max-width: 700px;
        }
      }
    }
 }


</style>
