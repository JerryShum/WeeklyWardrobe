import React from "react";

function TopBar() {
  return (
    <div className="flex p-8 justify-between items-center w-full">
      <div className="flex gap-3">
        <p className="text-lg font-semibold">Logged in as: </p>
        <p className="text-lg font-semibold underline">Jeremy</p>
      </div>
      <button className="border-2 border-black rounded outline p-3 hover:bg-black hover:text-white duration-300 font-semibold">
        Logout
      </button>
    </div>
  );
}

export default TopBar;
