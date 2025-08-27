import triangle3 from "../assets/triangle3.svg";
import square2 from "../assets/square2.svg";
import triangle from "../assets/triangle.svg";
import pp from "../assets/pp.svg";

function Shapes() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="opacity-50">
        {/* Triangles */}
        <img
          src={triangle3}
          alt="triangle"
          className="w-11 h-11 absolute
            opacity-80 left-70 top-90 rotate-45"
        />{" "}
        <img
          src={triangle3}
          alt="triangle"
          className="w-15 h-15 absolute opacity-80 left-15 top-45 rotate-210"
        />{" "}
        <img
          src={triangle}
          alt="triangle"
          className="w-18 h-18 absolute opacity-80 -left-5 top-200 -rotate-165"
        />{" "}
        <img
          src={triangle}
          alt="triangle"
          className="w-18 h-18 absolute opacity-80 left-40 top-120 -rotate-30"
        />{" "}
        <img
          src={triangle}
          alt="triangle"
          className="w-18 h-18 absolute opacity-80 left-70 top-25 scale-50"
        />
        {/* Squares */}
        <img
          src={square2}
          alt="triangle"
          className="w-18 h-18 absolute opacity-80 left-25 -top-5 hover:scale-150"
        />{" "}
        <img
          src={square2}
          alt="triangle"
          className="w-15 h-15 absolute opacity-80 -left-5 top-110 hover:scale-150"
        />{" "}
        <img
          src={square2}
          alt="triangle"
          className="w-22 h-22 absolute opacity-80 -right-8 top-180 hover:scale-150"
        />
      </div>
      <img
        src={pp}
        alt="profile"
        className="absolute opacity-100 left-10 top-20"
      />
    </div>
  );
}

export default Shapes;
