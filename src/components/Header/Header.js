import "./index.css";
import Headers from "../Elements/Headers";
export default function Header(porps) {

    const Back = ()=>{
        window.history.go(-1);
    }

    return (
        <div  className={"header " + (porps.shadow ? " shadow " : "")} >

            <button onClick={e=>Back()} className={"back " }/>

 
            <Headers type="h2"   >{porps.children}</Headers>

        </div>
    );
}
