import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import IngredientInput from "./components/inputing";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff8fb] text-[#3d2630]">
      <Navbar />
      <Hero />
      <IngredientInput />
      <About />
      <Footer />
    </main>
  );
}