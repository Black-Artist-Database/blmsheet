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
                'badge-bc-red': type == 'Producer',
                'badge-bc-purple': type == 'Label',
                'badge-bc-blue': type == 'Artist',
                'badge-bc-green': type == 'Band'
            }"
        >
            {{type}}
        </span>
        </a>
        <div class="card-body">
            <h5 class="card-title">{{ name }}<br><small>{{location}}</small></h5>
            <p class="genres"><span v-for="(genre, index) in genres" :key="index">
                {{genre}}<span v-if="index != Object.keys(genres).length - 1">, </span>
                </span>
            </p>
            <a :href=link target="_blank">Open in Bandcamp</a>
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
                return require('@/assets/placeholders/1.png');
              case 2:
                return require('@/assets/placeholders/2.png');
              case 3:
                return require('@/assets/placeholders/3.png');
              case 4:
                return require('@/assets/placeholders/4.png');
              case 5:
                return require('@/assets/placeholders/5.png');
              case 6:
                return require('@/assets/placeholders/6.png');
              case 7:
                return require('@/assets/placeholders/7.png');
              case 8:
                return require('@/assets/placeholders/8.png');
              case 9:
                return require('@/assets/placeholders/9.png');
              case 10:
                return require('@/assets/placeholders/10.png');
            } 

            return require('@/assets/placeholders/1.png');
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

  $bc-green: #1DC379;
  $bc-red: #C3411D;
  $bc-purple: #941DC3;
  $bc-blue: #0064b5;

   @media (prefers-color-scheme: dark) {
    .card {
      border-color: rgba(255,255,255,0.3);
      background-color: transparent;
      &:hover {
        border-color: rgba(255,255,255,0.5);
      }
      .card-body {
        a { color: white; text-decoration:underline; }
      }

    }
  }
  .badge {
    z-index: 10;
  }
  .badge-bc-green {
    background-color: $bc-green;
  }

  .badge-bc-red {
    background-color: $bc-red;
  }

  .badge-bc-purple {
    background-color: $bc-purple;
  }

  .badge-bc-blue {
    background-color: $bc-blue;
  }

  .badge {
    position:absolute;
    top:15px;
    right:15px;
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
