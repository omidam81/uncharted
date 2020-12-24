import React from "react";
import Header from "../../components/Header/Header";
import Headers from "../../components/Elements/Headers";
import Button from "../../components/Elements/Button";
import EditText from "../../components/Elements/EditText";
import Space from "../../components/Elements/Space";

export default function CompnayAddress(props) {

    const onSubmit = (e) => {
        e.preventDefault();
        props.history.push( "/auth/validate-email");
    }

    return (
        <div className="MainLogin">
            <Header />
            <div className="CenterContainer">

                <Headers type="h2"   >Company Address</Headers>
                <p>Enter your business' mailling address</p>
                <form onSubmit={e => onSubmit(e)}>

                    <EditText type="text" block hint="Street Address" />
                    <EditText type="text" block hint="City" />
                    <EditText type="text" block hint="State" />
                    <EditText type="text" block hint="Zip Code" />
                    <EditText type="text" block hint="Country" />
 
                    <Space size={50} />

                    <Button type="submit" block>
                        Continue
                    </Button>

                </form>







            </div>



        </div>
    );
}
