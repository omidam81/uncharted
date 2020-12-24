import { Link } from "react-router-dom";
import "./index.css";
import Headers from "../../components/Elements/Headers";

export default function Header(props) {

    return (
        <div className={"ExperienceContainer"} >
            <Link to="/experience/1" >

                <img src={props.img} />

            </Link>
            <Headers type="h3" >{props.title}</Headers>
            <div className="tags">
                {
                    props.tags.map(e => {
                    return <span>{e}</span>
                    })
                }
            </div>
            <div className="price">
                 STRTING AT {props.start_at}
            </div>

        </div>
    );
}
