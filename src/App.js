import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Tarjima faylingizni import qiling (masalan)
import txt from "./locales/uz.json";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contact txt={txt} /> {/* <-- shu joyda prop uzatyapmiz */}
      <Footer />
    </>
  );
}

export default App;
