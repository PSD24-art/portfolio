import ProjectCard from "./ProjectCard";
import { CardsArr } from "../store/CardsArr";
import { useRef } from "react";

function Projects() {
  const scrollRef = useRef(null);

  return (
    <>
      <div
        id="projects"
        className="relative text-white rounded-4xl border-t-3 border-b-3 h-[calc(100dvh-100px)] overflow-auto ms-5 me-5 md:ms-34 md:me-34 flex p-4 pt-0 flex-col lg:border-r-4 lg:border-l-4 lg:border-0 lg:mb-10 lg:overflow-y-hidden lg:overflow-x-auto lg:items-center bg-black/40"
      >
        <h3 className="sticky top-0 text-left ps-4 text-2xl underline underline-offset-4 text-fuchsia-400 bg-black">
          Projects
        </h3>
        <div>
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
