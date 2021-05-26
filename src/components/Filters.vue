<template>
<div>
  <div class="filters p-3 mb-2">
    <div class="btns">
    <a class="btn btn-sml btn-grey" v-on:click="shuffleRandom">
  
     Random Shuffle
      <svg class="bi bi-shuffle" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M12.646 1.146a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.793 4l-2.147-2.146a.5.5 0 0 1 0-.708zm0 8a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.793 12l-2.147-2.146a.5.5 0 0 1 0-.708z"/>
      <path fill-rule="evenodd" d="M0 4a.5.5 0 0 1 .5-.5h2c3.053 0 4.564 2.258 5.856 4.226l.08.123c.636.97 1.224 1.865 1.932 2.539.718.682 1.538 1.112 2.632 1.112h2a.5.5 0 0 1 0 1h-2c-1.406 0-2.461-.57-3.321-1.388-.795-.755-1.441-1.742-2.055-2.679l-.105-.159C6.186 6.242 4.947 4.5 2.5 4.5h-2A.5.5 0 0 1 0 4z"/>
      <path fill-rule="evenodd" d="M0 12a.5.5 0 0 0 .5.5h2c3.053 0 4.564-2.258 5.856-4.226l.08-.123c.636-.97 1.224-1.865 1.932-2.539C11.086 4.93 11.906 4.5 13 4.5h2a.5.5 0 0 0 0-1h-2c-1.406 0-2.461.57-3.321 1.388-.795.755-1.441 1.742-2.055 2.679l-.105.159C6.186 9.758 4.947 11.5 2.5 11.5h-2a.5.5 0 0 0-.5.5z"/>
    </svg>
    </a>
     <router-link to="/add" class="btn btn-sml btn-grey">
     Add Submission
    </router-link>
    </div>

    <form class="d-flex justify-space-between">
      <div class="d-flex flex-row flex-wrap justify-content-center">
        <div class="input-group input-group-sm d-flex justify-content-center">
          <input placeholder="Name" type="text" class="form-control" id="name-filter" v-model="filters.name">
          <a @click="filters.name = ''" v-if="filters.name !== ''">&times;</a>
        </div>
        <div class="input-group input-group-sm">
          <div>
          <select class="custom-select" v-model="filters.genre" :disabled="filters.name !== ''">
            <option value="">GENRE</option>
            <option v-for="genre in genresData" :value="genre" :key="genre">
                {{ genre }}
            </option>
          </select>
          </div>
        </div>
        <div class="input-group">
        <LocationTypeAhead :filters="filters" class="location-filter"/>
        </div>
      </div>
    </form>
  </div>
  <div :class="{ 'alphabet-filter': true, disabled: filters.name }">
  <ul class="mt-3 mb-3 mb-0">
      <li v-on:click="filters.first_letter = null" :class="{ 'd-inline text-uppercase h4 letter mr-3': true, active: filters.first_letter === null }">All</li>
      <li v-for="letter in alphabet" :key="letter" v-on:click="filters.first_letter = letter; filters.name = ''" :class="{ 'd-inline text-uppercase h4 letter': true, active: letter === filters.first_letter }" >
        {{ letter }}
      </li>
  </ul>
  </div>

  </div>
</template>

<script>
import axios from 'axios';
import LocationTypeAhead from '@/components/LocationTypeAhead.vue'

export default {
  name: 'Filters',
  props: {
    filters: Object,
  },
  components: {
    LocationTypeAhead
  },
  mounted(){
    this.fetchGenres();
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
        this.$emit('loading', true)
        axios.get('/api/genres')
        .then((response) => {
            this.genresData = response.data
            this.$emit('loading', false)
        })
    },
    shuffleRandom(){
      this.$parent.fetchRandom();
    }
  }
}
</script>

<style scoped lang="scss">
  $bc-blue: #0064b5;

  .letter {
    cursor: pointer;
    &:hover {
      color:#ccc;
    } 
    &.active {
      color: black;
    }
    color: rgba(0,0,0, 0.5);
  }

  select {
    width: 100% !important;
    height: 100%;
    background-color: transparent;
    border-color: rgba(255,255,255,0.5);
  }

  .input-group, .location-filter {
    width: 200px;
    // width: 100%;
    height: 40px !important;
    margin:10px 0;
    padding:0 !important;
    input, /deep/div, /deep/ div input {
      height: 100%;
      width: 100%;
      background-color: transparent;
      border-color: rgba(255,255,255,0.5);
    }
  }
  select, option {text-transform:capitalize !important;}

  .input-group div {
    margin:auto;
  }
  .input-group {
    border-right:1px solid black;
    position: relative;
    input {
      z-index: 2;
    }
    a {
      z-index: 3;
      cursor: pointer;
      position: absolute;
      right: 10px;
      top: 0px;
      line-height: 40px;
      font-size: 22px;
    }
  }



  .alphabet-filter {
    overflow-x:scroll;
    transition:opacity 0.2s;
    background-image:url(../assets/ball-bar.svg);
    background-size:100% auto;
    background-position:bottom;
    background-repeat:no-repeat;
    display:inline-block;
    width:100%;
    ul {
      padding-left: 0;
      min-width:900px;
      text-align:center;
    }
    &.disabled {
      opacity:0.3;
      pointer-events: none;
    }
    margin-bottom:30px;
  }

  .btn-grey {
    background:#e8e8e8;
    color:black;
    border-radius:0;
    border-color:black;
    text-transform:uppercase;
    padding:2px 8px;
    font-size:12px;
    &:hover {
      background:black;
      color:#e8e8e8;
    }
  }


    .filters {
      text-align:left;
      display:inline-block;
      color: black;
    }
    select, input, /deep/ div input {
      background-color: #f9f9f9 !important;
    }
     select, input, /deep/div, /deep/ div input {
      color: black !important;
      ::placeholder {
        color:black !important;
      }
      font-size:15px !important;
      text-transform:uppercase;
    }
    #name-filter {
      padding-left:0;
    }
    select {
    }
    select:disabled {
      opacity: 1;
    }
    hr {
      background-color: #f7f7f7;
    }

    .btns {
      display:flex;
      justify-content:space-between;
    }

    @media (max-width: 500px) {
      .input-group {
        width: 100%;

        select, /deep/ input {
          padding-left: 0
        }
      }
    }

</style>
