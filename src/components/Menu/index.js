import "./index.css";
export default function Menu(porps) {
 

    return (
        <div style={{display:porps.open ? "block": "none"}} className={"overlayMenu"} >
            <div className="MenuItems">
                <button  onClick={e=>porps.onClick(false)} className="close"/>
                <ul>
                    <li className="menu-header"> </li>
                    <li className="active">1. Initial Agreement</li>
                    <li className={porps.number > 1 ? "active" : ""}>2. Upload Documents</li>
                    <li className={porps.number > 2 ? "active" : ""}>3. Credit Application</li>
                    <li className={porps.number > 3 ? "active" : ""}>4. Final Agreement</li>
                    <li className={porps.number > 4 ? "active" : ""}>5. Experience Info</li>
                </ul>

            </div>
 

        </div>
    );
}
