import { useState } from "react";
import Card from "../../components/Card.jsx";
import "./Adopta.css";

export default function Adopta({ pets }) {
    const [showForm, setShowForm] = useState(false);

    return (
        <div className="adopta">
            <h1>Adopta</h1>
            <div className="adopta__container">
                <p className="adopta__text">
                    Aquí encontrarás a los peluditos que han sido reportados para adopción.
                    Si estás interesado en adoptar a alguno de ellos, por favor contáctanos.
                </p>
            </div>
            <Card pets={pets} />
        </div>
    );
}