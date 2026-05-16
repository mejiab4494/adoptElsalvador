import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./pages/Header/Header";
import Home from "./pages/Home";
import Perdidos from "./pages/Perdidos/Perdidos";
import Adopta from "./pages/Adopta/Adopta";
import Publicar from "./pages/Publicar/Publicar";

import lostPetsData from "./components/lost.js";
import recienLlegadoData from "./components/recienLlegado.js";

import './App.css';

export default function App() {
  const [lostPets, setLostPets]             = useState(lostPetsData);
  const [recienLlegados, setRecienLlegados] = useState(recienLlegadoData);

  function handleAddAnimal(target, formData) {
    const newEntry = {
      ...formData,
      id: Date.now(),
      picture: formData.photo ? URL.createObjectURL(formData.photo) : "default.png",
    };
    if (target === "lost") {
      setLostPets((prev) => [...prev, newEntry]);
    } else {
      setRecienLlegados((prev) => [...prev, newEntry]);
    }
  }

  function handleDeleteAnimal(target, id) {
    if (target === "lost") {
      setLostPets((prev) => prev.filter((pet) => pet.id !== id));
    } else {
      setRecienLlegados((prev) => prev.filter((pet) => pet.id !== id));
    }
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/"         element={<Home recienLlegados={recienLlegados} />} />
        <Route path="/Perdidos" element={<Perdidos pets={lostPets} />} />
        <Route path="/adopta"   element={<Adopta pets={recienLlegados} />} />
        <Route path="/Publicar" element={
          <Publicar 
            onSubmit={handleAddAnimal}
            onDelete={handleDeleteAnimal}
            lostPets={lostPets}
            recienLlegados={recienLlegados}
        /> } />
      </Routes>
    </>
  );
}