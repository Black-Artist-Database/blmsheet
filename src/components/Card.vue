<template>
    <div class="card m-1">
    <img src="https://via.placeholder.com/150" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">{{ name }}</h5>
        <p class="card-text">{{ genres }}</p>
        <a :href=link class="btn btn-primary">Open in Bandcamp</a>
    </div>
    </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    name: String,
    genres: Array,
    link: String,
    }
}
</script>

<style scoped lang="scss">

.card {
    max-width:200px;
    min-width:24%;
}

</style>
