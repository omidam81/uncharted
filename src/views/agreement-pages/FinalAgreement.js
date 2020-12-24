import React from "react";
import HeaderMenu from "../../components/Header/HeaderMenu"
import Steps from "../../components/Elements/Steps"
import Select from "../../components/Elements/Select"
import Button from "../../components/Elements/Button"
import Space from "../../components/Elements/Space"

export default function Initial() {
 

  return (
    <div className="MainContainer">
      <HeaderMenu number={4} >
        4. Final Aggrement
      </HeaderMenu>
      <div className="Container">
        <Steps step={1} steps="1" />

        <Select >
          Final Agreement
        </Select>
        <p>
          Sign the final agreement
        </p>
        <Button block>
          Final Agreement
        </Button>
        <Space size={200} />

        <Button to="/agreements/experience-info" block>
          Continue
        </Button>





      </div>
    </div>
  );
}
