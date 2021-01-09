<template>
<div class="col-md-3 col-lg-3 col-sm-12 p-2">
    <div class="card">
        <a @click="onClick()">
          <div class="image-wrapper">
              <img :src="require(`@/assets/${illus}`)" class="bc-image card-img-top" :alt="name">
          </div>
        </a>
        <div class="card-body">
            <h5 class="card-title">{{ name }}<br><small v-if="author">by {{author}}</small></h5>
            <a @click="onClick()"><span v-if="type === 'article'">Read the article</span><span v-else-if="type === 'interview'">Listen to the interview</span><span v-else-if="type === 'livestream'">Watch the livestream</span></a>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'ArticleCard',
    props: {
      name: String,
      illus: String,
      author: String,
      type: String
    },
    computed: {
    },
    methods: {
      onClick () {
        this.$emit('on-click', this.name);
      },
      getImage (path) {
        var images = require.context('../assets/', false, /\.jpg$/)
        return images(path)
      }
    }
}
</script>

<style scoped lang="scss">

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

  a { cursor: pointer; }


  @media (max-width: 415px) {
    .card { width: 100%; }
  }

  .image-wrapper{
    position: relative;
    width: 100%;
    overflow: hidden;
    background:black;
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
    object-fit: cover;
    height: 100%;
  }

  small {
    font-weight:bold;
    font-size:60%;
  }



  .image-wrapper:hover {
    .play {
      opacity:1;
    }
  }
</style>
