import recienLlegado from "../../components/recienLlegado.js";
import LostGrid from "../../components/lostGrid.jsx";
import "./Adoptions.css";

export default function Adoptions() {
    return (
        <div className="adoptionContent">
            <h1>Recién Publicados</h1>
            <LostGrid pets={recienLlegado} />
        </div>
    )
}