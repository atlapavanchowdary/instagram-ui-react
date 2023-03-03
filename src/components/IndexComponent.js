import { LoginComponent } from "./LoginComponent";
import './Indexcomponent.css';
import React from "react";
import banner from "../assets/images/Phone_banner.png";
import slide1 from "../assets/images/slide1.png";
import slide2 from "../assets/images/slide2.png";
import slide3 from "../assets/images/slide3.png";
import slide4 from "../assets/images/slide4.png";

export function IndexComponent() {
  return (
    <div>
          <div className="container-fluid d-flex">

            <div>
              <img src={banner} className="img" alt="banner"></img>
            </div>

            <div>
              <img alt="" src={slide1} id="s1"></img>
            </div>
            
            <div>
              <img alt="" src={slide2} id="s2"></img>
            </div>
            
            <div>
              <img alt="" src={slide3} id="s3"></img>
            </div>
            
            <div>
              <img alt="" src={slide4} id="s4"></img>
            </div>
        
            <main>
              <LoginComponent />
            </main>
        </div> 

    </div>
  )
}