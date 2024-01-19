import React from "react";
import Logo from "../assets/NDC-Logo-3.png";
import { Link } from "react-router-dom";
import Donate from "./Donate";

function Header() {

 
return <div>

<nav className="navbar navbar-expand-xl navbar-custom atramentMed">
  <div className="container-fluid ">
  <Link className="navbar-brand" to="/">
      <img src={Logo} alt="Logo" width="33%" height="33%" className="d-inline-block align-text-top"/>
    
    </Link>
    
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
     
        <li className="nav-item">
          <a className="nav-link" href="#">ABOUT</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">MINISTRIES</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/give">GIVE</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

</div>


}

export default Header;