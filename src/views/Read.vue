<template>
  <div class="page">
    <div class="container mt-3">
      <div v-if="articles.length === 0" class="m-4">Nothing to see here</div>
      <div class="row" v-if="articles.length > 1">
        <p>Sort by <a @click="toggleSort"><span :class="{'active': sort === 'oldest'}">oldest</span></a> | <a @click="toggleSort"><span :class="{'active': sort === 'newest'}">newest</span></a></p>
      </div>
      <div class="row">

        <ArticleCard v-for="(item, index) in articles"
          :key="index"
          :name="item.short_name"
          :author="item.author"
          :illus="item.illus"
          :type="item.type"
          @on-click="onClick(item, index)"
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
      articles: state => state.articles.list,
      sort: state => state.articles.sort
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
    },

  },
  data () {
    return {
      sortedArticles: []
    }
  },
  watch: {
    sort(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.sortedArticles = this.articles.reverse()
      }
    }
  },
  mounted () {
    this.$store.commit('articles/reset')
    this.$store.commit('articles/set_current', null)
    if (this.sort === 'newest') {
      this.sortedArticles = this.articles.reverse()
    }
  },
  methods: {
    onClick (article, idx) {
      this.$store.commit('articles/set_current', article)
      if (this.sort === 'oldest') {
        this.$router.push({name: 'article', params: { id: idx + 1 }})
      } else {
        this.$router.push({name: 'article', params: { id: this.articles.length - idx }})
      }

    },
    toggleSort () {
      if (this.sort === 'newest') {
        this.$store.commit('articles/sort', 'oldest')
      } else {
        this.$store.commit('articles/sort', 'newest')
      }
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

a {
  cursor: pointer;
}
.active {
  font-weight: bold;
}

</style>