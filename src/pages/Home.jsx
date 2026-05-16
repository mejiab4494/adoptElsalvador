import Hero from "./Hero/Hero";
import Adoptions from "./Adoptions/Adoptions";

export default function Home({ recienLlegados }) {
  return (
    <div>
      <Hero />
      <Adoptions pets={recienLlegados} />
    </div>
  );
}