<template>
  <div id="app">

    <header>
      <div class="top-header container pt-3 pb-4">
        <a href="/">
        <img src="./assets/bad.svg" alt="Black Artist Database" class="th-logo">
        </a>
      </div>
      <div class="container">
        <nav class="t-nav d-flex">
          <router-link to="/" class="d-flex"><i></i> <span>DATABASE</span></router-link>
          <router-link to="/about" class="d-flex"><i></i> <span>MISSION STATEMENT</span></router-link>
          <a href="" class="d-flex"><i></i> <span>[PAUSE]</span></a>
          <a href="" class="d-flex"><i></i> <span>CONTENT</span></a>
          <a href="" class="d-flex"><i></i> <span>STORE</span></a>
          <a href="" target="_blank" class="d-flex"><i></i> <span>PATREON</span></a>
        </nav>
      </div>
    </header>

    
    <router-view/>

  </div>
</template>

<script>


export default {
  name: 'App',

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

.router-link-exact-active {
  text-decoration:underline;
}

.top-header {
  text-align:left;
  .th-logo {
    max-width:100px;
  }
}
.t-nav {
  justify-content:space-between;
  border-bottom:1px solid black;
  padding-bottom:5px;
  flex-wrap:wrap;
  a {
    align-items:center;
    color:black;

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
  span {
    color:white;
  }
  &::before  {
    content:"";
    display:block;
    top:-7px;
    right:-7px;
    width:100%;
    height:100%;
    position: absolute;
    transform:translateZ(-1px);
    background-image:url(./assets/back-bar.gif);
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
}
</style>
