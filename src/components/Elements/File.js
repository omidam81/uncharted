import "./elements.css"

export default function File(porps) {




    return (

        <label className="upload">
            <input {...porps} type="file" />
            <span>UPLAOD</span>
        </label>


    );
}
