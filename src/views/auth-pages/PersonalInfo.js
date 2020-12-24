import React from "react";
import Header from "../../components/Header/Header";
import Headers from "../../components/Elements/Headers";
import Button from "../../components/Elements/Button";
import EditText from "../../components/Elements/EditText";
import Space from "../../components/Elements/Space";

export default function PersonalInfo(props) {

    const onSubmit = (e) => {
        e.preventDefault(); 
        props.history.push( "/auth/company-info");
    }

    return (
        <div className="MainLogin">
            <Header  />
            <div className="CenterContainer">

                <Headers type="h2"   >Personal Info</Headers>
                <form onSubmit={e => onSubmit(e)}>

                    <EditText type="text" block hint="First Name" />
                    <EditText type="text" block hint="Last Name" />
                    <EditText type="number" block hint="Phone" />
                    <EditText type="email" block hint="Email" />
                    <Space size={150} />

                    <Button type="submit" block>
                        Continue
                    </Button>

                </form>







            </div>



        </div>
    );
}
