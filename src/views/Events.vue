<template>
    <div class="page">
        <div class="events container mt-4">
            <div class="row">
                <div class="col-md-3">
                    <a href="https://forms.gle/QHE7YPHTVpu38ZmP9" target="_blank" class="event">
                        <img src="@/assets/events/ableton_acemo.jpg" alt="acemo">
                        <div class="info">
                            <h5>Tuesday 22nd February</h5>
                            <h2>A production seminar with AceMo</h2>
                            <p>Online</p>
                        </div>
                    </a>
                </div>
                <div class="col-md-3">
                    <a href="https://forms.gle/QHE7YPHTVpu38ZmP9" target="_blank" class="event">
                        <img src="@/assets/events/ableton_kessler.jpg" alt="kessler">
                        <div class="info">
                            <h5>Tuesday 15th March</h5>
                            <h2>Drum programming & Creative Production Techniques in Ableton Live 11</h2>
                            <p>Online</p>
                        </div>
                    </a>
                </div>
                <div class="col-md-3">
                    <a href="https://ra.co/events/1503067" target="_blank" class="event">
                        <img src="@/assets/events/colour-factory-02-04-22.png" alt="kessler">
                        <div class="info">
                            <h5>Saturday 2nd Apil</h5>
                            <h2>A celebration of Black culture</h2>
                            <p>The Colour Factory, Hackney Wick</p>
                        </div>
                    </a>
                </div>
                <div class="col-md-3">
                    <a href="https://forms.gle/QHE7YPHTVpu38ZmP9" target="_blank" class="event">
                        <img src="@/assets/events/ableton_suzianalogue.jpg" alt="suzi analogue">
                        <div class="info">
                            <h5>Tuesday 19th April</h5>
                            <h2>Remixing in Ableton Live 11: The Art of the Remix/Flipping Tracks like Suzi Analogue</h2>
                            <p>Online</p>
                        </div>
                    </a>
                </div>
                <div class="col-md-3">
                    <a href="https://forms.gle/QHE7YPHTVpu38ZmP9" target="_blank" class="event">
                        <img src="@/assets/events/ableton_zyrra.jpg" alt="zyrra">
                        <div class="info">
                            <h5>Tuesday 3rd May</h5>
                            <h2>How to make Techno Music</h2>
                            <p>Online</p>
                        </div>
                    </a>
                </div>
            </div>
            <h2 class="my-3">Past Events</h2>
            <div class="row">
                <div class="col-md-3 past">
                    <a href="https://forms.gle/QHE7YPHTVpu38ZmP9" target="_blank" class="event">
                        <img src="@/assets/events/ableton_rm.png" alt="rRoxymore">
                        <div class="info">
                            <h5>Tuesday 23rd November</h5>
                            <h2>An intro to live</h2>
                            <p>Online</p>
                        </div>
                    </a>
                </div>
                <div class="col-md-3 past">
                    <a href="https://forms.gle/QHE7YPHTVpu38ZmP9" target="_blank" class="event">
                        <img src="@/assets/events/ableton_kmru.png" alt="KMRU">
                        <div class="info">
                            <h5>Tuesday 26th October</h5>
                            <h2>Field recording as a compositional tool</h2>
                            <p>Online</p>
                        </div>
                    </a>
                </div>
                <div class="col-md-3 past">
                    <a href="https://ra.co/pre/1459467" target="_blank" class="event">
                        <img src="@/assets/events/colour-factory-01-10-21.png" alt="A Celebration Of Black Culture. 01/10 The Colour Factory Hackney Wick London. Tickets via events.blackartistdatabase.co">
                        <div class="info">
                            <h5>Friday 1st October</h5>
                            <h2>A celebration of Black culture</h2>
                            <p>The Colour Factory, Hackney Wick</p>
                        </div>
                    </a>
                </div>
                <div class="col-md-3 past">
                    <a href="https://forms.gle/QHE7YPHTVpu38ZmP9" target="_blank" class="event">
                        <img src="@/assets/events/ableton_rb.png" alt="Russell E.L. Butler">
                        <div class="info">
                            <h5>Tuesday 28th September</h5>
                            <h2>Bus Processing Premasters</h2>
                            <p>Online</p>
                        </div>
                    </a>
                </div>
                <div class="col-md-3 past">
                    <a href="https://forms.gle/QHE7YPHTVpu38ZmP9" target="_blank" class="event">
                    <img src="@/assets/events/ableton_lj.png" alt="Loraine James">
                    <div class="info">
                        <h5>Tuesday 24th August</h5>
                        <h2>How to turn your production into a live performance</h2>
                        <p>Online</p>
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
