import profile from "../assets/Profile.jpg";
import { SiComma } from "react-icons/si";

function About() {
  return (
    <>
      <div
        id="about"
        className=" flex flex-col items-center justify-evenly  min-h-[calc(100dvh-100px)] text-white lg:h-dvh lg:grid lg:grid-cols-2 lg:place-items-center  bg-black/40 "
      >
        <div className="flex flex-col items-center p-4 pb-0">
          <div
            className="w-48 h-48 rounded-full border-4 border-fuchsia-700 p-2 transition-shadow duration-400 hover:shadow-[0_0_20px_rgba(255,255,255,0.45)] lg:w-58 lg:h-58
          "
          >
            <img src={profile} alt="profile photo" className="rounded-full" />
          </div>
          <div className="flex flex-col ms-10 me-10 lg:ms-20 lg:me-20 lg:mt-4">
            {" "}
            <div className="mt-2 text-2xl lg:text-4xl ">
              {" "}
              <span className="text-4xl lg:text-5xl">A</span>
              <span className="text-2xl lg:text-4xl text-fuchsia-400">B</span>
              <span>OUT ME</span>
            </div>
            <div className="mt-4 flex flex-col ">
              <div className="flex">
                <SiComma className="text-yellow-300 rotate-180" />
                <SiComma className="text-yellow-300 rotate-180" />
              </div>
              <div className="ms-11 me-8 mt-3 text-2xl">
                I’m Prathamesh,{" "}
                <span className="text-fuchsia-300 italic">Web developer</span>{" "}
                with a strong foundation in MERN stack.
              </div>
              <div className="flex justify-end font-serif">
                <SiComma className="text-yellow-300" />
                <SiComma className="text-yellow-300" />
              </div>
              <div className="opacity-50 text-xl  mt-1 text-center">
                Client Side / Server Side / Database
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="mt-2 text-xl lg:text-3xl font-extralight ms-10 me-10  ">
            <p className="mt-1">
              I build full-stack applications that merge performance, design,
              and real-world problem-solving.
            </p>
            <p className="mt-1">
              Each build strengthens my foundation while pushing me toward
              scalable, production-ready solutions.
            </p>
            <p className="mt-1">Looking forward to work with you!</p>
            <a
              href="#contactMe"
              className="underline underline-offset-4 text-sm lg:text-xl text-yellow-300 hover:text-fuchsia-400"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
