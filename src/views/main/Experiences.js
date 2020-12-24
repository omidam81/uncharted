import React from "react";
import Headers from "../../components/Elements/Headers";
import Label from "../../components/Elements/Label";
import Space from "../../components/Elements/Space";
import HeaderApp from "../../components/Header/HeaderApp";
import Footer from "../../components/Navigation";
import Experience from "../../components/Experience";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";


export default function Main() {

  return (
    <div className="ParentContainer">
      <HeaderApp back>

      </HeaderApp>
      <div className="HomeContainer">
        <Headers type="h2" >Experiences</Headers>
        <Space size={20} />

        <Experience
          img={img1}
          title="The Grand Canyon as You've never seen it before, Las Vegas, NV"
          tags={["GUIDED", "MUlTI-DAY", "CAN-AM OFF-ROAD"]}
          start_at="$4,000"

        />

        <Experience
          img={img2}
          title="Full-Throttle Addrenaline from Zion to Bryce National Park, UT"
          tags={["GUIDED", "MUlTI-DAY", "CAN-AM OFF-ROAD"]}
          start_at="$4,000"

        />


      </div>

      <Footer home />

    </div>
  );
}
