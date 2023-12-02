import React from "react";
import { CiSun } from "react-icons/ci";
import User from "../components/User";

function Navbar() {
  return (
    <div className="flex justify-between items-center py-3 bg-blue-100">
      <div className="flex gap-2  px-10">
        <p className="text-lg font-semibold">Good morning!</p>
        <CiSun size={25} className="text-yellow-500" />
      </div>

      {/* user */}
      <div className="mr-8">
        <User />
      </div>
    </div>
  );
}

export default Navbar;
