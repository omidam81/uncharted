import { Link } from "react-router-dom";
import "./index.css";
import Headers from "../Elements/Headers"
import img from "../../assets/images/steve 1.png"
export default function Profile(props) {

    return (
        <div className={"profile"} >

            <div className="name">
                <Headers type="h2" >Steve Dubbeldum</Headers>
                {props.joind && <span>Joind {props.joind}</span>}
            </div>
            <div className="avatar">
                <img src={img} />
            </div>


        </div>
    );
}
