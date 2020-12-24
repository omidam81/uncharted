import React from "react";
import { Link } from "react-router-dom";
import HeaderApp from "../../components/Header/HeaderApp";
import Footer from "../../components/Navigation";
import Headers from "../../components/Elements/Headers";
import Space from "../../components/Elements/Space";


export default function Main() {
 
  return (
    <div className="ParentContainer">
      <HeaderApp back>
         
    </HeaderApp>
      <div className="HomeContainer">
      <Headers type="h2"   >Marketing Toolbox</Headers>
        <Space size={10} />
        <ul>
        <li>
            <Link to="">Fareharbor</Link>
          </li>
          <li>
            <Link to="" >Images</Link>
          </li>
          <li>
            <Link to="" >Videos</Link>
          </li>
          <li>
            <Link to="" >Tips and Tricks</Link>
          </li>
          
        </ul>
        
        
      </div>

      <Footer home />

    </div>
  );
}
