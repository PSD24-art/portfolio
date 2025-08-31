import { useState } from "react";

export default function Alert() {
  const [showAlert, setShowAlert] = useState(false);
  const handleAlertButton = () => {
    setDisplay(true);
  };
  return (
    <>
      {showAlert && (
        <div className="fixed inset-0 w-screen h-screen backdrop-blur-sm bg-black/45 flex items-center justify-center z-50 p-8">
          <div className="bg-gray-700 border border-sky-100 text-sky-100 px-4 py-3 sm:px-6 sm:py-4 rounded-lg max-w-3xl  mx-auto ">
            <h3 className="text-base sm:text-lg font-semibold mb-2">
              Well done!
            </h3>
            {/* <hr className="border-sky-100 my-2" /> */}
            <p className="text-sm sm:text-base mb-2">
              Thank you for reaching out. I’ll get back to you as soon as
              possible.
            </p>
            <div>
              <button
                className="rounded-md bg-white text-fuchsia-700 font-medium hover:scale-105 active:scale-95 hover:shadow-[0_0_10px_rgb(255, 255, 255)] p-1 ps-4 pe-4 text-xl cursor-pointer"
                onClick={handleAlertButton}
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
