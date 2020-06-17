<template>
<div class="col-6 col-md-3 col-lg-3 p-2">
    <div class="card">
        <a :href="link" target="_blank">
        <div class="image-wrapper" :style="{'background-image': `url(${image})`}">
            <span class="sr-only">{{name}}</span>

            <div class="body hidden">
                <h5 class="card-title">{{ name }}<br><small>{{location}}</small></h5>
                <p class="genres"><span v-for="(genre, index) in genres" :key="index">
                    {{genre}}<span v-if="index != Object.keys(genres).length - 1">, </span>
                    </span>
                </p>
                <span>Click to open in Bandcamp</span>
            </div>
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
    },
    computed: {
        image(){
            if (this.artwork && this.artwork.length > 1) {
                return this.artwork
            } 
            //math random to generate different placeholders
            let gap = Math.random() * 3 + 2;
            return 'https://generative-placeholders.glitch.me/image?width=300&height=300&style=triangles&gap=' +gap * 50;
        }
    }
}
</script>

<style scoped lang="scss">

  $bc-green: #1DC379;
  $bc-red: #C3411D;
  $bc-purple: #941DC3;
  $bc-blue: #1DA0C3;

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
    background: #F7f7f7;
    // background-image: url(../assets/loading-spinner.gif);
    background-position: center;
    background-size: 100% auto;
    background-repeat:no-repeat;
    &:hover {
        .body {
            opacity: 1;
        }
    }
  }
  .body {
    opacity: 0;
    position: absolute;
    padding: 5px 10px;
    box-sizing: border-box;
    background: rgba(0,0,0,0.5);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    color: white;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    a {
        color: white;
    }
    transition: opacity 0.5s ease;
    @media (max-width: 415px) {
        opacity: 1;
    }
  }
  .image-wrapper:before{
    content: "";
    display: block;
    padding-top: 100%;
  }

  .image-wrapper img {
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
</style>
