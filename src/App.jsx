import { useState, useEffect, useRef } from "react";
import About from "./Components/About";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import ContactMe from "./Components/Contact";
import Footer from "./Components/Footer";
import Shapes from "./Components/Shapes";
import DownArrow from "./Components/DownArrow";
import Slider from "./Components/slider";
import "./App.css";
function App() {
  const idArr = ["hero", "about", "skills", "projects", "contactMe"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = idArr.indexOf(entry.target.id);
            if (index !== -1) {
              setCurrentIndex(index);
            }
          }
        });
      },
      {
        root: null,
        threshold: 0.5, // 50% of section must be visible to count
      }
    );

    // observe all sections
    idArr.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [idArr]);

  function handleOnClick() {
    if (currentIndex < idArr.length - 1) {
      let nextId = idArr[currentIndex + 1];
      document.getElementById(nextId).scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <>
      {/* show arrow only if not on last section */}
      {currentIndex < idArr.length - 1 && (
        <DownArrow handleOnClick={handleOnClick} />
      )}

      <Shapes />
      <Header />
      <Hero />
      <About />
      <Skills />
      <div className="z-100 p-3 w-full flex justify-center flex-col items-center min-h-dvh ">
        {/* <div className="text-fuchsia-500 font-bold text-2xl mb-3">Projects</div> */}
        <Slider />
      </div>

      <ContactMe />
      <Footer />
    </>
  );
}

export default App;
