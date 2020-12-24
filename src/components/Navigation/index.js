import { Link } from "react-router-dom";
import "./index.css";

export default function Header(props) {
  
    return (
        <div  className={"footer shadow" } >

            <Link className={"nav-item home " + (props.home ? " active" : "") } to="/main" ></Link>
            <Link className={"nav-item profile " +  (props.profile ? " active" : "") }  to="/profile" ></Link>
             
        </div>
    );
}
