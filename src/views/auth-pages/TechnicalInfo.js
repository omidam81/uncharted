import React from "react";
import Header from "../../components/Header/Header";
import Headers from "../../components/Elements/Headers";
import Button from "../../components/Elements/Button";
import EditText from "../../components/Elements/EditText";
import Space from "../../components/Elements/Space";

export default function TechnicalInfo(props) {

    const onSubmit = (e) => {
        e.preventDefault();
        props.history.push("/agreements/initial");
    }

    return (
        <div className="MainLogin">
            <Header />
            <div className="CenterContainer">

                <Headers type="h2"   >Technical Info</Headers>
                <p>Tell us about the products you have</p>
                <form onSubmit={e => onSubmit(e)}>

                    <EditText type="text" block hint="Do you use an online registration platform?" />
                    <EditText type="number" block hint="Which platform do you use?" />
                    <p>Do you have commercial general liability insurance at a limit of less the one million US Dollars <b>($1,000,000)</b> for each occurance?</p>
                    <EditText type="text" block  />

                    <Space size={150} />

                    <Button type="submit" block>
                        Continue
                    </Button>

                </form>







            </div>



        </div>
    );
}
