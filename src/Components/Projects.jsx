import ProjectCard from "./ProjectCard";
import { CardsArr } from "../store/CardsArr";
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

  return (
    <>
      <div className="text-white m-8 p-3 ps-4 pe-4 h-auto">
        <button
          onClick={() => scroll("right")}
          className="absolute translate-x-78 translate-y-96 bg-black opacity-50 hover:opacity-100 text-white p-[1px] rounded-full scale-150 cursor-pointer"
        >
          {"/>"}
        </button>
        <button
          onClick={() => scroll("left")}
          className="absolute left-8 translate-y-96 bg-black opacity-50 p-[1px] hover:opacity-100 cursor-pointer rounded-full scale-150"
        >
          {"</"}
        </button>

        <p className="text-2xl m-2 p-2 ps-0 ms-0 text-fuchsia-400  e">
          PROJECTS:
        </p>
        <div
          ref={scrollRef}
          className="flex items-center flex-shrink-0 overflow-x-auto overflow-y-hidden p-2 border border-amber-50  rounded-2xl"
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
    </>
  );
}

export default Projects;
