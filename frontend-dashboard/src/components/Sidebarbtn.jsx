import React from "react";

function Sidebarbtn({ title, img }) {
  return (
    <div className="flex gap-2 px-7 w-36 items-center text-white rounded-lg bg-slate-600 py-3 hover:bg-white hover:text-black ">
      <img src={img} />
      <p>{title}</p>
    </div>
  );
}

export default Sidebarbtn;
