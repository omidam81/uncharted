import "./elements.css"

export default function EditText(porps) {


    const renderClass = () => {

        let classes = "textarea ";

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
            <textarea placeholder={porps.hint} className={renderClass()} />
        </div>
    );
}
