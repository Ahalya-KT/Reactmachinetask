import React from "react";
import img1 from "../assets/Assets/Circled Menu.png";

function Sidebarbtn({ title }) {
  return (
    <div className="flex gap-3 px-5 items-center rounded-md">
      <img src={img1} />
      <p className="text-white">{title}</p>
    </div>
  );
}

export default Sidebarbtn;
