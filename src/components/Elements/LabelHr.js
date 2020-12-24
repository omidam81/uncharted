import { Link } from "react-router-dom";
import "./elements.css"

export default function Buton(porps) {


  
    return (
         <div className="labelhr">
             <span className="title">
                {porps.title}
             </span>
             <span className="description">
                {porps.children} 
             </span>

         </div>


    );
}
