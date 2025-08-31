import ProjectCard from "./ProjectCard";
import { CardsArr } from "../store/CardsArr";
import { useRef } from "react";
import SVGS from "./SVGS";

function Projects() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.firstChild.offsetWidth + 320;
    if (direction === "left") {
      scrollRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  };

  return (
    <>
      <div
        id="projects"
        className="text-white rounded-4xl border-t-3 border-b-3 h-[calc(100vh-100px)] overflow-auto ms-5 me-5 md:ms-34 md:me-34 flex p-4 lg:border-r-4 lg:border-l-4 lg:border-0 lg:mb-10 lg:overflow-y-hidden lg:overflow-x-auto lg:items-center bg-black/40"
      >
        <div>
          <h3 className="text-left ps-4 text-2xl underline underline-offset-4 text-fuchsia-400">
            Projects
          </h3>
          <div
            ref={scrollRef}
            className="flex flex-col lg:flex-row lg:mb-10 lg:items-start lg:gap-6 items-center flex-shrink-0 p-8 pt-2 pb-2 rounded-2xl m-2 mt-0 "
          >
            {CardsArr.map((card) => (
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
      </div>
    </>
  );
}

export default Projects;
