import { IoLogoJavascript } from "react-icons/io";
import { ImHtmlFive2 } from "react-icons/im";

import { SiCss3, SiTailwindcss, SiBootstrap, SiMongodb } from "react-icons/si";
import { FaReact, FaJava, FaGithub } from "react-icons/fa";

import { GrNode, GrMysql } from "react-icons/gr";

function Skills() {
  return (
    <div className=" text-white m-8 mt-0 p-3 flex flex-col">
      <div>
        <div className="flex items-center justify-center text-md">
          {" "}
          <p className="opacity-45">
            &#123; Building small steps toward big solutions &#125;
          </p>
        </div>
        <p className="mt-4 text-center">
          A self-driven developer exploring frontend and full-stack development.
          I have experience in building small to medium web applications,
          holding good knowledge and hands on experience in React.
        </p>
        <p className="mt-3 text-center">
          {" "}
          I believe every project is an opportunity to learn, improve, and push
          my coding skills further.
        </p>
        <p className="text-center mt-3">
          Visit{" "}
          <a
            href="https://www.linkedin.com/in/prathamesh-dahake/"
            target="blank"
            className="text-sky-300 hover:underline hover:underline-offset-3"
          >
            LinkedIn
          </a>{" "}
          for more details.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-10  text-4xl mt-7 place-items-center">
        <div className="flex flex-col items-center hover:text-yellow-200 hover:cursor-pointer">
          <IoLogoJavascript />
          <p className="text-[18px]">JavaScript</p>
        </div>
        <div className="flex flex-col items-center hover:text-red-400 cursor-pointer">
          {" "}
          <ImHtmlFive2 />
          <p className="text-[18px]">HTML5</p>
        </div>
        <div className="flex flex-col items-center hover:text-pink-400 cursor-pointer">
          <SiCss3 />
          <p className="text-[18px]">CSS3</p>
        </div>

        <div className="flex flex-col items-center hover:text-sky-300 cursor-pointer">
          {" "}
          <FaReact />
          <p className="text-[18px]">React</p>
        </div>

        <div className="flex flex-col items-center hover:text-sky-400 cursor:pointer">
          {" "}
          <SiTailwindcss />
          <p className="text-[18px]">Tailwind</p>
        </div>

        <div className="flex flex-col items-center hover:text-violet-500 cursor-pointer">
          <SiBootstrap />
          <p className="text-[18px] text-white">Bootstrap</p>
        </div>

        <div className="flex flex-col items-center hover:text-green-600 cursor-pointer">
          {" "}
          <GrNode />
          <p className="text-[18px]">Node</p>
        </div>

        <div className="flex flex-col items-center hover:text-blue-400 cursor-pointer">
          <GrMysql />
          <p className="text-[18px]">SQL</p>
        </div>

        <div className="flex flex-col items-center hover:text-green-300 cursor-pointer">
          <SiMongodb />
          <p className="text-[18px]">MongoDB</p>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          {" "}
          <FaGithub />
          <p className="text-[18px]">GitHub</p>
        </div>

        <div className="flex flex-col items-center hover:text-red-700 cursor:pointer">
          {" "}
          <FaJava />
          <p className="text-[18px] text-white">Java</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
