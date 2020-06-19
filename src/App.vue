<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="/">blackbandcamp.info</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Discover</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">About</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/add" class="nav-link">Add Submission</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view/>
    
  </div>
</template>

<script>


export default {
  name: 'App',
  
  data: () => ({
    
  }),
  
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  min-height:100vh;
  @media (prefers-color-scheme: dark) {
    background-color: black;
    color: white;
  }
  @media (prefers-color-scheme: light) {
    background-color: #f7f7f7;
    color: black;
  }
}

.router-link-exact-active {
  color: #fff !important;
}
</style>
