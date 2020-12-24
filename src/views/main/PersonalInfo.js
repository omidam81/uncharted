import React from "react";
import { Link } from "react-router-dom";
import HeaderApp from "../../components/Header/HeaderApp";
import Footer from "../../components/Navigation";
import Button from "../../components/Elements/Button";
import LabelHrB from "../../components/Elements/LabelHrB";
import img from "../../assets/images/steve 1.png";
 

export default function Main() {

  return (
    <div className="ParentContainer">
      <HeaderApp back >

      </HeaderApp>
      <div className="HomeContainer">

        <div className="avatar">
          <img src={img} />
        </div>
        <Button to="/edit-profile" asset >Edit</Button>

        <LabelHrB title="Legal Name">
          Steve Dubbeldam
        </LabelHrB>

        <LabelHrB title="Phone">
          (806) 555 5555
        </LabelHrB>
        <LabelHrB title="Email">
          info@wildernesscollective.com
        </LabelHrB>

        <LabelHrB title="Member Since">
          12/15/2020
        </LabelHrB>
        <LabelHrB title="Birth Day">
          10/17/1990
        </LabelHrB>



      </div>

      <Footer profile />

    </div>
  );
}
