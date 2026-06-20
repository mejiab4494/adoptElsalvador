import { useState } from "react";
import Card from "../../components/Card.jsx";
import "./Perdidos.css";

export default function Lost({ pets }) {
  const [ showForm, setShowForm ] = useState(false);

  return (
    <div className="perdidos">
      <h1>Perdidos</h1>
      <div className="perdidos__container">
        <p className="perdidos__text">
          Aquí encontrarás a los peluditos que han sido reportados como perdidos.
          Si has perdido a tu mascota, por favor contáctanos para que podamos
          ayudarte a encontrarla.
        </p>
      </div>
      <Card pets={pets} />
    </div>
  );
}