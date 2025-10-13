import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./slider.css";
import { CardsArr } from "@/store/CardsArr";
import ProjectCard from "./ProjectCard";

function Slider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3500 }),
  ]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  return (
    <div className="embla" id="projects" ref={emblaRef}>
      <div className="embla__container">
        {CardsArr.map((card) => (
          <div className="embla__slide" key={card.id}>
            <ProjectCard
              eslide=""
              econtent="embla__content"
              imgUrl={card.imgUrl}
              projectTitle={card.projectTitle}
              projectDescription={card.projectDescription}
              pModules={card.pModules}
              projectLink={card.projectLink}
              gitLink={card.gitLink}
            />
          </div>
        ))}
      </div>

      {/* Navigation */}
      <button
        className="embla__button embla__button--prev"
        onClick={scrollPrev}
      >
        ‹
      </button>
      <button
        className="embla__button embla__button--next "
        onClick={scrollNext}
      >
        ›
      </button>
    </div>
  );
}

export default Slider;
