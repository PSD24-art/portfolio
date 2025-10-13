import { BiRightArrow, BiLink } from "react-icons/bi";

function ProjectCard({
  econtent,
  imgUrl,
  projectTitle,
  projectDescription,
  pModules,
  projectLink,
  gitLink,
}) {
  return (
    <div
      className={`${econtent} 
        w-[80dvw] sm:w-[70%] md:w-[55%] lg:w-[40%] 
        mx-auto 
        border border-gray-700 p-5 rounded-2xl 
        shadow-[0_0_15px_rgba(0,0,0,0.6)] 
        bg-[#0a0a0a]/60 
        transition-transform duration-300 
        hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]`}
    >
      {/* Image Container */}
      <div className="flex justify-center items-center w-full overflow-hidden rounded-xl border border-gray-700 bg-black/40">
        <img
          src={imgUrl}
          alt={projectTitle}
          className="w-full h-auto max-h-[55dvh] object-contain transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Text content */}
      <div className="mt-4">
        <p className="text-2xl text-orange-400 font-semibold">{projectTitle}</p>
        <p className="mt-2 text-gray-300 text-sm leading-relaxed">
          {projectDescription}
        </p>

        <p className="mt-3 text-sky-300 font-medium text-start">
          Project has following modules:
        </p>
        <ul className="mt-1 space-y-1 text-sm">
          {pModules.map((m) => (
            <li key={m} className="flex items-center text-gray-200">
              <BiRightArrow className="text-sky-400 mr-1" />
              {m}
            </li>
          ))}
        </ul>

        {/* Links */}
        <div className="flex flex-col mt-4 space-y-2 text-sm">
          <a
            href={projectLink}
            target="_blank"
            className="flex items-center text-sky-400 hover:text-sky-300 hover:underline"
          >
            <BiLink className="mr-1" /> View Project
          </a>
          <a
            href={gitLink}
            target="_blank"
            className="flex items-center text-sky-400 hover:text-sky-300 hover:underline"
          >
            <BiLink className="mr-1" /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
