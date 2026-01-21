import "./App.css";
import Navbar from "./components/Navbar";

const App = () => {
  const navLinks = ["Home", "About", "Work", "Contact"];
  return (
    <>
      <Navbar logo="WM" links={navLinks} />
      <main></main>
      <footer>
      </footer>
    </>
  );
};

export default App;
