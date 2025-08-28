import ProjectCard from "./ProjectCard";
import calCivil from "../assets/calCivil.png";
import { useRef } from "react";

function Projects() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.firstChild.offsetWidth + 30;
    if (direction === "left") {
      scrollRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  };

  const cardsArr = [
    {
      id: 1,
      imgUrl: calCivil,
      projectTitle: "calCivil",
      projectDescription:
        "calCivil is a web app that helps civil engineers with essential calculations, built with a clean UI and mobile responsiveness to showcase my CSS skills",
      pModules: [
        "Co-ordinate Distance Calculator",
        "Concrete Volume Calculator",
        "Unit Convertor",
        "Brick Quantity Calculator",
      ],
      projectLink: "https://calcivil-backend.onrender.com",
      gitLink: "https://github.com/PSD24-art/calCivil-backend",
    },
    {
      id: 2,
      imgUrl: calCivil,
      projectTitle: "calCivil",
      projectDescription:
        "calCivil is a web app that helps civil engineers with essential calculations, built with a clean UI and mobile responsiveness to showcase my CSS skills",
      pModules: [
        "Co-ordinate Distance Calculator",
        "Concrete Volume Calculator",
        "Unit Convertor",
        "Brick Quantity Calculator",
      ],
      projectLink: "https://calcivil-backend.onrender.com",
      gitLink: "https://github.com/PSD24-art/calCivil-backend",
    },
  ];

  return (
    <>
      <div className="text-white m-8 p-3 ps-4 pe-4 h-auto" ref={scroll}>
        <button
          onClick={() => scroll("left")}
          className="absolute left-8 translate-y-100 bg-black text-white p-2 rounded-full scale-150"
        >
          {"</"}
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-8 translate-y-100 bg-black text-white p-2 rounded-full scale-150"
        >
          {"/>"}
        </button>

        <p>Projects:</p>
        <div
          ref={scrollRef}
          className="flex items-center flex-shrink-0 overflow-x-auto overflow-y-hidden p-2 border border-amber-50  rounded-2xl"
        >
          {cardsArr.map((card) => (
            <ProjectCard
              key={card.id}
              imgUrl={card.imgUrl}
              projectTitle={card.projectTitle}
              projectDescription={card.projectDescription}
              pModules={card.pModules}
              projectLink={card.projectLink}
              gitLink={card.gitLink}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
