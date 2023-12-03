import React from "react";
import img from "../assets/Assets/Briefcase.png";
import webimg from "../assets/Assets/StatBoard.png";
import Sidebarbtn from "./Sidebarbtn";
import img2 from "../assets/Assets/Shutdown.png";
import dashboardicon from "../assets/Assets/Circled Menu.png";
import Supporticon from "../assets/Assets/Support.png";
import pluginicon from "../assets/Assets/Puzzle.png";
import helpicon from "../assets/Assets/Help.png";

function Sidebar() {
  return (
    <div className="bg-slate-700 w-44 h-screen fixed flex flex-col justify-between ">
      <div>
        <div className="px-10 py-6">
          <img src={img} />
          <img src={webimg} />
        </div>

        <div className=" flex flex-col gap-5 py-28  px-8 ">
          <Sidebarbtn title="dashboard" img={dashboardicon} />
          <Sidebarbtn title="Support" img={Supporticon} />
          <Sidebarbtn title="Plugin" img={pluginicon} />
          <Sidebarbtn title="help" img={helpicon} />
        </div>
      </div>

      <div className="flex items-center justify-center bg-white gap-2  py-2">
        <p className=" text-lg ">Logout</p>
        <img src={img2} />
      </div>
    </div>
  );
}

export default Sidebar;
