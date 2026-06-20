
import Card from "../../components/Card.jsx";
import "./Adoptions.css";

export default function Adoptions({ pets }) {
    return (
        <div className="adoptionContent">
            <h1>Recién Publicados</h1>
            <Card pets={pets} />
        </div>
    )
}