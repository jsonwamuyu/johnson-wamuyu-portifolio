import "./App.css";
import ContactMe from "./components/ContactMe";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <ContactMe />
    </>
  );
}

export default App;
