import React from "react";



function Footer() {

  
    const today = new Date();
    const year = today.getFullYear();


    return (
        
       
    
      <div className="container-fluid bg-black" style={{height: "33%", width:"100%", paddingTop:"3.5%"}}>
<div className="mx-auto" id="footer">
    <div className="container-fluid">
      <div className="row mx-auto" id="icons-footer">

      <div className="col-lg-3 col-md-3 col-sm-6">
          <p  className="icon-footer"><a className="footerLink" href="https://www.facebook.com/PastorApostleErnestWashington" target="_blank"><i class="fa-brands fa-facebook fa-2x"></i></a></p>
        </div>

        <div className="col-lg-3 col-md-3 col-sm-6">
          <p className="icon-footer"><i className="fa-brands fa-x-twitter fa-2x"></i></p>
        </div>
       
        <div className="col-lg-3 col-md-3 col-sm-6">
          <p className="icon-footer"><i className="fa-brands fa-youtube fa-2x"></i></p>
        </div>

        <div className="col-lg-3 col-md-3 col-sm-6">
          <p className="icon-footer"><a className="footerLink" href="mailto:ernest709@yahoo.com"><i className="fa-solid fa-envelope fa-2x"></i></a></p>
        </div>
        

     
        </div>
    </div>
    
    </div> 
    <div className="row me-auto text-light">

      <div className="col-lg-3 col-md-3 col-sm-6">
    <h2 className="footerFont" >GET IN TOUCH</h2> 
    
    
  <br />
   
      <h4 className="footerFont"><a className="footerLink" href="https://www.google.com/maps/place/920+S+23rd+St,+South+Bend,+IN+46615/@41.665109,-86.2156807,17z/data=!3m1!4b1!4m6!3m5!1s0x8816cda90980d945:0xecba9f8d5408673f!8m2!3d41.665105!4d-86.2131058!16s%2Fg%2F11c4glrhrc?entry=ttu" target="_blank"><i className="fa-solid fa-location-dot" style={{color: "ffffff"}} size="xs"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;920 South 23 Street</h4><h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Southbend, IN 46615</h4>  
   <br />  
    <h4 className="footerFont"><i className="fa-solid fa-clock" style={{color: "ffffff"}} size="xs"></i>&nbsp;&nbsp;&nbsp;&nbsp;Sunday | 9 AM</h4>
    <h4 className="footerFont"><a className="footerLink" href="tel:574-334-7621"><i className="fa-solid fa-phone" style={{color: "ffffff"}} size="xs"></i>&nbsp;&nbsp;&nbsp;&nbsp;574.334.7621</a></h4>   
     
    </div>
    </div>

    <div className="col-lg-12 col-md-12 col-sm-12">
        <p className="c-right">Copyright&nbsp; © {year} &nbsp;  New Dimension Ministries</p>
      </div>
    </div>
    
  
   
    )
}

export default Footer;