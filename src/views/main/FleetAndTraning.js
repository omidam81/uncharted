import React from "react";
import { Link } from "react-router-dom";
import HeaderApp from "../../components/Header/HeaderApp";
import Footer from "../../components/Navigation";
import Headers from "../../components/Elements/Headers";
import Space from "../../components/Elements/Space";


export default function Main() {
 
  return (
    <div className="ParentContainer">
      <HeaderApp back >
         
    </HeaderApp>
      <div className="HomeContainer">
      <Headers type="h2"   >Fleet and Traning</Headers>
        <Space size={10} />
        <ul>
        <li>
            <Link to="">Tech Traning</Link>
          </li>
          <li>
            <Link to="" >Bossweb</Link>
          </li>
          
        </ul>
        
        
      </div>

      <Footer home />

    </div>
  );
}
