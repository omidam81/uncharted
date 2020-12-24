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
        <Headers type="h2"   >Account</Headers>
        <Space size={10} />
        <ul>
          <li>
            <Link to="/login-and-security">Login & Security</Link>
          </li>
          <li>
            <Link to="" >Terms & Condition</Link>
          </li>
          <li>
            <Link to="" >Privacy Policy</Link>
          </li>

          <li>
            <Link to="" >Delete My Account</Link>
          </li>

        </ul>


      </div>

      <Footer profile />

    </div>
  );
}
