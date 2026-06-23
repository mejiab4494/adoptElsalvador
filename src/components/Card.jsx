import "./Card.css";

export default function LostGrid({ pets }) {
  return (
    <div className="pet-grid">
      {pets.map((pet) => {
        const isLost = pet.type?.toLowerCase().trim() === "lost";

        return (
          <div key={pet.id} className="pet-card">
            <img src={pet.picture} alt={pet.name} />
            <div className="pet-card-body">
              <h2>{pet.name}</h2>

              <span className={`pet-badge ${isLost ? "badge-lost" : "badge-adoption"}`}>
                {isLost ? "🔍 Perdido" : "🏠 En adopción"}
              </span>

              <div className="pet-meta">
                <span>Especie: {pet.species}</span>
                <span>Raza: {pet.breed}</span>
                <span>Edad: {pet.age}</span>
                <span>Color: {pet.color}</span>
                <span>Género: {pet.gender}</span>
                <span>Ciudad: {pet.city}</span>
                {pet.address && <span>Zona: {pet.address}</span>}
                <span>
                  {isLost ? "Perdido el: " : "Disponible desde: "}
                  {pet.date}
                </span>
                <span>Publicado: {new Date(pet.createdAt).toLocaleString("es-ES")}</span>
              </div>

              <p>{pet.description}</p>

              <div className="pet-contact">
                <h3>Contacto</h3>
                <span>{pet.contactName}</span>
                <span>
                  <a href={`tel:${pet.phone}`}>{pet.phone}</a>
                </span>
                {pet.email && (
                  <span>
                    <a href={`mailto:${pet.email}`}>{pet.email}</a>
                  </span>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}