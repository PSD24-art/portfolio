import { BiRightArrow, BiLink } from "react-icons/bi";

function ProjectCard({
  imgUrl,
  projectTitle,
  projectDescription,
  pModules,
  projectLink,
  gitLink,
}) {
  return (
    <div className="flex flex-col lg:flex-row lg:w-lg lg:h-96 border-2 p-3 mt-3 rounded-2xl">
      <div className="p-2 mt-2 shadow-[0_0_5px_rgb(255,255,255)] rounded-xl lg:mr-5 h-fit w0fit">
        <img src={imgUrl} className="rounded-xl"></img>
        <p className="m-2 mt-2 text-2xl text-orange-400"> {projectTitle} </p>
      </div>
      <div>
        <p className="m-2 mt-2">{projectDescription}</p>
        <p className="m-2">Project has following modules</p>
        <ul className="m-2">
          {pModules.map((module) => (
            <li key={module} className="flex">
              <div>
                {" "}
                <BiRightArrow className="mt-1 text-sky-400 me-1" />
              </div>
              <div>{module}</div>
            </li>
          ))}
        </ul>
        <div className="flex flex-col m-2">
          {" "}
          <div className="flex items-center hover:text-sky-300 hover:underline hover:underline-offset-3">
            <BiLink className="text-sky-400 me-1" />
            <a href={projectLink}>Go to Project</a>
          </div>
          <div className="flex items-center hover:text-sky-300 hover:underline hover:underline-offset-3">
            <BiLink className="text-sky-400 me-1" />
            <a href={gitLink}>GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
