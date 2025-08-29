import About from "./Components/About";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import ContactMe from "./Components/Contact";
import SVGS from "./Components/SVGS";
import Footer from "./Components/Footer";
import Shapes from "./Components/Shapes";

function App() {
  return (
    <>
      {/* <SVGS></SVGS> */}
      <Shapes></Shapes>

      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>

      <Projects></Projects>

      <ContactMe></ContactMe>

      <Footer></Footer>
    </>
  );
}

export default App;
