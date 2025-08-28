import { useRef } from "react";
import { BiLink } from "react-icons/bi";

function ProjectCard({
  imgUrl,
  projectTitle,
  projectDescription,
  pModules,
  projectLink,
  gitLink,
}) {
  const scroll = useRef("null");

  return (
    <div className="w-[90%] flex-shrink-0 m-4 mt-1">
      <div className="p-2 mt-2 shadow-[0_0_5px_rgb(255,255,255)] rounded-xl">
        <img src={imgUrl} className="rounded-xl"></img>
      </div>
      <p className="m-3 mt-2"> {projectTitle} </p>
      <p className="m-3 mt-2">{projectDescription}</p>

      <p className="m-3">Project has following modules</p>
      <ul className="m-3">
        {pModules.map((module) => (
          <li key={module} className="flex">
            <div>
              {" "}
              <BiLink className="mt-1" />
            </div>
            <div>{module}</div>
          </li>
        ))}
      </ul>
      <div className="flex flex-col m-3">
        {" "}
        <a href={projectLink}>Go to Project</a>
        <a href={gitLink}>GitHub</a>
      </div>
    </div>
  );
}

export default ProjectCard;
