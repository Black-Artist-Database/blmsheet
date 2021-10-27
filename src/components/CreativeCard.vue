<template>
<div class="col-6 col-md-3 col-lg-3 p-2">
    <div class="card">
        <a x-href=link target="_blank">
        <!-- <span
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
        </span> -->
        <div class="image-wrapper">
          <img :src="image" class="bc-image card-img-top" :alt="name">
        </div>
        </a>
        <div class="card-body">
          <transition name="fade">
            <div class="transition-body" v-if="!displayCopy" key="infos">
              <h6 class="card-title mb-0">{{ name }}</h6>
              <p class="profession mb-0">{{profession}}</p>
              <p class="mt-0 subprofession mb-0" :class="{'long': subprofession.join(', ').length > 28}" @mouseover="setTransition" @mouseleave="reset">
                <span v-if="subprofession.length > 0">{{ subprofession.join(', ') }}</span>
              </p>
              <p class="mt-0 location-genre mb-0">{{city}}</p>
              <p class="mt-0 location-genre mb-0">{{country}}</p>
              
              <div class="vendors">
                <a :href="instagram" target="_blank" v-if="instagram">
                  <img src="@/assets/creatives/instagram.svg" alt="instagram">
                </a>
                <a :href="website" target="_blank" v-if="website">
                  <img src="@/assets/creatives/website.svg" alt="website">
                </a>
                
                <a :href="twitter" target="_blank" v-if="twitter">
                  <img src="@/assets/creatives/twitter.svg" alt="twitter">
                </a>
              </div>
              <a class="copy-button" @click="displayCopy = true" v-if="headline">copy</a>
            </div>
            <div class="transition-body copy" v-else key="copy">
              <p class="headline">{{ headline }}</p>
              <a class="back-button" @click="displayCopy = false">back</a>
            </div>
          </transition>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Card',
    props: {
      name: String,
      profession: String,
      subprofession: Array,
      imageUrl: String,
      city: String,
      country: String,
      website: String,
      instagram: String,
      twitter: String,
      headline: String
    },
    computed: {
      image(){
        if (this.imageUrl && this.imageUrl.length > 1) {
            return this.imageUrl
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
    data() {
      return {
        displayCopy: false,
        hover: false,
      }
    },
    methods: {
      setTransition(e) {
        if (!this.hover) {
          this.hover = true
          e.srcElement.style['transition'] = `transform ${Math.max(8, (this.subprofession.join(', ').length - 28) / 10 * 2)}s linear`;
        }
      },
      reset(e) {
        e.srcElement.style['transition'] = 'none'
        this.hover = false
      }
    }
}
</script>

<style scoped lang="scss">

  .card-body {
    position: relative;
    height: 190px;
    padding-bottom: 40px;
    overflow: hidden;
  }

  .transition-body {
    position: absolute;
    top: 20px;
    left: 0;
    height: calc(100% - 20px);
    width: 100%;
    
    &.copy {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
    }
  }

  .headline {
    font-size: 16px;
    text-align: center;
    padding: 5px;
    ;
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

  .copy-button {
    position: absolute;
    bottom: 20px;
    right: 10px;
    cursor: pointer;
  }

  .back-button {
    position: absolute;
    bottom: 20px;
    left: 10px;
    cursor: pointer;
  }

  // .badge {
  //   z-index: 10;
  //   background:#32ff99;
    
  //   &.badge-producer { background:#33FF99; }
  //   &.badge-label { background:#336666; }
  //   &.badge-artist { background:#66CC99; }
  //   &.badge-band { background:#0AAA6C; }

  // }

  // .badge {
  //   position:absolute;
  //   top:15px;
  //   right:15px;
  // }

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

  .profession {
    text-transform: uppercase;
    text-align: center;
    font-size: 15px;
    font-weight: bold;
    margin-top: 5px;

  }

  .subtooltip {
    display: none;
    position: absolute;
    left: 0;
    top: 20px;
    background-color: rgba(255,255,255, 1);
    border-radius: 3px;
    width: 100%;
    &:hover {
      display: block;
    }
  }
  .subprofession {
    position: relative;
    text-transform: uppercase;
    text-align: center;
    font-size: 12px;
    font-weight:bold;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    height: 20px;
    width: 100%;
    margin-bottom: 10px;
    &.long {
      span {
        cursor: pointer;
        padding-left: 10px;
      }
    }
    
    &.long:hover {
      overflow: visible;
      text-overflow: none;
      transition: transform 10s ease;
      transform: translateX(-100%);
    }

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
    font-weight: 500;
    font-size: 65%;;
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
  .vendors {
    position: absolute;
    width: 100%;
    bottom: 10px;
    left: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;

    a {
      display:block;
      margin: 0 5px;
      cursor: pointer;
    }
    img {
      width:30px;
      &:hover {
        filter: invert(58%) sepia(64%) saturate(5723%) hue-rotate(130deg) brightness(96%) contrast(90%);
      }
    }
  }


.fade-enter-active {
  transition: opacity .3s ease;
}
.fade-leave-active {
  transition: opacity .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-enter, .fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
