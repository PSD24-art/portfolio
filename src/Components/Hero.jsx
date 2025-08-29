import { Typewriter } from "react-simple-typewriter";
import Shapes from "./Shapes";
import pp from "../assets/pp.svg";
import SVGS from "./SVGS";
import { Link } from "react-scroll";
function Hero() {
  return (
    <div
      className={`h-dvh w-dvw  flex text-white relative overflow-hidden bg-black/40`}
      id="home"
    >
      <div className="-z-30 opacity-50 blur-sm fixed inset-0 bg-[url('/bgblack.jpg')] bg-cover bg-center "></div>

      <div className="flex flex-col justify-evenly items-start text-3xl m-8 mb-8 pb-10 w-full lg:grid lg:grid-cols-2 lg:place-items-center overflow-hidden ">
        <div className="flex items-center justify-center p-5 w-full overflow-hidden invisible lg:visible">
          {" "}
          <img
            src={pp}
            alt="profile"
            className="w-80 h-60 md:w-160 md:h-120 opacity-60 scale-150 "
          />
        </div>

        {/* Text content */}
        <div className="md:text-5xl ">
          <div>Full Stack</div>
          <div className="mb-2">Web Developer</div>
          <div className="text-xl md:text-3xl  mb-2 md:mt-4 lg:mt-6">
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
          <div className="text-xl md:text-3xl  md:mt-4 lg:mt-6">
            <span className="text-fuchsia-400">P</span>assionate{" "}
            <span className="text-fuchsia-400">S</span>oftware{" "}
            <span className="text-fuchsia-400">D</span>eveloper focused on
            building impactful and scalable digital solutions.
          </div>
          <div className="flex mt-2 md:mt-4 lg:mt-6">
            <a
              href="#projects"
              className="text-sm md:text-md lg:text-xl text-yellow-300 underline underline-offset-3 hover:text-fuchsia-400"
            >
              Visit projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
