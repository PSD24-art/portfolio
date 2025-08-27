import profile from "../assets/Profile.jpg";
import { SiComma } from "react-icons/si";

function About() {
  return (
    <div className="flex flex-col items-center text-white m-10">
      <div className="w-48 h-48 rounded-full border-4 border-fuchsia-700 p-2 transition-shadow duration-400 hover:shadow-[0_0_20px_rgba(255,255,255,0.45)]">
        <img src={profile} alt="profile photo" className="rounded-full" />
      </div>
      <div className="flex flex-col">
        <div className="mt-6 text-2xl">
          {" "}
          <span className="text-4xl">A</span>
          <span className="text-2xl text-fuchsia-400">B</span>
          <span>OUT ME</span>
        </div>
        <path
          d="M117.207 488.433L165.999 488.62L170.638 503.714L122.08 504.239L117.207 488.433Z"
          fill="#9C27B0"
        ></path>
        <div className="mt-4 flex flex-col">
          <div className="flex">
            <SiComma className="text-yellow-300 rotate-180" />
            <SiComma className="text-yellow-300 rotate-180" />
          </div>
          <div className="ms-8 me-8 mt-3 text-2xl">
            I’m Prathamesh,{" "}
            <span className="text-fuchsia-400 italic">Web developer</span> with
            a strong foundation in MERN stack.
          </div>
          <div className="flex justify-end font-serif">
            <SiComma className="text-fuchsia-400" />
            <SiComma className="text-fuchsia-400" />
          </div>
        </div>
      </div>
      <div className="opacity-50 text-xl">
        Client Side / Server Side / Database
      </div>
      <div className="mt-2 text-xl">
        <p className="mt-4">
          I build full-stack applications that merge performance, design, and
          real-world problem-solving.
        </p>
        <p className="mt-4">
          Each build strengthens my foundation while pushing me toward scalable,
          production-ready solutions.
        </p>
        <p className="mt-4">Looking forward to work with you!</p>
      </div>
    </div>
  );
}

export default About;
