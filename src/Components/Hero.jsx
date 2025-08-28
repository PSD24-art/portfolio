import { main_hero } from "./Hero.module.css";
import { Typewriter } from "react-simple-typewriter";
import Shapes from "./Shapes";

function Hero() {
  return (
    <div className={`${main_hero} relative`}>
      <div className="flex flex-col justify-end items-start text-3xl m-8 mb-8 pb-15">
        <Shapes></Shapes>
        {/* Text content */}
        <div>Full Stack</div>
        <div className="mb-2">Web Developer</div>
        <div className="text-xl mb-2">
          Building digital products that{" "}
          <span className="text-fuchsia-400">
            <Typewriter
              words={["inspire.", "empower.", "perform.", "last."]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={180}
              deleteSpeed={150}
              delaySpeed={1500}
            />
          </span>
        </div>
        <div className="text-xl">
          <span className="text-fuchsia-400">P</span>assionate{" "}
          <span className="text-fuchsia-400">S</span>oftware{" "}
          <span className="text-fuchsia-400">D</span>eveloper focused on
          building impactful and scalable digital solutions.
        </div>
        <div className="flex mt-2">
          <a
            href="#"
            className="text-sm text-yellow-300 underline underline-offset-3 hover:text-fuchsia-400"
          >
            Visit projects
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
