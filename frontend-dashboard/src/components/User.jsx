import React from "react";
import img from "../assets/Assets/Rectangle 10.png";

function User() {
  return (
    <div className="flex items-center gap-2 pr-3 bg-white  rounded-lg shadow-md ">
      <div className="px-3">
        <p className="text-sm font-semibold">John Doe</p>
        <p className="text-base">john@doe.com</p>
      </div>
      <div className="py-3 w-25 h-25 ">
        <img src={img} className="w-full h-full object-contain" />
      </div>
    </div>
  );
}

export default User;
