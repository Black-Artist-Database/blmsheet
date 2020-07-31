<template>
  <div class="page">
    <div class="container mt-3">
      <div v-if="articles.length === 0" class="m-4">Nothing to see here</div>
      <div class="row">
        <ArticleCard v-for="(item, index) in articles"
          :key="index"
          :name="item.short_name"
          :author="item.author"
          :illus="item.illus"
          @on-click="onClick(item)"
        />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ArticleCard from '@/components/ArticleCard.vue'
import {mapState} from 'vuex'
export default {
  name: 'Read',
  components: {
    ArticleCard
  },
  computed: {
    ...mapState({
      articles: state => state.articles.list
    }),
    canDisplayArticles () {
      var canDisplay = false
      var now = new Date()
      this.articles.map(a => {
        let aDate = new Date(a.date)
        if (now > aDate) {
          canDisplay = true
        }
      })
      return canDisplay
    }
  },
  mounted () {
    this.$store.commit('articles/set_current', null)
  },
  methods: {
    onClick (article) {
      this.$store.commit('articles/set_current', article)
      this.$router.push({name: 'article'})
    }
  }
}
</script>

<style lang="scss" scoped>
.relative {
  position: relative;
}
.spinner-border {
  width: 3rem;
  height: 3rem;
  color: #0064b5;
}

.page {
  padding-bottom:100px;
}

.ig-link {
  color:#0c5460;
  text-decoration:underline;
}

</style>