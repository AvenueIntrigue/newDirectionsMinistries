import React from "react";
import DonateQR from "../assets/$sewhope72.png"
import ButtonNew from "./ButtonNew";
import data from "./data";
import Check from "../assets/PaybyCheck.png"

function Donate() {

    return( 
<section className="donate-section">
        <div className="donate-container mx-auto">
            <div className="donate-text-container">
            <h1>Give</h1>
            <br/>
            <p><h2>To Donate: </h2>
                <br/>
                <br/>
            Donations can be made electronically via Cash App. 
                <br/><br/>
                Step 1: Open Cash App, and select the scan icon in the top left corner.
                <br/><br/>
                Step 2: Scan the QR Code below.
                <br/>
                <img className="donate-img-container" src={DonateQR} alt="Donate QR Code" />
                <br />
                Step 3: Add a note if you wish, enter an amount, and tap the "Pay" button. </p>
                <br/>
                
                <img className="donate-img-container" src={Check} alt="Check Image" />
                <br />
                <h2>Checks or Money-Orders can be made out to:</h2> <br/><br/> <b>Ernest Washington</b> <br/><br/> and sent to: <br/><br/> <b>New Dimension Ministries</b><br /><br /> <b><i>920 South 23 Street</i></b><br /><b><i>Southbend, IN 46615.</i></b>
       
       <br/> <br/>
       Thanks & God Bless!
       <br/><br/>
            <p> <i>"Give, and it will be given to you. Good measure, pressed down, shaken together, running over, will be put into your lap. For with the measure you use it will be measured back to you."</i> <br/><br/> Luke 6:38 ESV</p>
            </div>
          
            {/* <div className="donate-img-check mx-auto">
            <img src={Check} alt="Pay by Check" />
            </div> */}
            {/* <div className="donate-button-size">
          <ButtonNew name="Give" />
          </div> */}
            
        </div>
        </section>
    )
    
}

export default Donate;