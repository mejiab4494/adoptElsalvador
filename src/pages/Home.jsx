import Hero from "./Hero/Hero";
import recienLlegado from "../components/recienLlegado.js";
import lostPets from "../components/lost";
import Adoptions from "./Adoptions/Adoptions";

export default function Home() {
  const combinedPets = [...recienLlegado, ...lostPets]
  .sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt))
  .slice(0, 10);

  return (
    <div>
      <Hero />
      <Adoptions pets={combinedPets} />
    </div>
  );
}