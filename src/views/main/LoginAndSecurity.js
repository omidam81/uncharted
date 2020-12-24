import React from "react";
import { Link } from "react-router-dom";
import HeaderApp from "../../components/Header/HeaderApp";
import Footer from "../../components/Navigation";
import Headers from "../../components/Elements/Headers";
import LabelHr from "../../components/Elements/LabelHr";
import Space from "../../components/Elements/Space";


export default function Main() {

  return (
    <div className="ParentContainer">
      <HeaderApp back >

      </HeaderApp>
      <div className="HomeContainer">
        <Headers type="h2"   >Login and Security</Headers>
        <Space size={10} />
        <Headers type="h3"   >Login</Headers>
        <Headers type="h5"   >Your Account  </Headers>
        <LabelHr title="Name">
          Steve Dubbeldam
        </LabelHr>
        <LabelHr title="Email">
         hello@dubbeldam.com
        </LabelHr>

        <LabelHr title="Password">
         **********
        </LabelHr>


      </div>

      <Footer profile />

    </div>
  );
}
