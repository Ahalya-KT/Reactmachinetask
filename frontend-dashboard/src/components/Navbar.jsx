import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import User from "../components/User";

function Navbar({ toggleNavbar }) {
  return (
    <div className="  lg:flex justify-between items-center  py-3">
      <div className="flex items-center justify-center lg:pb-3 pb-0 gap-1  px-10">
        <GiHamburgerMenu className="lg:hidden" onClick={toggleNavbar} />
        <p className="text-lg font-semibold">Good morning!</p>
        <p>🌞</p>
      </div>

      {/* user */}
      <div className="lg:mr-8 mx-5">
        <User />
      </div>
    </div>
  );
}

export default Navbar;
