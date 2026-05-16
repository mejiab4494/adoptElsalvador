// src/components/addAnimal.jsx
import { useState } from "react";
import "./addAnimal.css";

export default function AddAnimal({ target, onClose, onSubmit, inline }) {
  const [form, setForm] = useState({
    name: "", species: "", breed: "", age: "",
    color: "", gender: "", description: "",
    city: "", date: "", address: "",
    contactName: "", phone: "", email: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({ ...prev, [name]: files ? files[0] : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(target, form);
    onClose();
  };



  const content = (
    <div className="popup" onClick={(e) => e.stopPropagation()}>
      {!inline && (
        <button className="close-btn" onClick={onClose}>✕</button>
      )}
      <h1>{target === "lost" ? "Reportar mascota perdida" : "Reportar animal en adopción"}</h1>

      <form onSubmit={handleSubmit} className="animal-form">
        <section>
          <h2>Información del animal</h2>
          <div className="row">
            <div className="field">
              <label>Nombre</label>
              <input name="name" value={form.name} onChange={handleChange} placeholder="ej. Luna" />
            </div>
            <div className="field">
              <label>Especie</label>
              <select name="species" value={form.species} onChange={handleChange}>
                <option value="">Seleccionar...</option>
                <option>Perro</option>
                <option>Gato</option>
                <option>Conejo</option>
                <option>Ave</option>
                <option>Otro</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="field">
              <label>Raza</label>
              <input name="breed" value={form.breed} onChange={handleChange} placeholder="ej. Siamés" />
            </div>
            <div className="field">
              <label>Edad</label>
              <input name="age" value={form.age} onChange={handleChange} placeholder="ej. 2 años" />
            </div>
          </div>
          <div className="row">
            <div className="field">
              <label>Color</label>
              <input name="color" value={form.color} onChange={handleChange} placeholder="ej. Negro y blanco" />
            </div>
            <div className="field">
              <label>Género</label>
              <select name="gender" value={form.gender} onChange={handleChange}>
                <option value="">Seleccionar...</option>
                <option>Macho</option>
                <option>Hembra</option>
                <option>Desconocido</option>
              </select>
            </div>
          </div>
          <div className="field">
            <label>Descripción</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Describe el animal — apariencia, comportamiento, marcas distintivas..."
            />
          </div>
        </section>

        <section>
          <h2>{target === "lost" ? "Última ubicación vista" : "Ubicación actual"}</h2>
          <div className="row">
            <div className="field">
              <label>Ciudad</label>
              <input name="city" value={form.city} onChange={handleChange} placeholder="ej. Madrid" />
            </div>
            <div className="field">
              <label>{target === "lost" ? "Fecha en que se perdió" : "Disponible desde"}</label>
              <input type="date" name="date" value={form.date} onChange={handleChange} />
            </div>
          </div>
          <div className="field">
            <label>Dirección / zona</label>
            <input
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="ej. Parque del Retiro, cerca del lago"
            />
          </div>
        </section>

        <section>
          <h2>Foto</h2>
          <div className="field">
            <input type="file" name="photo" accept="image/*" onChange={handleChange} />
          </div>
        </section>

        <section>
          <h2>Datos de contacto</h2>
          <div className="row">
            <div className="field">
              <label>Tu nombre</label>
              <input name="contactName" value={form.contactName} onChange={handleChange} placeholder="Nombre completo" />
            </div>
            <div className="field">
              <label>Teléfono</label>
              <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+34 600 000 000" />
            </div>
          </div>
          <div className="field">
            <label>Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="tu@email.com" />
          </div>
        </section>

        <button type="submit" className="submit-btn">Enviar reporte</button>
      </form>
    </div>
  );

  // Inline mode: render the form directly, no overlay
  if (inline) return content;

  // Modal mode: wrap in overlay
  return (
    <div className="overlay" onClick={onClose}>
      {content}
    </div>
  );
}