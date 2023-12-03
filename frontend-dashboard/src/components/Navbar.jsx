import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import User from "../components/User";

function Navbar() {
  return (
    <div className="flex justify-between items-center  py-3">
      <div className="flex gap-2  px-10">
        <GiHamburgerMenu className="lg:hidden" onClick={toggleNavbar} />
        <p className="text-lg font-semibold">Good morning!</p>
        <p>☀️</p>
      </div>

      {/* user */}
      <div className="mr-8">
        <User />
      </div>
    </div>
  );
}

export default Navbar;
