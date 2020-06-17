<template>
  <div class="container mt-3">
    <h2 class="mt-4 mb-4">A crowd-sourced list of black artists on Bandcamp.</h2>
    <Filters :filters="filters"/>
      
      <div v-if="list.length === 0" class="m-4">No results found, try broadening your search or <a href="/">reset all filters</a>.</div>
      <div class="row">
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
    filters: {
      genre: '',
      location: null,
      first_letter: 'a',
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
   },
  },
  mounted(){
    this.fetchList()
  },
  methods: {
    fetchList(){
        axios.get('/api/list', { params: this.filters })
        .then((response) => (
            this.list = response.data
        ))
    },
    fetchRandom(){
        axios.get('/api/list?random=12&timestamp='+new Date().getSeconds())
        .then((response) => (
            this.list = response.data
        ))
    }
  }

}
</script>