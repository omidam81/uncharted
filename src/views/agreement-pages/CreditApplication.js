import React  from "react";
import HeaderMenu from "../../components/Header/HeaderMenu"
import Steps from "../../components/Elements/Steps"
import Select from "../../components/Elements/Select"
import Button from "../../components/Elements/Button"
import Space from "../../components/Elements/Space"
 
export default function Initial() {


  return (
    <div className="MainContainer">
      <HeaderMenu number={3}  >
        3. Credit Aplication
      </HeaderMenu>
      <div className="Container">
        <Steps step={1} steps="1" />

        <Select >
          TFC Credit App
        </Select>
        <p>
         Fill out and compelete credit application
        </p> 
      <p className="details">
        Business Profile Account # ( for internal use) : BRP Product lines Requested:
        <br/>
        (Circle choice)
        <br/>
        Rental Operator Legal Name :
        <br/>
        DBA Name : Physical Address :
        <br/>
        [Business Address] City, State :
        <br/>
        Business Phone : Business e-mail address :
        <br/>
        Ski-Doo
        <br/>
        Sea-Doo
        <br/>
        Can-Am ATV
        <br/>
        Can-Am Side-by-Side
        <br/>
                       Unit Shipping Address (if different) : City, State :
        <br/>
        Zip Code : Business Fax :
        <br/>
        Zip Code : 
        <br/> 
            This e-mail address will be used to advise you of unit shipments that are scheduled to be delivered. Shipping e-mail address :
            <br/> 
        Required by US Customs shipment purposes. Federal Tax ID # :
        <br/> 
        [Main contact persons]
        <br/> 
        Principal Owner :
        <br/> _________________________________________________ 
        <br/> 
         Printed Name: Date :
        </p>

        <Button to="/agreements/final-agreement" block>
          Continue
        </Button>





      </div>
    </div>
  );
}
