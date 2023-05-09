<template>
    <div class="page">
        <div class="events container mt-4">
            <div class="py-5 text-center">
                <h2 class="my-3">Label</h2>
            </div>
            <div class="row">
            <div class="col-md-3 past">
                    <a href="https://blackartistdatabase.bandcamp.com" target="_blank" class="event">
                        <img src="@/assets/label/sv1.jpg" alt="suzi analogue">
                        <div class="info">
                            <h5>Synergy Vol 1</h5>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.page {
  // border-top:#1DA0C3 100px solid;
}
.col-md-3 {
    margin-bottom: 20px;
}

p a {
  color:black;
}

.events img {
    width:100%;
}

.event {
    display:block;
    border:2px solid black;
    @media screen and (min-width: 800px) {
        height:100%;
    }
    margin-bottom:20px;
    .info {
        text-align:left;
        padding:15px;
        text-transform: uppercase;
        h5 {
            color:#6acf99;
            font-size:0.8em;
            margin-bottom:5px;
        }
        h2 {
            color:#366766;
            font-size:1.2em;
            margin-top:0;
            margin-bottom:15px;
            min-height:70px;
        }
        p {
            color:black;
            text-decoration: none;
            margin-bottom:0;
            font-size:0.7em;
        }
    }
    &:hover {
        text-decoration: none;
    }
}

.past {
    opacity: 0.3;
    a {
        user-select: none;
        pointer-events: none;
        cursor: default;
    }
}


</style>
