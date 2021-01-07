<template>
  <div class="page">
    <div class="container" v-if="voice">
      <router-link to="/voices" class="back">Back to the list</router-link>
      <div class="head">
        <h1>{{voice.name}}</h1>
        <p v-if="voice.credit">Photo by <b>{{voice.credit}}</b></p>
        <p v-if="voice.author">Words by <b>{{voice.author}}</b></p>
        <p v-if="voice.top_desc">{{voice.top_desc}}</p>
        <img v-if="voice.illus" :src="require(`@/assets/${voice.illus}`)" />
        <p v-if="voice.credit_illu"><i>Photo by {{voice.credit_illu}}</i></p>
        <p v-if="voice.credit_illu_all"><i>{{voice.credit_illu_all}}</i></p>
        <div class="mixcloud" v-if="voice.mixcloud_url">
          <iframe width="100%" height="120" :src="voice.mixcloud_url" frameborder="0" ></iframe>
        </div>
        <p class="intro" v-if="voice.introduction" v-html="voice.introduction"></p>
      </div>
      <div class="header-links">
        <div class="link" v-for="(link, index) in voice.links" :key="`link-${index}`">
          <p><a :href="link.url" target="_blank">{{link.name}} </a></p>
        </div>
      </div>
      <div class="footer-links">
        <div class="link" v-for="(link, index) in voice.footer_links" :key="`footer-link-${index}`">
          <p><a :href="link.url" target="_blank">{{link.name}}</a></p>
        </div>
        <div class="link" v-for="(link, index) in voice.embed_links" :key="`footer-link-${index}`">
          <div v-html="link"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'voice',
  computed: {
    ...mapState({
      list: state => state.voices.list,
      voice: state => state.voices.current
    })
  },
  mounted () {
    window.scrollTo(0, 0)
    if (this.$route.params.id) {
      this.$store.commit('voices/set_current_by_id', this.$route.params.id)
      console.log(this.voice)
    } else if (!this.voice && this.list.length === 0 || !this.$route.params.id){
      this.$router.push({name: 'Voices'})
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
    margin-top: 40px;
    max-width: 800px;
    margin: auto;
    p.intro {
      text-align: left;
      width: 100%;
    }
    img {
      width: 100%;
      max-width: 700px;
      margin: 20px auto;
    }
    .mixcloud {
      margin: 20px auto;
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


@media (prefers-color-scheme: dark) {
  a { color: white !important; text-decoration:underline; }
}

</style>
