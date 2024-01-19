
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./Header"
import ContainerTop from "./Container-top";
import Footer from "./Footer";
import Button from "./Button";
import ContainerIMG from "./ContainerIMG";
import AboutCard from "./AboutCard";
import Donate from "./Donate";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import Home from "./Home";

function App() {

 
  return (
    <div className="App">
    <Header />

   <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/give" element={<Donate />}/>
    </Routes>
    <Footer />
    </div>
  );
}

export default App;
