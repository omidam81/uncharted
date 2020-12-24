import React from "react";
import Header from "../../components/Header/Header";
import Headers from "../../components/Elements/Headers";
import Button from "../../components/Elements/Button";
import EditText from "../../components/Elements/EditText";
import Space from "../../components/Elements/Space";

export default function EmailValidation(props) {

    const onSubmit = (e) => {
        e.preventDefault();
        props.history.push("/auth/fleet-info");
    }

    return (
        <div className="MainLogin">
            <Header />
            <div className="CenterContainer">

                <Headers type="h2"   >Validate Email</Headers>
                <p>An E-Mail was sent to "example@site.com"</p>
                <p>Enter the validation code below, or follow the link in the email that was sent to your entred e-mail address!</p>
                <form onSubmit={e => onSubmit(e)}>

                    <EditText type="text" block hint="Validation Code" />

                    <Space size={250} />

                    <Button type="submit" block>
                        Submit
                    </Button>

                    <Button to="/auth/main" asset>
                        Return to home
                    </Button>
                </form>







            </div>



        </div>
    );
}
