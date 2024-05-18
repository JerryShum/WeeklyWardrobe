import React from "react";

function ButtonGroup() {
  return (
    <div className="flex items-center justify-center  border-black  outline rounded-xl border w-full">
      <button className=" w-full p-8 flex item justify-center border-r-2 rounded-l-xl border-black hover:bg-slate-300 duration-300">
        meow
      </button>
      <button className="  w-full p-8 flex item justify-center border-r-2 border-black  hover:bg-slate-300 duration-300">
        meow
      </button>
      <button className="  w-full p-8 flex item justify-center rounded-r-xl  hover:bg-slate-300 duration-300">
        meow
      </button>
    </div>
  );
}

export default ButtonGroup;
