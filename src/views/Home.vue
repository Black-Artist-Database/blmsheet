<template>
  <div class="container mt-3">
    <h2>A crowd-sourced list of black artists on Bandcamp.</h2>
    <Filters name="Welcome to Your Vue.js App" :filters="filters"/>

      <div class="d-flex flex-wrap">
        <Card v-for="(item, index) in list"
          :key="index"
          :name="item.name" 
          :location="item.location" 
          :link="item.link" 
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
      genre: null,
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
   }
  },
  mounted(){
    this.fetchList()
  },
  methods: {
    fetchList(){
        axios.get('http://localhost:5000/api/list', { params: this.filters })
        .then((response) => (
            this.list = response.data
        ))
    }
  }

}
</script>
