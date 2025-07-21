import React from "react";
import NavPanel from "./Components/NavPanel";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/home";
import Projects from "./Pages/projects";
import TechStack from "./Pages/techStack";
import Experience from "./Pages/experiance";
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Home />
      <NavPanel />
      <About />
      <TechStack />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
