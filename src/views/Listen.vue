<template>
  <div class="page">
    <div class="container mt-3">
      <div v-if="voices.length === 0" class="m-4">Nothing to see here</div>
      <div class="row" v-if="voices.length > 1">
        <p>Sort by <a @click="toggleSort"><span :class="{'active': sort === 'oldest'}">oldest</span></a> | <a @click="toggleSort"><span :class="{'active': sort === 'newest'}">newest</span></a></p>
      </div>
      <div class="row">
        <ArticleCard v-for="(item, index) in voices"
          :key="index"
          :name="item.short_name"
          :author="item.author"
          :illus="item.illus"
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
      voices: state => state.voices.list,
      sort: state => state.voices.sort
    }),
  },
  data () {
    return {
      sortedVoices: []
    }
  },
  watch: {
    sort(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.sortedVoices = this.voices.reverse()
      }
    }
  },
  mounted () {
    this.$store.commit('voices/reset')
    this.$store.commit('voices/set_current', null)
    if (this.sort === 'newest') {
      this.sortedVoices = this.voices.reverse()
    }
  },
  methods: {
    onClick (article, idx) {
      this.$store.commit('voices/set_current', article)
      if (this.sort === 'oldest') {
        this.$router.push({name: 'voice', params: { id: idx + 1 }})
      } else {
        this.$router.push({name: 'voice', params: { id: this.voices.length - idx }})
      }

    },
    toggleSort () {
      if (this.sort === 'newest') {
        this.$store.commit('voices/sort', 'oldest')
      } else {
        this.$store.commit('voices/sort', 'newest')
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