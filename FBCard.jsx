import React from "react";
import Button from "./Button";

function FBCard() {

  

    return (

        <div className="card justify-center">
       <div className="ratio ratio-16x9">
       <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FPastorApostleErnestWashington%2Fvideos%2F1407457146874801%2F&width=1280" width="1280" height="720" style={{border:"none", overflow: "hidden"}} scrolling="no" frameborder="0" allowfullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen={true}></iframe>
</div>
        <div className="card-body">
          <h5 className="card-title">Latest Videos</h5>
          <p className="card-text">Est in nisi culpa Lorem ullamco occaecat in elit officia minim eu anim. Amet aliquip ex nostrud sit sunt eu. Commodo nisi anim minim laborum magna ad occaecat. Ut laborum quis eiusmod nulla cupidatat labore tempor velit labore. Ad et incididunt sint eiusmod duis.</p>
          <Button name="Watch Here!" />
        </div>

       
        
        
      </div>
      
      
  
    )
}

export default FBCard;