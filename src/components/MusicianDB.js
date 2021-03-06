import React from "react"
import img from '../Images/msdb.png'
import img2 from '../Images/msdb2.png'


import "./Warzone.css"

function MusicianDB () {
    return (
        <div class="cardWZ">
             <div class="card-body">
    <h5 class="titleS">Musican Database</h5>
    <p class="card-text">An application thats allows users to search for any band returing their worldwide upcoming tour dates with venue details.<br/>
    This app was built using JavaScript, HTMl and CSS. Three sperate APIs were used to return background images, concert details and venue details.</p>
    <a id="view" href="https://jaybarbanel.github.io/Musicain_Database/ " class="btn btn-primary">View App</a>
    <a id="view" href="https://jaybarbanel.github.io/Musicain_Database/ " class="btn btn-primary">GitHub</a>
  </div>
        <div id="carouselExampleControlsNoTouching3" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img} class="w-20" alt="landing page of app, search for musician"/>
    </div>
    <div class="carousel-item">
      <img src={img2} class="w-20" alt="all band show details"/>
    </div>
  </div>
  <button id="pro" type="button" data-bs-target="#carouselExampleControlsNoTouching3" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button id="pre"  type="button" data-bs-target="#carouselExampleControlsNoTouching3" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
      
    )
}


export default MusicianDB;
