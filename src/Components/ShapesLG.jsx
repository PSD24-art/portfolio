import triangle3 from "../assets/triangle3.svg";
import square2 from "../assets/square2.svg";
import triangle from "../assets/triangle.svg";
import pp from "../assets/pp.svg";

function ShapesLg() {
  return (
    <div className=" inset-0 -z-10 sm:invisible md:invisible">
      <div className=" absolute">
        <div className="">
          {/* Triangles */}
          <img
            src={triangle3}
            alt="triangle"
            className="w-11 h-11 
               "
          />{" "}
          <img src={triangle3} alt="triangle" className="w-15 h-15  " />{" "}
          <img src={triangle} alt="triangle" className="w-18 h-18  " />{" "}
          <img src={triangle} alt="triangle" className="w-18 h-18  " />{" "}
          <img src={triangle} alt="triangle" className="w-18 h-18  " />
          {/* Squares */}
          <img src={square2} alt="Square" className="w-18 h-18  " />{" "}
          <img src={square2} alt="Square" className="w-15 h-15 " />{" "}
          <img src={square2} alt="Square" className="w-22 h-22  " />
        </div>
      </div>

      <img src={pp} alt="profile" className="w-100 h-100" />
    </div>
  );
}

export default ShapesLg;
