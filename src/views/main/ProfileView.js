import React from "react";
import { Link } from "react-router-dom";
import HeaderApp from "../../components/Header/HeaderApp";
import Footer from "../../components/Navigation";
import Headers from "../../components/Elements/Headers";
import Space from "../../components/Elements/Space";
import img from "../../assets/images/svg/wilderness.svg"
import ProfileDetails from "../../components/ProfileDetails";


export default function Main() {


  return (
    <div className="ParentContainer">
      <HeaderApp back>

      </HeaderApp>
      <div className="HomeContainer">

        <ProfileDetails joind="Dec 2020" />

        <div className="companyLogo">
          <img src={img} />
        </div>
        <Headers type="h2"  >About</Headers>
        <p>
          The Wilderness Collective guides people through trip-of-a-lifetime adventure experiences, produces films and a printed magazine, all with the intention of inspiring character development through exploration

       </p>
        <Headers type="h3"  >Locations</Headers>
        <div className="tags">
          <span>Log Angeles, CA</span>
          <span>Canyon</span>
          <span>Joshua Tree</span>
        </div>
        <Space size={30} />
        <Headers type="h2"  >Steve Confirmed</Headers>
        <div className="confirmed">
          <span>Agreements</span>
          <span>Ducuments</span>
          <span>Credit App</span>
          <span>Experiences</span>
        </div>




      </div>

      <Footer profile />

    </div>
  );
}
