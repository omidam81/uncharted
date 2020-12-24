import React from "react";
import { Link } from "react-router-dom";
import HeaderApp from "../../components/Header/HeaderApp";
import Footer from "../../components/Navigation";
import ProfileDetails from "../../components/ProfileDetails";


export default function Main() {


  return (
    <div className="ParentContainer">
      <HeaderApp >

      </HeaderApp>
      <div className="HomeContainer">

        <ProfileDetails />
        <ul>
          <li className="head">SETTINGS</li>
          <li>
            <Link to="/view-profile">Profile</Link>
          </li>
          <li>
            <Link to="/personal-info" >Personal Info</Link>
          </li>
          <li>
            <Link to="/account" >Account</Link>
          </li>


          <li className="head">ABOUT</li>
          <li>
            <Link to=" ">Support</Link>
          </li>
          <li>
            <Link to=" " >Log Out</Link>
          </li>


        </ul>


      </div>

      <Footer profile />

    </div>
  );
}
