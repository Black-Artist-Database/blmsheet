<template>
  <div class="container mt-3">
    <h2 class="mt-4 mb-4">A crowd-sourced list of black artists on Bandcamp.</h2>
    <Filters :filters="filters" @loading="e => loading = e"/>
    <div class="d-flex justify-content-center" v-if="loading">
      <div class="spinner-border m-5" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <div v-if="list.length === 0 && !loading" class="m-4">No results found, try broadening your search or <a href="/">reset all filters</a>.</div>
    <div class="row" v-if="!loading">
      <Card v-for="(item, index) in list"
        :key="index"
        :name="item.name"
        :genres="item.genre_tags"
        :location="item.location"
        :link="item.link"
        :artwork="item.bandcamp_image_url"
        :type="item.type"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import Filters from '@/components/Filters.vue'
import Card from '@/components/Card.vue'

export default {
  name: 'Home',
  components: {
    Filters,
    Card
  },
  data: () => ({
    list: [],
    loading: true,
    filters: {
      genre: '',
      name: '',
      location: null,
      first_letter: 'a'
    },
  }),
  watch: {
   filters: {
      handler: function () {
        this.fetchList()
      },
      deep: true //this picks up nested items e.g. filters.genre
   },
   //once we filter into genre or location we can lose the alphabet filter by default
   'filters.genre': function(){
      this.filters.first_letter = null
   },
   'filters.location': function(){
      this.filters.first_letter = null
      if (this.filters.location.length === 0) {
        this.fetchList()
      }
   },
   'filters.name': function(){
      if (this.filters.first_letter) {
        this.filters.first_letter = null
      }
   },
  },
  mounted(){
    this.fetchList()
  },
  methods: {
    fetchList(){
        this.loading = true
        axios.get('/api/list', { params: this.filters })
        .then((response) => {
            this.loading = false
            this.list = response.data
        })
    },
    fetchRandom(){
        this.filters.name = ''
        this.loading = true
        axios.get('/api/list?random=12&timestamp='+new Date().getSeconds())
        .then((response) => {
            this.loading = false
            this.list = response.data
        })
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
  color: #1da0c2;
}

</style>