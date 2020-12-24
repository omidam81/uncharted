import { Link } from "react-router-dom";
import "./elements.css"

export default function Buton(porps) {


    const renderClass = () => {

        let classes = "btn ";

        if (porps.block)
            classes += " block "
        if (porps.light)
            classes += " light "
        if (porps.asset)
            classes += " asset "

        return classes
    }

    return (
        porps.to ? <Link to={porps.to} >
            <button type={porps.type ? porps.type : "button"} className={renderClass()} >
                {
                    porps.children
                }
            </button>
        </Link> :
            <button {...porps} type={porps.type ? porps.type : "button"} className={renderClass()} >
                {
                    porps.children
                }
            </button>


    );
}
