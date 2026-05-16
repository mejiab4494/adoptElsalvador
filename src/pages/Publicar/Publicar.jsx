// src/pages/Publicar/Publicar.jsx
import { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../components/firebase.js";
import AddAnimal from "../../components/addAnimal.jsx";
import LoginModal from "../../components/LoginModal.jsx";
import "./Publicar.css";

export default function Publicar({ onSubmit, onDelete, lostPets, recienLlegados }) {
  const [user, setUser] = useState(null);
  const [authReady, setAuthReady] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState("adoption"); // "adoption" | "lost"

  const handleSubmit = (target, form) => {
    onSubmit(target, form);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthReady(true);
      if (currentUser) setShowModal(false);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => signOut(auth);

  if (!authReady) return null;

  const currentList = activeTab === "lost" ? lostPets : recienLlegados;
  const currentTarget = activeTab === "lost" ? "lost" : "adoption";

  return (
    <div className="publicar">
      {user ? (
        <div className="publicar-content">
          <div className="publicar-header">
            <span className="publicar-welcome">{user.email}</span>
            <button className="publicar-logout" onClick={handleLogout}>
              Cerrar sesión
            </button>
          </div>

          {submitted && (
            <p className="publicar-success">¡Animal publicado con éxito!</p>
          )}

          {/* Tab switcher */}
          <div className="publicar-tabs">
            <button
              className={`publicar-tab ${activeTab === "adoption" ? "active" : ""}`}
              onClick={() => setActiveTab("adoption")}
            >
              En adopción
            </button>
            <button
              className={`publicar-tab ${activeTab === "lost" ? "active" : ""}`}
              onClick={() => setActiveTab("lost")}
            >
              Perdidos
            </button>
          </div>

          {/* Animals list */}
          <div className="publicar-list">
            {currentList.length === 0 ? (
              <p className="publicar-empty">No hay animales publicados aún.</p>
            ) : (
              currentList.map((pet) => (
                <div key={pet.id} className="publicar-animal-card">
                  <img
                    src={pet.picture || "default.png"}
                    alt={pet.name}
                    className="publicar-animal-img"
                  />
                  <div className="publicar-animal-info">
                    <strong>{pet.name || "Sin nombre"}</strong>
                    <span>{pet.species} · {pet.breed}</span>
                    <span>{pet.city}</span>
                  </div>
                  <button
                    className="publicar-delete-btn"
                    onClick={() => onDelete(currentTarget, pet.id)}
                  >
                    Eliminar
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Add form */}
          <div className="publicar-form-wrapper">
            <AddAnimal
              target={activeTab === "lost" ? "lost" : "adoption"}
              onClose={() => {}}
              onSubmit={handleSubmit}
              inline
            />
          </div>
        </div>
      ) : (
        <div className="publicar-gate">
          <h2>Iniciar sesión para publicar</h2>
          <p>Necesitas iniciar sesión para agregar un animal.</p>
          <button className="publicar-login-btn" onClick={() => setShowModal(true)}>
            Iniciar sesión / Registrarse
          </button>
        </div>
      )}

      {showModal && <LoginModal onClose={() => setShowModal(false)} />}
    </div>
  );
}