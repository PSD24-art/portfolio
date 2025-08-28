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
    <header className=" z-20 fixed w-dvw h-11 flex items-center justify-between mt-2 ">
      {/* Logo Div */}
      <div className="group ps-4 text-xl gap-0  bg-[rgb(13,13,13)] text-white flex items-center hover:cursor-pointer cursor-default ">
        <span className="mr-1 ">
          {/* <GiCurlyWing classNameName="text-fuchsia-400 pb-1.5 text-3xl" /> */}
        </span>
        <div className="text-yellow-300 mr-1.5 flex items-center text-2xl pb-1.5 font-bold transform transition duration-300 group-hover:scale-130">
          {"["}
        </div>
        <span className="font-serif text-fuchsia-400 ">PSD</span>
        <span className={`blinking_underscore text-white ${blinking_cursor}`}>
          _
        </span>
        <div className="text-yellow-300 ml-1.5 flex items-center text-2xl pb-1.5 font-bold transform transition duration-300 group-hover:scale-130">
          {"]"}
        </div>
      </div>

      {/* button Div */}
      <div className="flex items-center pe-5 bg-[rgb(13,13,13)]">
        <button className={`${download_CV} group`}>
          <div className={`${download_CV_lg}`}>
            <span className={`${download_CV_sl} bg-fuchsia-400`}></span>
            <span
              className={`${download_CV_text} text-yellow-300   group-hover:text-white`}
            >
              <span>
                <LiaDownloadSolid className="text-2xl font-mono text-fuchsia-400 group-hover:text-white" />
              </span>
              Resume
            </span>
          </div>
        </button>
      </div>
    </header>
  );
}

export default Header;
