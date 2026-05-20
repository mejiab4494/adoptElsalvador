
import LostGrid from "../../components/lostGrid.jsx";
import "./Adoptions.css";

export default function Adoptions({ pets }) {
    return (
        <div className="adoptionContent">
            <h1>Recién Publicados</h1>
            <LostGrid pets={pets} />
        </div>
    )
}