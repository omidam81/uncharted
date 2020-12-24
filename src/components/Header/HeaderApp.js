import "./index.css";
import Headers from "../Elements/Headers";
export default function Header(porps) {

    const Back = ()=>{
        window.history.go(-1);
    }
    const edit = ()=>{
        window.history.go(-1);
    }

    return (
        <div  className={"headerApp shadow" } >

            {
                porps.back && <button onClick={e=>Back()} className={"back " }/>

            }

            <div className="societybg">

            </div>
          
        </div>
    );
}
