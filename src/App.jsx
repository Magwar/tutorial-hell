import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Work from "./sections/Work";
import Contact from "./sections/Contact";
import "./App.css";

function App() {
  const navLinks = ["Home", "About", "Work", "Contact"];
  const [active, setActive] = useState("home");

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b">
        <Navbar
          logo="MW"
          links={navLinks}
          active={active}
          setActive={setActive}
        />
      </header>

      <main className="max-w-7xl mx-auto p-6 space-y-32">
        <Home />
        <About />
        <Work />
        <Contact />
      </main>
    </>
  );
}

export default App;
