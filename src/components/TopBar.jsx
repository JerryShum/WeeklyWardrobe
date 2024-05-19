import React from "react";
import { ConnectionButton } from "./ConnectButton.jsx";

/*
 TopBar component displays information such as who's logged in 
 and contains a logout button
*/
function TopBar() {
  return (
    <div className="flex p-8 justify-between items-center w-full">
      <div className="flex gap-3">
        <p className="text-lg font-semibold">Logged in as: </p>
        <p className="text-lg font-semibold underline">Jeremy</p>
      </div>
      <div className="flex gap-5">
        <ConnectionButton />

        <button className="border border-black rounded outline p-3 hover:bg-black hover:text-white duration-300 font-semibold">
          Logout
        </button>
      </div>
    </div>
  );
}

export default TopBar;
