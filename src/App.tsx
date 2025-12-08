import "./App.css";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NoteApp from "./components/NoteApp";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <NoteApp />
      <Projects />
      <ContactMe />
      <Footer />
    </>
  );
}

export default App;
