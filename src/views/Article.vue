<template>
  <div class="page">
    <div class="container" v-if="article">
      <router-link to="/read" class="back">Back to the list</router-link>
      <div class="head">
        <h1>{{article.name}}</h1>
        <p v-if="article.credit">Photo by <b>{{article.credit}}</b></p>
        <p>Words by <b>{{article.author}}</b></p>
        <img :src="require(`@/assets/${article.illus}`)" />
        <div class="bandcamp">
          <iframe style="border: 0; max-width: 600px; width: 100%; height: 120px;" :src="`https://bandcamp.com/EmbeddedPlayer/album=${article.bandcamp_id}/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true`" seamless><a :href="article.bandcamp_link"></a></iframe>
        </div>
        <p class="intro" v-if="article.introduction" v-html="article.introduction"></p>
      </div>
      <div class="header-links">
        <div class="link" v-for="(link, index) in article.links" :key="`link-${index}`">
          <p><a :href="link.url" target="_blank">{{link.name}} </a></p>
        </div>
      </div>

      <div class="questions">
        <div class="question" v-for="(question, index) in article.questions" :key="`article-${index}`">
          <div class="image" v-if="question.type === 'image'">
            <img :src="require(`@/assets/${question.path}`)" :class="question.format"/>
            <p class="credit" v-if="question.author"><i>Photo by {{question.author}}</i></p>
          </div>
          <div v-else-if="question.type === 'quote'">
            <p class="quote">{{question.answer}}</p>
          </div>
          <div v-else>
            <p class="title" v-if="question.title">{{question.title}}</p>
            <p v-html="question.answer"></p>
          </div>
        </div>
      </div>

      <div class="footer-links">
        <div class="link" v-for="(link, index) in article.footer_links" :key="`footer-link-${index}`">
          <p><a :href="link.url" target="_blank">{{link.name}}</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'Article',
  computed: {
    ...mapState({
      list: state => state.articles.list,
      article: state => state.articles.current
    })
  },
  mounted () {
    if (this.$route.params.id) {
      this.$store.commit('articles/set_current_by_id', this.$route.params.id)
    } else if (!this.article && this.list.length === 0 || !this.$route.params.id){
      this.$router.push({name: 'Read'})
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
      max-width: 600px;
      margin: 20px auto;
    }
    .bandcamp {
      margin: 20px auto;
    }
  }
  .header-links, .footer-links{
    max-width: 800px;
    margin: auto;
    text-align: left;
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
    .image {
      text-align: center;
      p {
        margin-top: 0;
        font-size: 0.9em;
      }
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
          max-width: 500px;
        }
      }
    }
 }


@media (prefers-color-scheme: dark) {
  a { color: white !important; text-decoration:underline; }
}

</style>
