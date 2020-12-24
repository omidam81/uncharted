import React from "react";
import Button from "../../components/Elements/Button";
import Space from "../../components/Elements/Space";

export default function Main() {
    return (
        <div className="MainLogin">


            <div className="CenterContainer">
                <div className="MainLogo">

                </div>
                

                <Space size={150}/>

                <Button to={"/auth/personal-info"} block>
                    Let's get started
                </Button>

                <Button asset>
                    Cancel
                </Button>

                <p style={{textAlign:"center",width:"100%"}}>
                Already an Outfitter? <b>Login</b>
                </p>

            </div>



        </div>
    );
}
