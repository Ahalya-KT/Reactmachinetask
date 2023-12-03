import React from "react";
import img from "../assets/Assets/Briefcase.png";
import webimg from "../assets/Assets/StatBoard.png";
import Sidebarbtn from "./Sidebarbtn";
import img2 from "../assets/Assets/Shutdown.png";

function Sidebar() {
  return (
    <div className="bg-slate-700 w-40 h-screen ">
      <div className="px-8 py-6">
        <img src={img} />
        <img src={webimg} />
      </div>

      <div className=" flex flex-col gap-10 py-14  rounded-md">
        <Sidebarbtn title="dashboard" />
        <Sidebarbtn title="Support" />
        <Sidebarbtn title="Plugin" />
        <Sidebarbtn title="help" />
      </div>
      <div className="h-full"></div>
      <div className="flex items-center justify-center  gap-2 bg-white py-2">
        <p className=" text-lg ">Logout</p>
        <img src={img2} />
      </div>
    </div>
  );
}

export default Sidebar;
