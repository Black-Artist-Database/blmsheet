<template>
  <nav class="navbar navbar-light bg-light p-3 mb-2">
  <h3>Filter</h3>

  <a class="btn btn-primary">
  <svg class="bi bi-shuffle" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M12.646 1.146a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.793 4l-2.147-2.146a.5.5 0 0 1 0-.708zm0 8a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.793 12l-2.147-2.146a.5.5 0 0 1 0-.708z"/>
    <path fill-rule="evenodd" d="M0 4a.5.5 0 0 1 .5-.5h2c3.053 0 4.564 2.258 5.856 4.226l.08.123c.636.97 1.224 1.865 1.932 2.539.718.682 1.538 1.112 2.632 1.112h2a.5.5 0 0 1 0 1h-2c-1.406 0-2.461-.57-3.321-1.388-.795-.755-1.441-1.742-2.055-2.679l-.105-.159C6.186 6.242 4.947 4.5 2.5 4.5h-2A.5.5 0 0 1 0 4z"/>
    <path fill-rule="evenodd" d="M0 12a.5.5 0 0 0 .5.5h2c3.053 0 4.564-2.258 5.856-4.226l.08-.123c.636-.97 1.224-1.865 1.932-2.539C11.086 4.93 11.906 4.5 13 4.5h2a.5.5 0 0 0 0-1h-2c-1.406 0-2.461.57-3.321 1.388-.795.755-1.441 1.742-2.055 2.679l-.105.159C6.186 9.758 4.947 11.5 2.5 11.5h-2a.5.5 0 0 0-.5.5z"/>
  </svg>
  Pick 50 random artists
  </a>

  <form class="d-block w-100">
    <div class="form-inline">
      <div class="input-group mr-3">
        <select>
          <option>Genre</option>
          <option v-for="genre in genresData" :value="genre" v-bind:key="genre">
              {{ genre }}
          </option>
        </select>
      </div>
      <div class="input-group">
        <select>
          <option value="-">Location</option>
          <option v-for="location in locationsData" :value="location" v-bind:key="location">
              {{ location }}
          </option>
        </select>
      </div>
    </div>
    <ul class="mt-3 mb-0">
        <li v-for="letter in alphabet" :key="letter" class="d-inline text-uppercase h2">
          {{ letter }}
        </li>
    </ul>
  </form>
</nav>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Filters',
  mounted(){
    this.fetchGenres();
    this.fetchLocations();
  },
  data: function() {
    return {
      genresData: [],
      locationsData: [],
      alphabet: 'abcdefghijklmnopqrstuvwxyz#'.split(''),
    }
  },
  methods: {
    fetchGenres(){
        axios.get('http://localhost:5000/api/genres')
        .then((response) => (
            this.genresData = response.data
            ))
        .catch((err) => {
            console.log(err)
        })
    },
    fetchLocations(){
        axios.get('http://localhost:5000/api/locations')
        .then((response) => (
            this.locationsData = response.data
            ))
        .catch((err) => {
            console.log(err)
        })
    }
  }
}
</script>

<style scoped lang="scss">

</style>
