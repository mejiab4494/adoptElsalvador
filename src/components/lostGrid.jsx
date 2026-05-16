import recienLlegado from "./recienLlegado.js";

export default function LostGrid( { pets }) {
  return (
    <div className="pet-grid">
      {pets.map((pet) => (
        <div key={pet.id} className="pet-card">
          <img src={pet.picture} alt={pet.name} />
          <div className="pet-card-body">
            <h2>{pet.name}</h2>
            <div className="pet-meta">
              <span>{pet.age}</span>
              <span>{pet.breed}</span>
            </div>
            <p>{pet.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}