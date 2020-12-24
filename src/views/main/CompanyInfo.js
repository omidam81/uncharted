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
        <Headers type="h2"   >Company Info</Headers>
        <Space size={20} />
        <Label title="Company Name">
          Wilderness Creative
        </Label>
        <Label title="Company Description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis amet diam amet id arcu malesuada volutpat.        </Label>

        <Label title="Company Site">
          https://WildernessCreative.com
        </Label>
        <Space size={20} />

        <Headers type="h3"   >Company Address</Headers>
        <Label title="Street Address">
          4888 Dean Martin Dr
        </Label>

    <div className="AddressContainer">

    <Label mid title="City">
          Las Vegas
        </Label>
        <Label mid title="State">
         NV
        </Label> 
        <Label mid title="Country">
         United States
        </Label>
        <Label mid title="Zip">
         89103
        </Label>
    </div>

      </div>

      <Footer home />

    </div>
  );
}
