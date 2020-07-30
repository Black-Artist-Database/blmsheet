<template>
  <div class="page">
    <div class="container">
      <router-link to="/read" class="back">Back to the list</router-link>
      <div class="head">
        <h1>{{article.name}}</h1>
        <p>Photo by <b>{{article.credit}}</b></p>
        <p>Words by <b>{{article.author}}</b></p>
        <img :src="require(`@/assets/${article.illus}`)" />
        <p class="intro" v-if="article.introduction">{{article.introduction}}</p>
      </div>
      <div class="header-links">
        <div class="link" v-for="(link, index) in article.links" :key="`link-${index}`">
          <p> {{link.name}} : <a :href="link.url" target="_blank">{{link.url}}</a></p>
        </div>
      </div>
      <div class="questions">
        <div class="question" v-for="(question, index) in article.questions" :key="`article-${index}`">
          <div v-if="question.type === 'image'">
            <img :src="require(`@/assets/${question.path}`)" />
          </div>
          <div v-if="question.type === 'quote'">
            <p>{{article.quote}}</p>
          </div>
          <div v-else>
            <p class="title" v-if="question.title">{{question.title}}</p>
            <p v-html="question.answer"></p>
          </div>
        </div>
      </div>
      <div class="footer-links">
        <div class="link" v-for="(link, index) in article.footer_links" :key="`footer-link-${index}`">
          <p><b>{{link.name}}</b> : <a :href="link.url" target="_blank">{{link.url}}</a></p>
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
      article: state => state.articles.current
    })
  },
  mounted () {
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
      }
    }
 }


@media (prefers-color-scheme: dark) {
  a { color: white !important; text-decoration:underline; }
}

</style>
