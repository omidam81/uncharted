import React, { useState } from "react";
import "./index.css";
import Menu from "../Menu";

export default function Header(porps) {

    const [open, isOpen] = useState(false);
    const Back = () => {
        window.history.go(-1);
    }

    return (
        <div className={"header withBack " + (porps.shadow ? " shadow " : "")} >

            <button onClick={e => Back()} className={"back "} >Back</button>

            <button  onClick={e => isOpen(!open)}  className="OpenMenu">
                
                {porps.children}
            </button>
            <button  className={"exit "} >EXIT</button>


            <Menu number={porps.number} onClick={isOpen} open={open} />

        </div>
    );
}
