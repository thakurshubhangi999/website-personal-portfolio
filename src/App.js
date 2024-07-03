// App.js
import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { About } from "./components/About/About";
import { Home } from "./components/Home/Home";
import { Experience } from "./components/Experience/Experience";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
import "./App.css";
import ParticlesBackground from './ParticlesBackground';

function App() {
  return (
    <div className="App">
      <ParticlesBackground />
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
