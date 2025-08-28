import profile from "../assets/Profile.jpg";
import { SiComma } from "react-icons/si";
import styles from "./About.module.css";
import SVGS from "./SVGS";

function About() {
  return (
    <>
      <div className=" pt-12 overflow-hidden flex flex-col items-center text-white ">
        <div className="w-48 h-48 rounded-full border-4 border-fuchsia-700 p-2 transition-shadow duration-400 hover:shadow-[0_0_20px_rgba(255,255,255,0.45)] ">
          <img src={profile} alt="profile photo" className="rounded-full" />
        </div>

        <SVGS></SVGS>

        <div className="flex flex-col ms-10 me-10">
          <div className="mt-6 text-2xl">
            {" "}
            <span className="text-4xl">A</span>
            <span className="text-2xl text-fuchsia-400">B</span>
            <span>OUT ME</span>
          </div>

          <div className="mt-4 flex flex-col ">
            <div className="flex">
              <SiComma className="text-yellow-300 rotate-180" />
              <SiComma className="text-yellow-300 rotate-180" />
            </div>
            <div className="ms-11 me-8 mt-3 text-2xl">
              I’m Prathamesh,{" "}
              <span className="text-fuchsia-400 italic">Web developer</span>{" "}
              with a strong foundation in MERN stack.
            </div>
            <div className="flex justify-end font-serif">
              <SiComma className="text-yellow-300" />
              <SiComma className="text-yellow-300" />
            </div>
          </div>
        </div>
        <div className="opacity-50 text-xl mt-3">
          Client Side / Server Side / Database
        </div>
        <div className="mt-2 text-xl font-extralight ms-10 me-10 mb-10 ">
          <p className="mt-4">
            I build full-stack applications that merge performance, design, and
            real-world problem-solving.
          </p>
          <p className="mt-4">
            Each build strengthens my foundation while pushing me toward
            scalable, production-ready solutions.
          </p>
          <p className="mt-4">Looking forward to work with you!</p>
          <a
            href="#"
            className="underline underline-offset-4 text-sm text-yellow-300 hover:text-fuchsia-400"
          >
            Contact Me
          </a>
        </div>
      </div>
    </>
  );
}

export default About;
