import React from "react";
import image1 from "../assets/WashingtonFamily2.jpg";


function ImageCard() {

    return (

<div className="card justify-center" style={{width: "33%"}}>
<img src={image1} alt="" />
<img src={image1} alt="" />
</div>

    );
}

export default ImageCard;