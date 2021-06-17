<template>
<div class="page pt-1">
  <div class="pause container mt-4">

    <div class="row mt-5 corners">
      <img src="../assets/about/plus.png" class="plus top-left" />
      <img src="../assets/about/plus.png" class="plus top-right" />
      <img src="../assets/about/plus.png" class="plus bottom-left" />
      <img src="../assets/about/plus.png" class="plus bottom-right" />
      <div class="col-md-8 text-left">
        
        <h3 class="mb-4 h4">[ [pause] is an initiative created by B.A.D. (Black Artist Database), to support and encourage businesses in the music industry towards the goal of more equitable workspaces ]</h3>
        <div class="content">
          <img src="../assets/about/corner.png" class="corner bottom-right" />
          <img src="../assets/about/corner.png" class="corner top-left" />
          <p>With only 11.4% of music industry jobs filled by BIPoC creatives, [pause] aims to encourage those in positions of power to actively bridge this inequality gap.</p>

          <p> [pause] is comprised of two parts: </p>

          <ol>
              <li>A monetary donation from participants to B.A.D. to support the considerable labour and infrastructural costs incurred by the platform.</li>
              <li>A partnership, wherein B.A.D. enters a short- or medium-term consultation agreement with participants to address internal racial equity issues.</li>
          </ol>
          <p>The [pause] partnership is not intended to be an all-encompassing fix, but rather to be a positive and proactive step in the right direction. </p>
        </div>
      </div>
      <div class="col-md-4 image-right">
        <img src="../assets/about/pause1.png" alt="About Us Image">
      </div>
    </div>

    <div class="row mt-5 corners">    
      <div class="col-md-8 text-left custom-bullet">
        <h3 class="mb-4 h4">[ What the donation supports ]</h3>
        <div class="content">
          <img src="../assets/about/corner.png" class="corner bottom-right" />
          <img src="../assets/about/corner.png" class="corner top-left" />
          <p>The BAD website:</p>
          <ul>
            <li>Over 3,000 music artist profiles on a database covering over 300 genres</li>
            <li>300+ creative profiles on the database from all 245 countries</li>
            <li>Average monthly page views of 35, 000; daily peak views at 15,000 on Bandcamp Fridays</li>
          </ul>
          <p>The Team:</p>
          <ul>
            <li>Over 20 international volunteers and members, working an average of 720 hours a week, across 4 continents (Europe, Africa, Australaisia and North America)</li>
            <li>Front and back end developers, product managers, content curators, writers, editors, project coordinators and data management maintain the input, output and overall maintenance of the site, database systems and the community we serve</li>
          </ul>
          <p>The Community:</p>
          <ul>
            <li>Supporting the creatives and artists we work with, to ensure they receive fair compensation for their work</li>
            <li>Supporting free and accessible opportunities, initiatives and engagement across BAD</li>
          </ul>
        </div>
      </div>
      <div class="col-md-4 image-right">
        <img src="../assets/about/pause2.png" alt="About Us Image">
      </div> 
    </div>


    <div class="row mt-5 corners">
      <img src="../assets/about/plus.png" class="plus top-left" />
      <img src="../assets/about/plus.png" class="plus top-right" />
      <img src="../assets/about/plus.png" class="plus bottom-left" />
      <img src="../assets/about/plus.png" class="plus bottom-right" />
      <div class="col-md-8 text-left">
        <h3 class="mb-4 h4">[ HOW THE [PAUSE] PARTNERSHIP WORKS ]</h3>
        <div class="content">
          <img src="../assets/about/corner.png" class="corner bottom-right" />
          <img src="../assets/about/corner.png" class="corner top-left" />
          <p>
            B.A.D. will consult with industry partners to better support their Black employees and contract workers, and develop strategies to prioritise Black racial equity within their organisations. This will be facilitated via the development of realistic, actionable goals, a mutually agreed-upon roadmap, and regular check-ins.
          </p>
        </div>
      </div>
      <div class="col-md-4 image-right">
        <img src="../assets/about/pause3.png" alt="About Us Image">
      </div>
    </div>

    <div class="row mt-5 pt-5" style="border-top:1px solid white;">
      <div class="col-md-8 text-left">


            <h3 class="mb-4 h4">[ CONTACT ]</h3>
            <p>
            For more information about [pause] please contact our project leads:
            </p>
            <p>
                <a href="mailto:ranen@blackartistdatabase.co" target="_blank">ranen@blackartistdatabase.co</a><br>
                <a href="mailto:carin@blackartistdatabase.co" target="_blank">carin@blackartistdatabase.co</a><br>
                <a href="mailto:christine@blackartistdatabase.co" target="_blank">christine@blackartistdatabase.co</a>
            </p>

      </div>
      </div>

  </div>
</div>
</template>

<style lang="scss" scoped>
h3 {
  text-transform: uppercase;
}
.pause {
  margin-top: 0;
}
.page {
    background: url('../assets/about/bg-tile.png');
    background-size: 100% auto;
    // background-size: 100% 100%;
    color:white;
    padding-bottom:100px;
    a {
        color:white;
        text-decoration:underline;
    }
}

.image-right {
  text-align:center;
  padding-top:20px;
  img {
    width:100%;
    max-width:250px;
  }
}

.image-left {
  text-align:center;
  padding-top:20px;
  img {
    width:100%;
    max-width:250px;
  }
}

.row {
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  position: relative;
  box-sizing: border-box;
  padding: 20px;
  p {
    margin-bottom: 0;
  }
  .corner {
    position: absolute;
    width: 10px;
  }
  .top-left {
    top: 0;
    left: 0;
    transform: rotate(90deg);
  }
  .bottom-right {
    bottom: 0;
    right: 0;
    transform: rotate(-90deg);
  }
}

.corners {
  min-height: 800px
  position: relative;
  box-sizing: border-box;
  padding: 20px;
  .plus {
    position: absolute;
    width: 18px;
  }
  .top-left {
    top: 5px;
    left: 5px;
  }
  .bottom-left {
    bottom: 5px;
    left: 5px;
  }
  .top-right {
    top: 5px;
    right: 5px;
  }
  .bottom-right {
    bottom: 5px;
    right: 5px;
  }

}

.bb {
  width:70%;
  margin:20px auto;
  display:block;
}


.custom-bullet {
  li {
    list-style: none;
    padding-left: 5px;
  }
  
  li::before {
     content: ' ';
     display: inline-block;
     width: 40px;
     height: 20px;
     background: url('../assets/bullet.png') no-repeat;
     background-position: center bottom;
     background-size: 9px auto;
  }
}
</style>
