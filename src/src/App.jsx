import Home from "./components/Main";
import Projects from "./components/Projects";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="text-center">
      <Navbar />
      <Home />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}

export default App;
