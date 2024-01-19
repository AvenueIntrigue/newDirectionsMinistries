import React from "react";

function ButtonNew(props) {

    return(
        <container className="button-new-container">
            <div className="box-1">
                <h2>{props.name}</h2>
            </div>
        </container>
    )
}

export default ButtonNew;