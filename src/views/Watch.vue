<template>
  <div class="page">
    <div class="container mt-3">
      <div v-if="watch.length === 0" class="m-4">Nothing to see here</div>
      <div class="row" v-if="watch.length > 1">
        <p>Sort by <a @click="toggleSort"><span :class="{'active': sort === 'oldest'}">oldest</span></a> | <a @click="toggleSort"><span :class="{'active': sort === 'newest'}">newest</span></a></p>
      </div>
      <div class="row">
        <ArticleCard v-for="(item, index) in watch"
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
import ArticleCard from '@/components/ArticleCard.vue'
import {mapState} from 'vuex'
export default {
    name: 'Watch',
    components: {
      ArticleCard
    },
    computed: {
      ...mapState({
        watch: state => state.watch.list,
        sort: state => state.watch.sort
      }),
    },
    data () {
      return {
        sortedWatch: []
      }
    },
    watch: {
      sort(newVal, oldVal) {
        if (newVal !== oldVal) {
          this.sortedWatch = this.watch.reverse()
        }
      }
    },
    mounted () {
      this.$store.commit('watch/reset')
      this.$store.commit('watch/set_current', null)
      if (this.sort === 'newest') {
        this.sortedVoices = this.watch.reverse()
      }
    },
    methods: {
      onClick (article, idx) {
        this.$store.commit('watch/set_current', article)
        if (this.sort === 'oldest') {
          this.$router.push({name: 'media', params: { id: idx + 1 }})
        } else {
          this.$router.push({name: 'media', params: { id: this.watch.length - idx }})
        }

      },
      toggleSort () {
        if (this.sort === 'newest') {
          this.$store.commit('watch/sort', 'oldest')
        } else {
          this.$store.commit('watch/sort', 'newest')
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>