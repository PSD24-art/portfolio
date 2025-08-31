import { GiCurlyWing, GiSpikyWing } from "react-icons/gi";
import { LiaDownloadSolid } from "react-icons/lia";

import {
  blinking_cursor,
  download_CV,
  download_CV_lg,
  download_CV_sl,
  download_CV_text,
} from "./Header.module.css";

function Header() {
  return (
    <header className="z-10 fixed w-dvw h-11 sm:h-15 flex items-center justify-between p-3 pt-5 bg-black lg:bg-transparent md:bg-transparent">
      {/* Logo Div */}
      <a href="#home">
        <div className="group ms-4 text-xl gap-0 lg:bg-transparent bg-black text-white flex items-center hover:cursor-pointer cursor-default ">
          <span className="mr-1 ">
            {/* <GiCurlyWing classNameName="text-fuchsia-400 pb-1.5 text-3xl" /> */}
          </span>
          <div className="text-yellow-300 mr-1.5 flex items-center text-2xl sm:text-3xl pb-1.5 font-bold transform transition duration-300 group-hover:scale-130">
            {"["}
          </div>
          <span className="font-serif text-fuchsia-400 sm:text-3xl ">PSD</span>
          <span className={`blinking_underscore text-white ${blinking_cursor}`}>
            _
          </span>
          <div className="text-yellow-300 ml-1.5 flex items-center text-2xl pb-1.5 font-bold transform transition duration-300 group-hover:scale-130 sm:text-3xl">
            {"]"}
          </div>
        </div>
      </a>

      {/* button Div */}
      <a href="/Resume_Prathamesh.pdf" download="Prathamesh_resume.pdf">
        <div className="flex items-center me-5 bg-transperant">
          <button className={`${download_CV} group`}>
            <div className={`${download_CV_lg}`}>
              <span className={`${download_CV_sl} bg-fuchsia-400`}></span>
              <span
                className={`${download_CV_text} text-yellow-300 group-hover:text-white`}
              >
                <span>
                  <LiaDownloadSolid className="text-2xl sm:text-3xl font-mono text-fuchsia-400 group-hover:text-white" />
                </span>
                Resume
              </span>
            </div>
          </button>
        </div>
      </a>
    </header>
  );
}

export default Header;
