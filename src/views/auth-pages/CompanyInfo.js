import React from "react";
import Header from "../../components/Header/Header";
import Headers from "../../components/Elements/Headers";
import Button from "../../components/Elements/Button";
import EditText from "../../components/Elements/EditText";
import TextArea from "../../components/Elements/TextArea";
import Space from "../../components/Elements/Space";

export default function CompnayInfo(props) {

    const onSubmit = (e) => {
        e.preventDefault();
        props.history.push( "/auth/company-address");
    }

    return (
        <div className="MainLogin">
            <Header />
            <div className="CenterContainer">

                <Headers type="h2"   >Company Info</Headers>
                <p>Details about your company's name and description</p>
                <form onSubmit={e => onSubmit(e)}>

                    <EditText type="text" block hint="Company Name" />
                    <TextArea  block hint="Buisiness Description" />
                    <EditText type="text" block hint="Company Website" />
                    <EditText type="text" block hint="How long you have been operating?" />

                    <Space size={50} />

                    <Button type="submit" block>
                        Continue
                    </Button>

                </form>







            </div>



        </div>
    );
}
