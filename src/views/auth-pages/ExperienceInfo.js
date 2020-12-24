import React from "react";
import Header from "../../components/Header/Header";
import Headers from "../../components/Elements/Headers";
import Button from "../../components/Elements/Button";
import EditText from "../../components/Elements/EditText";
import Space from "../../components/Elements/Space";

export default function ExperienceInfo(props) {

    const onSubmit = (e) => {
        e.preventDefault();
        props.history.push("/auth/technical-info");
    }

    return (
        <div className="MainLogin">
            <Header />
            <div className="CenterContainer">

                <Headers type="h2"   >Experience Info</Headers>
                <p>Tell us about the products you have</p>
                <form onSubmit={e => onSubmit(e)}>

                    <EditText type="text" block hint="What do you offer?" />
                    <EditText type="number" block hint="How many months per year do you operate?" />
                    <p>On averrage, How many customers come through your business annually? this question is requiered *</p>

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
