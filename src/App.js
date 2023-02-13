import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Help from "./components/Help";


function App() {
  return(
    <div>
      <NavBar />
      <Home />
      <About />
      <Services />
      <Help />
      <Contact />
    </div>
  );
}

export default App;
