<template>
  <div class="page">
    <div class="container mt-3">

  
      <h1 class="h3 mt-4 mb-4 bad-title">EVERYDAY IS A GOOD DAY TO COLLABORATE WITH <span>BLACK CREATIVES</span>.</h1>
  
      <CreativeFilters :filters="filters" @loading="e => loading = e" :loading="loading" ref="filters_ref"/>
      
      <p v-if="maintenance && !loading" style="background: #ffffed;padding: 10px;text-align: center;max-width: 600px;margin: 20px auto 100px auto;">We’re currently running some maintenance on the database, in the meantime check out our mixes, interviews and more using the headers above!</p>
      <div class="d-flex justify-content-center" v-if="loading">
        <img src="../assets/loading-spinner.gif">
      </div>
      <div v-if="!maintenance && !loading">
        <div v-if="list.length === 0 && !loading" class="m-4">No results found, try broadening your search or <a href="/">reset all filters</a>.</div>
        <div class="row" v-if="!loading">
          <CreativeCard v-for="(item, index) in list"
            :key="index"
            :name="item.name"
            :profession="item.profession"
            :subprofession="item.subs"
            :city="item.city"
            :country="item.country"
            :imageUrl="item.image"
            :website="item.socials.website"
            :instagram="item.socials.instagram"
            :twitter="item.socials.twitter"
            :headline="item.headline"
            :link="getCreativeLink(item)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { debounce } from 'lodash-es'
import axios from 'axios';
import CreativeFilters from '@/components/CreativeFilters.vue'
import CreativeCard from '@/components/CreativeCard.vue'

export default {
  name: 'Creatives',
  components: {
    CreativeFilters,
    CreativeCard,
  },
  data: () => ({
    list: [],
    loading: true,
    maintenance: false,
    filters: {
      profession: '',
      subprofession: '',
      city: '',
      country: '',
      first_letter: null
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
   'filters.profession': function(){
      this.$refs.filters_ref.fetchSubProfessions()
   },
  },
  mounted(){
    this.fetchList()
  },
  methods: {
    fetchList(){
        this.loading = true
        axios.get('/api/list?db=creatives', { params: this.filters })
        .then((response) => {
            this.loading = false
            if (response.data.maintenance) {
              this.maintenance = response.data.maintenance
            } else {
              this.list = response.data
            }
        })
    },
    fetchRandom(){
        this.filters.name = ''
        this.loading = true
        axios.get('/api/list?db=creatives&random=12&timestamp='+new Date().getSeconds())
        .then((response) => {
            this.loading = false
            if (response.data.maintenance) {
              this.maintenance = response.data.maintenance
            } else {
              this.list = response.data
            }
        })
    },
    onPlay(bandcampId) {
      this.currentBandcampId = bandcampId
    },
    getCreativeLink(item) {
      if (item.links.length > 0) {
        return item.links[0]
      } else {
        if (item.socials.instagram.length > 0) {
          return item.socials.instagram
        } else if (item.socials.twitter.length > 0) {
          return item.socials.twitter
        }
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

 .ad-unit-desktop {
max-width:100%;
 }
  @media screen and (max-width: 800px) {

    .ad-unit-desktop {
      display:none;
    }

  }
</style>
