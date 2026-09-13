import Header from "./components/Header";
import Hero from "./components/Hero";
import Specialties from "./components/Specialties";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import LocationSection from "./components/LocationSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[90] focus:rounded-full focus:bg-copper focus:px-6 focus:py-3 focus:text-[12px] focus:font-bold focus:uppercase focus:tracking-[0.16em] focus:text-abyss"
      >
        Ir para o conteúdo
      </a>

      <Header />

      <main id="conteudo">
        <Hero />
        <Specialties />
        <About />
        <Testimonials />
        <LocationSection />
      </main>

      <Footer />

      {/* textura de grão sobre toda a página */}
      <div className="noise-overlay" aria-hidden="true" />
    </>
  );
}
