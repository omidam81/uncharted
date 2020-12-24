import React from "react";
import Header from "../../components/Header/Header";
import Button from "../../components/Elements/Button";
import Space from "../../components/Elements/Space";

export default function ConfirmFleetInfo(props) {


    const onSubmit = (e) => {
        e.preventDefault();
        props.history.push("/auth/experience-info");
    }

    return (
        <div className="MainLogin">
            <Header />
            <div className="CenterContainer">

                <b>Is your fleet composed at least 75% new vehicles within the last 2 model years?</b>
                <Space size={50} />

                <form onSubmit={e => onSubmit(e)}>

                    <Button light>
                        Yes
                    </Button>
                    <Button light>
                        No
                    </Button>


                    <Space size={150} />

                    <Button type="submit" block>
                        Continue
                    </Button>

                </form>







            </div>



        </div>
    );
}
