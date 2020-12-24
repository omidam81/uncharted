import React from "react";
import Header from "../../components/Header/Header";
import Headers from "../../components/Elements/Headers";
import Button from "../../components/Elements/Button";
import EditText from "../../components/Elements/EditText";
import Space from "../../components/Elements/Space";

export default function FleetInfo(props) {

    const onSubmit = (e) => {
        e.preventDefault();
        props.history.push( "/auth/confirm-fleet-info");
    }

    return (
        <div className="MainLogin">
            <Header />
            <div className="CenterContainer">

                <Headers type="h2"   >Fleet Info</Headers>
                <p>Tell us about the products you have</p>
                <form onSubmit={e => onSubmit(e)}>

                    <EditText type="text" block hint="What products do you have?" />
                    <EditText type="number" block hint="How many do you have?" />
                    <EditText type="text" block hint="What brands do you carry?" />
                     
 
                    <Space size={150} />

                    <Button type="submit" block>
                        Continue
                    </Button>

                </form>







            </div>



        </div>
    );
}
