import React from "react";

function ButtonGroup() {
  return (
    <div className="flex items-center justify-stretch border-t-2 border-black w-full overflow-hidden">
      <a
        href="/"
        className="p-5 flex flex-1 items-center justify-center border-r-2 border-black = duration-300 font-semibold hover:bg-black hover:text-white h-full"
      >
        <button>What I Wore</button>
      </a>
      <a
        href="/expected"
        className="p-5  flex flex-1 items-center justify-center border-r-2 border-black hover:bg-black duration-300 font-semibold hover:text-white h-full"
      >
        <button>Expected Clothes</button>
      </a>
      <a
        href="/recommendations"
        className=" p-5 flex flex-1 items-center justify-center border-r-2 border-black hover:bg-black duration-300 font-semibold hover:text-white h-full"
      >
        <button>Recommendations</button>
      </a>
      <a
        href=""
        className=" p-5 flex flex-1 items-center justify-center border-black hover:bg-black duration-300 font-semibold hover:text-white h-full"
      >
        <button>Upload</button>
      </a>
    </div>
  );
}

export default ButtonGroup;
