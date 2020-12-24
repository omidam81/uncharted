import React from "react";
import { Link } from "react-router-dom";
import HeaderApp from "../../components/Header/HeaderApp";
import Footer from "../../components/Navigation";


export default function Main() {
 
  return (
    <div className="ParentContainer">
      <HeaderApp >
         
    </HeaderApp>
      <div className="HomeContainer">

        <ul>
        <li>
            <Link to="/company-info">Company Info</Link>
          </li>
          <li>
            <Link to="/experiences" >Experiences</Link>
          </li>
          <li>
            <Link to="/fleet-and-training" >Fleet and Traning</Link>
          </li>
          <li>
            <Link to="/marketing-toolbox" >Marketing Toolbox</Link>
          </li>
        </ul>
        
        
      </div>

      <Footer home />

    </div>
  );
}
