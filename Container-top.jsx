import React from "react";
import Card from "./Card";
import FBCard from "./FBCard";

function ContainerTop() {

    return(

        <div>

            <section className="containerTop" style={{height: "33%", width:"100%", paddingTop:"7%"}} >
<div className="row">
    <div className="col-lg-6 col-md-6 col-sm-12">
                <Card />

                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                <FBCard />
                </div>
                </div>
            </section>
            
        </div>
    )


}

export default ContainerTop;