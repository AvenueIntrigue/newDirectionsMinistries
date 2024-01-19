import React from "react";
import Button from "./Button";

function Card() {

  

    return (

        <div className="card justify-center">
       <div className="ratio ratio-16x9">
  <iframe src="https://www.youtube.com/embed/vlDzYIIOYmM" title="YouTube video" allowFullScreen></iframe>
</div>
        <div className="card-body">
          <h5 className="card-title">Latest Videos</h5>
          <p className="card-text">Est in nisi culpa Lorem ullamco occaecat in elit officia minim eu anim. Amet aliquip ex nostrud sit sunt eu. Commodo nisi anim minim laborum magna ad occaecat. Ut laborum quis eiusmod nulla cupidatat labore tempor velit labore. Ad et incididunt sint eiusmod duis.</p>
          <Button name="Watch Here!" />
        </div>

       
        
        
      </div>
      
      
      
      

   
    )
}

export default Card;