<template>
    <div class="card m-1">
    <a :href=link target="_blank">
    <div class="image-wrapper">
        <img :src="image" class="card-img-top" :alt="name">
    </div>
    <span class="badge badge-primary">{{type}}</span>
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
            return 'https://generative-placeholders.glitch.me/image?width=300&height=300&style=triangles&gap='+Math.floor(Math.random() * 30);
        }
    }
}
</script>

<style scoped lang="scss">

.card {
    max-width:200px;
    min-width:24%;
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
