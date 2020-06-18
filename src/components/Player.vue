<template>
    <div class="player">
      <iframe style="border: 0; width: 100%; height: 42px;" :src="`https://bandcamp.com/EmbeddedPlayer/album=${bandcampId}/size=small/bgcol=ffffff/linkcol=0687f5/artwork=none/transparent=true/`" seamless></iframe>
    </div>
</template>

<script>
export default {
    name: 'Player',
    props: {
        bandcampId: String
    },

    mounted(){
        // this.fetchLocations();
        // this.bandcampId = 384435759;
    },

}
</script>

<style lang="scss" scoped>
    .player {
        position:fixed;
        bottom:0;
        left:0;
        width:100%;
        z-index:9;
        padding:5px 5px 0 5px;
        background:#eee;
        iframe {
            max-width:700px;
            margin:auto;
        }
    }
</style>