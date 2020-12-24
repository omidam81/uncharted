import "./elements.css"

export default function Headers(porps) {


    const renderClass = () => {

        let classes = "";

        if (porps.textCenter)
            classes = " textCenter "

        if (porps.light)
            classes += " light "

        return classes
    }

    return (
        <porps.type className={renderClass()} >
            {
                porps.children
            }
        </porps.type>
    );
}
