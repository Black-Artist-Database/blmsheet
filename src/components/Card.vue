<template>
    <div class="card m-1">
    <a :href=image target="_blank">
    <img :src="image" class="card-img-top" :alt="name">
    </a>
    <div class="card-body">
        <h5 class="card-title">{{ name }}</h5>
        <p class="card-text">{{ genres }}</p>
        <a :href=link class="btn btn-primary" target="_blank">Open in Bandcamp</a>
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

</style>
