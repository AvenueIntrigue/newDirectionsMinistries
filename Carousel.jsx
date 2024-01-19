import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import image1 from "../assets/WashingtonFamily2.jpg";
import image2 from "../assets/ApostleEarnestWashingtonGranddaughter.jpg"
import image3 from "../assets/NDMCongregation.jpg"




function GoRound() {

    
    
   
    
   
      return (
        <div>
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel" style={{width: "33%"}}>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={image1} class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src={image2} class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src={image3} class="d-block w-100" alt="..."/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      </div>
      );
      }
 




export default GoRound;