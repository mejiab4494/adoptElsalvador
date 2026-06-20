import Hero from "./Hero/Hero";
import Adoptions from "./Adoptions/Adoptions";
import Footer from "./Footer/Footer";

export default function Home({ recienLlegados, lostPets }) {
  const combined = [
    ...recienLlegados.map(p => ({ ...p, _key: `adoption-${p.id}` })),
    ...lostPets.map(p => ({ ...p, _key: `lost-${p.id}` })),
  ]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 10);

  return (
    <div>
      <Hero />
      <Adoptions pets={combined} />
      <Footer />
    </div>
  );
}