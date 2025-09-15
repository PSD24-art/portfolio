import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import styles from "./DownArrow.module.css";
const DownArrow = ({ handleOnClick }) => {
  return (
    <div
      id="donwB"
      className={` cursor-pointer fixed flex items-center justify-center bottom-7 right-6 h-11 w-11 text-5xl rounded-full bg-fuchsia-500 text-white z-40  ${styles.btnAnimation}`}
      onClick={handleOnClick}
    >
      <MdKeyboardDoubleArrowDown />
    </div>
  );
};

export default DownArrow;
