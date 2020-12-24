import { Fragment } from "react";
import "./elements.css"

export default function EditText(porps) {


    const renderClass = () => {

        let classes = "text ";

        if (porps.block)
            classes += " block "
        if (porps.light)
            classes += " light "
        if (porps.asset)
            classes += " asset "

        return classes
    }

    return (
        <Fragment   >
            <label className="labelContainer">{porps.title}</label>
            <div className="textContainer ">

                <input value={porps.value} type={porps.type} placeholder={porps.hint} className={renderClass()} />

            </div>
        </Fragment>

    );
}
