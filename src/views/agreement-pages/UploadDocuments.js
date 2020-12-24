import React, { Fragment, useState } from "react";
import HeaderMenu from "../../components/Header/HeaderMenu"
import Steps from "../../components/Elements/Steps"
import Select from "../../components/Elements/Select"
import Button from "../../components/Elements/Button"
import Space from "../../components/Elements/Space"
import File from "../../components/Elements/File"

export default function Initial() {


  const [step, setStep] = useState(1);

  const stepOne = () => {

    return <Fragment>
      <Select >
        2 year financials
      </Select>
      <p>
       Upload 2 years of blank statements
        </p>
       <File />
      <Space size={100} />

      <Button onClick={e => setStep(2)} block>
        Continue
        </Button>
    </Fragment>
  }

  const stepTwo = () => {

    return <Fragment>
    <Select >
      Personal Credit Score
    </Select>
    <p>
     Upload 2 years of blank statements
      </p>
     <File />
    <Space size={100} />

    <Button onClick={e => setStep(3)} block>
      Continue
      </Button>
  </Fragment>
  }
  const stepThree = () => {

    return <Fragment>
    <Select >
     General Liability Insurance
    </Select>
    <p>
     Upload 2 years of blank statements
      </p>
     <File />
    <Space size={100} />

    <Button to="/agreements/credit-application" block>
        Continue
        </Button>
  </Fragment>
  }


  const renderSteps = () => {
 
     switch (step){

      case 1:
        return stepOne();

      case  2 :
        return stepTwo();

      case  3 :
        return stepThree();
     }
  }

  return (
    <div className="MainContainer">
      <HeaderMenu number={2} >
        2. Upload documents
      </HeaderMenu>
      <div className="Container">
        <Steps step={step} steps="3" />

        {
          renderSteps()
        }





      </div>
    </div>
  );
}
