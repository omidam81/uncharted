import React, { Fragment, useState } from "react";
import HeaderMenu from "../../components/Header/HeaderMenu"
import Steps from "../../components/Elements/Steps"
import Select from "../../components/Elements/Select"
import Button from "../../components/Elements/Button"
import Space from "../../components/Elements/Space"

export default function Initial() {


  const [step, setStep] = useState(1);

  const stepOne = () => {

    return <Fragment>
      <Select >
        NDA & LOI
      </Select>
      <p>
        Do you agree our terms of service and privacy policy?
        </p>
      <Button block>
        NDA
        </Button>

      <Button block>
        LOI
        </Button>
      <Space size={200} />

      <Button onClick={e => setStep(2)} block>
        Continue
        </Button>
    </Fragment>
  }

  const stepTwo = () => {

    return <Fragment>
      <Select >
        Rental agreement
      </Select>
      <p>
        Fill out and complete the rental application
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

      <Button to="/agreements/upload-documents" block>
        Continue
        </Button>
    </Fragment>
  }

  return (
    <div className="MainContainer">
      <HeaderMenu number={1} >
        1. Initial Agreements
      </HeaderMenu>
      <div className="Container">
        <Steps step={step} steps="2" />


        {
          step == 1 ? stepOne() : stepTwo()
        }




      </div>
    </div>
  );
}
