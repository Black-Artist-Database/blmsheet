<template>
  <div class="page">
    <div class="container mt-3">

     <!--  <div class="alert alert-info" role="alert">
        <a href="https://www.instagram.com/blackbandcamp/" class="nav-link" target="_blank"><img src="../assets/instagram-icon-blue.png" class="ig-icon"></a>
        <h4 class="alert-heading">We are now on Instagram</h4>
        <p><a href="https://www.instagram.com/blackbandcamp/" class="ig-link" target="_blank">Follow us for updates</a></p>
      </div> -->
      <h1 class="h3 mt-4 mb-4 bad-title">EVERYDAY IS A GOOD DAY TO SUPPORT AND BUY FROM <span>BLACK ARTISTS</span>.</h1>
      <!-- Revive Adserver Hosted edition - Ad Management iFrame Tag - Generated with Revive Adserver v5.2.0 -->
      <iframe id='ab87ff01' name='ab87ff01' src='https://servedby.revive-adserver.net/afr.php?zoneid=9161&amp;cb=INSERT_RANDOM_NUMBER_HERE' frameborder='0' scrolling='no' width='728' height='90' allow='autoplay' class='ad-unit-desktop'><a href='https://servedby.revive-adserver.net/ck.php?n=aabc519c&amp;cb=INSERT_RANDOM_NUMBER_HERE' target='_blank'><img src='https://servedby.revive-adserver.net/avw.php?zoneid=9161&amp;cb=INSERT_RANDOM_NUMBER_HERE&amp;n=aabc519c' border='0' alt='' /></a></iframe>

      
      <Filters :filters="filters" @loading="e => loading = e"/>
      <div class="d-flex justify-content-center" v-if="loading">
        <img src="../assets/loading-spinner.gif">
      </div>
      <div v-if="list.length === 0 && !loading" class="m-4">No results found, try broadening your search or <a href="/">reset all filters</a>.</div>
      <div class="row" v-if="!loading">
        <Card v-for="(item, index) in list"
          :key="index"
          :name="item.name"
          :genres="item.genre_tags"
          :location="item.location"
          :link="item.link"
          :junodownload="item.junodownload"
          :junorecord="item.junorecord"
          :artwork="item.custom_image_url && item.custom_image_url.length > 0 ? item.custom_image_url : item.bandcamp_image_url"
          :bandcamp_ids="item.bandcamp_album_ids"
          :type="item.type"
          @on-play="onPlay"
        />
      </div>
    </div>
    <Player v-if='currentBandcampId' :bandcamp-id='currentBandcampId' />
  </div>
</template>

<script>
// @ is an alias to /src
import { debounce } from 'lodash-es'
import axios from 'axios';
import Filters from '@/components/Filters.vue'
import Card from '@/components/Card.vue'
import Player from '@/components/Player.vue'

export default {
  name: 'Home',
  components: {
    Filters,
    Card,
    Player,
  },
  data: () => ({
    list: [],
    loading: true,
    currentBandcampId: null,
    filters: {
      genre: '',
      name: '',
      location: null,
      first_letter: 'a'
    },
  }),
  watch: {
   filters: {
      handler: debounce(function () {
        this.fetchList()
      }, 500),
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
    },
    onPlay(bandcampId) {
      this.currentBandcampId = bandcampId
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

 .ad-unit-desktop {
max-width:100%;
 }
  @media screen and (max-width: 800px) {

    .ad-unit-desktop {
      display:none;
    }

  }
</style>
