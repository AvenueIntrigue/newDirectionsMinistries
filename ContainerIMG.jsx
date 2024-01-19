import React from "react";


import image1 from "../assets/WashingtonFamily2.jpg";
import image2 from "../assets/ApostleEarnestWashingtonGranddaughter.jpg";
import image3 from "../assets/NDMCongregation.jpg";
import AboutCard from "./AboutCard";
function ContainerIMG() {


    return(
<section aria-label="Newest Photos" className="img-section">
    <div className="carousel" data-carousel>
        
        <ul className="child-container" data-slides >
            <li className="slide" data-active><img src={image1} alt="Washington Family" /></li>
            <li className="slide"><img src={image2} alt="Apostle Earnest Washington & Grand-daughter" /></li>
            <li className="slide"><img src={image3} alt="New Dimension Ministries Congregation" /></li>
            <button className="carousel-button prev" data-carousel-button="prev" >&#8651;</button>
        <button className="carousel-button next" data-carousel-button="next">&#8652;</button>
        </ul>
        <div className="about-container">

<h1>About Us</h1>
    <p>
    Est in nisi culpa Lorem ullamco occaecat in elit officia minim eu anim. Amet aliquip ex nostrud sit sunt eu. Commodo nisi anim minim laborum magna ad occaecat. Ut laborum quis eiusmod nulla cupidatat labore tempor velit labore. Ad et incididunt sint eiusmod duis.
    </p>
</div>
    </div>
</section>
        
    );
}

export default ContainerIMG;