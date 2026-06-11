import { Routes, Route } from "react-router-dom";
import { usePets } from "./hooks/usePets.js";

import Header from "./pages/Header/Header";
import Home from "./pages/Home";
import Perdidos from "./pages/Perdidos/Perdidos";
import Adopta from "./pages/Adopta/Adopta";
import Publicar from "./pages/Publicar/Publicar";
import './App.css';

export default function App() {
  const { lostPets, recienLlegados, loading, isAdmin, handleAddAnimal, handleDelete } = usePets();

  if (loading) return <div className="loading">Cargando...</div>;

  return (
    <>
      <Header />
      <Routes>
        <Route path="/"         element={<Home recienLlegados={recienLlegados} lostPets={lostPets} />} />
        <Route path="/Perdidos" element={<Perdidos pets={lostPets} />} />
        <Route path="/adopta"   element={<Adopta pets={recienLlegados} />} />
        <Route path="/Publicar" element={
          <Publicar
            onSubmit={handleAddAnimal}
            onDelete={handleDelete}
            lostPets={lostPets}
            recienLlegados={recienLlegados}
            isAdmin={isAdmin}
          />}
        />
      </Routes>
    </>
  );
}