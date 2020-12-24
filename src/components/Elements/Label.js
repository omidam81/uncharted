import { Link } from "react-router-dom";
import "./elements.css"

export default function Buton(porps) {


  
    return (
         <div style={{width: porps.mid ? "50%" : "100%"}} className="label">
             <div className="title">
                {porps.title}
             </div>
             <div className="description">
                {porps.children}
                {porps.edit && <span className="edit">Edit</span>}
             </div>

         </div>


    );
}
