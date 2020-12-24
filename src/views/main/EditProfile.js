import React from "react";
import { Link } from "react-router-dom";
import HeaderApp from "../../components/Header/HeaderApp";
import Footer from "../../components/Navigation";
import Button from "../../components/Elements/Button";
import Headers from "../../components/Elements/Headers";
import LabelHrB from "../../components/Elements/LabelHrB";
import LabelEditText from "../../components/Elements/LabelEditText";
import img from "../../assets/images/steve 1.png";
 

export default function Main() {

  return (
    <div className="ParentContainer">
      <HeaderApp back >

      </HeaderApp>
      <div className="HomeContainer">

        <div className="avatar">
          <img src={img} />
          <br/>
          <b>Edit Photo</b>
        </div>

        <Headers type="h2">Legal Name</Headers>
        <LabelEditText value="Steve" title="First Name"  light/>
        <LabelEditText value="Dubbeldam" title="Last Name"  light/>
 
        <Headers type="h2">Phone Number</Headers>
        <LabelEditText value="(806) 555 5555"   light/>
        <Button light>Add another phone number</Button>
        <Headers type="h2">Email</Headers>
        <LabelEditText value="info@wildernesscollective.com" title="Add address you'll always have access to."  light/>
       

       <LabelHrB title="Member Since" >12/15/2020</LabelHrB>
      </div>

      <Footer profile />

    </div>
  );
}
