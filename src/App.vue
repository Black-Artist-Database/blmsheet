<template>
  <div id="app">

    <header>
      <div class="top-header container pt-3 pb-4">
        <a href="/">
        <img src="./assets/bad.svg" alt="Black Artist Database" class="th-logo">
        </a>
        <a class="mobile-menu" @click="showNav = !showNav">
          <img src="./assets/nav.png" alt="nav">
        </a>
      </div>
      <div class="container main-navigation" v-bind:class="{ active: showNav }">
        <nav>
          <ul class="t-nav d-flex">
            <li @click="showNav = !showNav"><router-link to="/" class="d-flex"><i></i> <span>DATABASE</span></router-link></li>
            <li @click="showNav = !showNav"><router-link to="/about" class="d-flex"><i></i> <span>ABOUT</span></router-link></li>
            <!--
            <li>
              <a class="d-flex"><i></i> ABOUT</a>
              <ul class="d-flex">
                <li><router-link to="/about" class="d-flex">- <span>MISSION STATEMENT</span></router-link></li>
                <li><a href="" class="d-flex">- <span>CONTACT</span></a></li>
              </ul>
            </li>
            -->
            <li @click="showNav = !showNav">
              <router-link to="/pause" class="d-flex"><i></i> <span>[PAUSE]</span></router-link>
            </li>
            <li @click="showNav = !showNav"><a href="https://content.blackartistdatabase.co/categories/read/" class="d-flex"><i></i> <span>READ</span></a></li>
            <li @click="showNav = !showNav"><a href="https://content.blackartistdatabase.co/categories/listen/" class="d-flex"><i></i> <span>LISTEN</span></a></li>
            <!--
            <li>
              <a class="d-flex"><i></i> CONTENT</a>
              <ul class="d-flex">
                <li><a href="" class="d-flex">- <span>READ</span></a></li>
                <li><a href="" class="d-flex">- <span>LISTEN</span></a></li>
                <li><a href="" class="d-flex">- <span>WATCH</span></a></li>
              </ul>
            </li>
            <li><a href="" class="d-flex"><i></i> <span>STORE</span></a></li>
            -->
            <li @click="showNav = !showNav"><router-link to="/events" class="d-flex"><i></i> <span>EVENTS</span></router-link></li>
            <li @click="showNav = !showNav"><a href="https://www.patreon.com/blackartistdatabase" target="_blank" class="d-flex"><i></i> <span>PATREON</span></a></li>
            <li @click="showNav = !showNav">
              <a href="" target="_blank" class="d-flex"><i></i>STORE</a>
            </li>
          </ul>
        </nav>
        <div class="socials">
          <a href="https://www.facebook.com/blackartistdatabase" target="_blank"><img src="./assets/social-icons/fb.png" alt="Facebook"></a>
          <a href="https://twitter.com/blackartistdata" target="_blank"><img src="./assets/social-icons/tw.png" alt="Twitter"></a>
          <a href="https://instagram.com/blackartistdatabase" target="_blank"><img src="./assets/social-icons/ig.png" alt="Instagram"></a>
        </div>
      </div>
    </header>

    
    <router-view/>

  </div>
</template>

<script>


export default {
  name: 'App',
  props: {
    showNav: Boolean,
  },
  data: () => ({
  }),
  computed: {
  },
  mounted () {
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

nav ul {
  font-weight:400;
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

.router-link-exact-active {
  text-decoration:underline;
}

.top-header {
  text-align:left;
  .th-logo {
    max-width:120px;
  }
}
.mobile-menu {
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
.main-navigation {
  position:relative;
}
@media screen and (max-width: 800px) {
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
}
.t-nav {
  justify-content:space-between;
  border-bottom:1px solid black;
  padding-bottom:5px;
  flex-wrap:wrap;
  list-style:none;
  padding-left:0;
  li {
    position: relative;
    // padding-right:50px;
    flex: 1;
    ul {
      display:none !important;
      position: absolute;
      left:0;
      padding:0;
      list-style:none;
      min-width:400px;
      background:white;
      border:1px solid black;
      padding:5px 10px;
      z-index:999;
    }
    &:hover ul {
      display:flex !important;
    }
  }
  a {
    align-items:center;
    color:black;
    justify-content: center;
    width: 100%;
    i {
      background:black;
      width:8px;
      height:8px;
      border-radius:50px;
      display:block;
      margin-right:5px;
    }
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
