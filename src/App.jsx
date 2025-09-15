import About from "./Components/About";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import ContactMe from "./Components/Contact";

import Footer from "./Components/Footer";
import Shapes from "./Components/Shapes";

import DownArrow from "./Components/DownArrow";

function App() {
  let idArr = ["hero", "about", "skills", "projects", "contactMe"];

  function handleOnClick() {
    // find the current section in view
    let currentIndex = -1;

    idArr.forEach((id, index) => {
      let element = document.getElementById(id);
      let rect = element.getBoundingClientRect();

      // check if section is currently visible in viewport
      if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
        currentIndex = index;
      }
    });

    // move to next section if available
    if (currentIndex !== -1 && currentIndex < idArr.length - 1) {
      let nextId = idArr[currentIndex + 1];
      document.getElementById(nextId).scrollIntoView({ behavior: "smooth" });
    } else {
      console.log("Reached last section!");
    }
  }

  return (
    <>
      {/* <SVGS></SVGS> */}
      <DownArrow handleOnClick={handleOnClick} />
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
