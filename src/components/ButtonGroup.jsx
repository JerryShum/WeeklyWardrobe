import React from "react";

function ButtonGroup() {
  return (
    <div className="flex items-center justify-center border-t-2 border-black w-full overflow-hidden">
      <button className=" w-full p-5 flex item justify-center border-r-2 border-black = duration-300 font-semibold hover:bg-black hover:text-white">
        What I Wore
      </button>
      <button className="  w-full p-5 flex item justify-center border-r-2 border-black hover:bg-black duration-300 font-semibold hover:text-white">
        Expected Clothes
      </button>
      <button className="  w-full p-5 flex item justify-center  hover:bg-black duration-300 font-semibold hover:text-white">
        Upload
      </button>
    </div>
  );
}

export default ButtonGroup;
