<template>
  <div id="app">

    <header>
      <div class="top-header container pt-3 pb-4">
        <a href="/">
        <img src="./assets/bad.svg" alt="Black Artist Database" class="th-logo">
        </a>
        <a class="mobile-menu-button" @click="showNav = !showNav">
          <img src="./assets/nav.png" alt="nav">
        </a>
      </div>
      <div class="container main-navigation" v-bind:class="{ active: showNav }">
        <div class="desktop-nav" v-if="!showNav || windowWidth >= 800">
          <NavLinks />
          <div class="socials">
            <a href="https://www.facebook.com/blackartistdatabase" target="_blank"><img src="./assets/social-icons/fb.png" alt="Facebook"></a>
            <a href="https://twitter.com/blackartistdata" target="_blank"><img src="./assets/social-icons/tw.png" alt="Twitter"></a>
            <a href="https://instagram.com/blackartistdatabase" target="_blank"><img src="./assets/social-icons/ig.png" alt="Instagram"></a>
          </div>
        </div>
        <div class="mobile-nav" v-else>
          <div class="links">
            <NavLinks @dismissMobileMenu="showNav = false"/>
          </div>
          <div class="socials">
            <a href="https://www.facebook.com/blackartistdatabase" target="_blank"><img src="./assets/social-icons/fb.png" alt="Facebook"></a>
            <a href="https://twitter.com/blackartistdata" target="_blank"><img src="./assets/social-icons/tw.png" alt="Twitter"></a>
            <a href="https://instagram.com/blackartistdatabase" target="_blank"><img src="./assets/social-icons/ig.png" alt="Instagram"></a>
          </div>
        </div>
        
      </div>
    </header>

    
    <router-view/>

  </div>
</template>

<script>

import NavLinks from '@/components/NavLinks.vue'
export default {
  name: 'App',
  data: () => ({
     showNav: false,
     windowWidth: 0
  }),
  components: {
    NavLinks
  },
  mounted () {
    this.windowWidth = window.innerWidth;
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
      if (this.windowWidth >= 800) {
        this.showNav = false
      }
    })
  }
}
</script>

<style lang="scss">
#app {
  font-family: lexia-mono, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  min-height:100vh;
  background-color: #f7f7f7;
  color: black;
}

p, ul, ol {
font-weight: 300;
text-align:justify;
}

h1, h2, h3 { 
  font-weight:bold;
}

.top-header {
  text-align: left;
  .th-logo {
    max-width:120px;
  }
}

.mobile-menu-button {
  width:50px;
  position:absolute;
  top:5px;
  right:5px;
  img {
    width:100%;
  }
  display:none;
  @media screen and (max-width: 800px) {
    display:block;
  }
}

.desktop-nav {
  display: flex;
  flex-direction: row;
  height: 31px;
  border: 1px solid black;
  line-height: 30px;
  margin-bottom: 40px;
  .links-container {
    display: flex;
    flex-direction: row;
  }
}

.mobile-nav {
  position: absolute;
  top: 0px;
  left: 0;
  width: 100%;
  .links-container {
    display: flex;
    flex-direction: column;
    padding: 15px 0;
    padding-bottom: 30px;
  }
  .links {
    border-top: 1px solid black;
    border-bottom: 1px solid black;
  }
}


.socials {
  position:absolute;
  top:-70px;
  right:10px;
  display: flex;
  flex-direction: row;
  a {
    display:block;
    width: 25px;
    margin-bottom:1px;
    margin: 2px;
    img {
      width:100%;
    }
  }
  @media screen and (max-width: 800px) {
    position:relative;
    top:0;
    right:0;
    a {
      display:inline-block;
      margin-right:5px;
      width:25px;
    }
  }
}

.main-navigation {
  position:relative;
}

@media screen and (max-width: 800px) {
  .container {
    // padding: 15px 0;
    max-width: 100%;
    overflow-x: hidden;
  }
  .top-header {
    padding:0 15px;
  }
  .main-navigation {
    display:none;

    &.active {
      min-height:100vh;
      display:block;
    }
    ul {
      display:block !important;
      border-bottom:none !important;
      li {
        margin-bottom:10px;
      }
      li ul {
        display:block !important;
        position:relative !important;
        border:none !important;
        li {
          margin-bottom:2px;
        }
      }
    }
  }

  .socials {
    margin-top: 10px;
    margin-left: 10px;
  }
}


.bad-title {
  background:#32ff99;
  text-transform:uppercase;
  display:inline-block;
  padding:10px 20px 5px 20px;
  border:2px solid black;
  position:relative;
  transform-style: preserve-3d;
  font-weight:bold;

  span {
    color:white;
  }
  &::before  {
    content:"";
    display:block;
    bottom:-7px;
    right:-7px;
    width:100%;
    height:100%;
    position: absolute;
    transform:translateZ(-1px);
    background-image:url(./assets/back-bar.gif);
    background-size: 100% auto;
    border:2px solid black;
  }
}
.bad-subtitle {
  color:#336666;
  border:2px solid #336666;
  background:#e8e8e8;
  padding:10px;
  max-width:400px;
  font-size:1.3em;
  margin-bottom:25px;
  font-weight:bold;
  text-transform: uppercase;
}
</style>
