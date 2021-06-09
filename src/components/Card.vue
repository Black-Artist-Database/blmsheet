<template>
<div class="col-6 col-md-3 col-lg-3 p-2">
    <div class="card">
        <a x-href=link target="_blank">
        <div class="image-wrapper">
            <div class="play" @click="onPlay()" v-if="bandcamp_preview_id">
              <img src="@/assets/play.png"/>
            </div>
            <img :src="image" class="bc-image card-img-top" :alt="name">
        </div>
        <span
            v-if="type"
            class="badge badge-primary"
            v-bind:class="{
                'badge-producer': type == 'Producer',
                'badge-label': type == 'Label',
                'badge-artist': type == 'Artist',
                'badge-band': type == 'Band'
            }"
        >
            {{type}}
        </span>
        </a>
        <div class="card-body">
            <h6 class="card-title mb-0">{{ name }}</h6>
            <p class="mt-0 location-genre mb-0"><small>{{location}}</small></p>
            <p class="mt-0 location-genre">
              <small>
                <span v-for="(genre, index) in genres.slice(0,1)" :key="index">
                  {{genre}}
                </span>
              </small> 
            </p>
            <a :href=link target="_blank" class="bc-link">Bandcamp</a>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        name: String,
        link: String,
        artwork: String,
        type: String,
        location: String,
        genres: Array,
        bandcamp_ids: Array,
    },
    computed: {

        bandcamp_preview_id(){
          if (typeof this.bandcamp_ids == 'object' && this.bandcamp_ids.length > 0){
            return this.bandcamp_ids[0]
          } 
          return null
        },
        image(){
            if (this.artwork && this.artwork.length > 1) {
                return this.artwork
            } 
            var randomFileNumber = parseInt(Math.floor(Math.random() * 10) + 1);
            
            switch(randomFileNumber) {
              case 1:
                return require('@/assets/placeholders/01.jpg');
              case 2:
                return require('@/assets/placeholders/02.jpg');
              case 3:
                return require('@/assets/placeholders/03.jpg');
              case 4:
                return require('@/assets/placeholders/04.jpg');
              case 5:
                return require('@/assets/placeholders/05.jpg');
              case 6:
                return require('@/assets/placeholders/06.jpg');
              case 7:
                return require('@/assets/placeholders/07.jpg');
              case 8:
                return require('@/assets/placeholders/08.jpg');
              case 9:
                return require('@/assets/placeholders/09.jpg');
              case 10:
                return require('@/assets/placeholders/10.jpg');
            } 

            return require('@/assets/placeholders/01.jpg');
        }
    },
    methods: {
      onPlay () {
        this.$emit('on-play', this.bandcamp_preview_id);
      }
    }
}
</script>

<style scoped lang="scss">

  .card-body {
    position: relative;
    min-height: 170px;
  }

  .bc-link {
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    margin: auto;
  }

  .card {
    border:1px solid black;
    border-radius:0;
    height:100%;
  }

  a {
    color:black;
  }

  h6 {
    color:#0daa6c;
    text-decoration:underline;
  }

  .badge {
    z-index: 10;
    background:#32ff99;
    
    &.badge-producer { background:#33FF99; }
    &.badge-label { background:#336666; }
    &.badge-artist { background:#66CC99; }
    &.badge-band { background:#0AAA6C; }

  }

  .badge {
    position:absolute;
    top:15px;
    right:15px;
  }
  .card-title {
    text-transform: uppercase;
  }

  .image-wrapper{
    position: relative;
    width: 100%;
    overflow: hidden;
    background:black;
    background-image:url(../assets/loading-spinner.gif);
    background-position: center;
    background-repeat:no-repeat;
    display: flex;
    align-items: stretch;
  }

  .image-wrapper:before{
    content: "";
    display: block;
    padding-top: 100%;
  }

  .image-wrapper .bc-image {
    position:  absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    color: white;
    text-align: center;
  }

  .genres {
    text-transform: capitalize; 
    font-size:80%;
  }

  small {
    font-weight:bold;
    font-size:60%;
  }

  .location-genre {
    text-transform: uppercase;
    text-align: center;
  }


  .play {
    width:100%;
    background:rgba(0,0,0,0.5);
    z-index:9;
    opacity:0;
    transition: opacity 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    cursor:pointer;
    img {
      width:50%;
      max-width:80px;
    }
  }
  .image-wrapper:hover {
    .play {
      opacity:1;
    }
  }
</style>
