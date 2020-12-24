import "./elements.css"

export default function EditText(porps) {


    const renderClass = () => {

        let classes = "text ";

        if (porps.block)
            classes += " block "
        if (porps.light)
            classes += " light "
        if (porps.asset)
            classes += " asset "

        return classes
    }

    return (

        <div className="textContainer">
            <input type={porps.type} placeholder={porps.hint} className={renderClass()} />

        </div>
    );
}
