import React from "react";
import Headers from "../../components/Elements/Headers";
import Label from "../../components/Elements/Label";
import Space from "../../components/Elements/Space";
import HeaderApp from "../../components/Header/HeaderApp";
import Footer from "../../components/Navigation"; 


export default function Main() {

  return (
    <div className="ParentContainer">
      <HeaderApp back>

      </HeaderApp>
      <div className="HomeContainer">
        <Headers type="h2"   >OnRoad Ride</Headers>
        <Space size={20} />
        <Label edit title="Location">
          BigBear, Joshua Three, CA
        </Label>
        <Label title="Starting Price Pont">
          $650
        </Label>
        <Label edit title="Experience Type">
          Guided
        </Label>


        <Label  edit title="Duration">
          Full-Day
        </Label>

        <Label edit title="BRP Product Type">
          CAM-AM ON-ROAD
        </Label>


      </div>

      <Footer home />

    </div>
  );
}
