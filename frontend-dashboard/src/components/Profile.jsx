import React from "react";
import profilepic from "../assets/Assets/media.png";
import facebookicon from "../assets/Assets/facebook.png";
import instagramicon from "../assets/Assets/instagram.png";
import twittericon from "../assets/Assets/twitter.png";

function Profile() {
  return (
    <div className="lg:w-1/6 lg:mt-0 mt-4 bg-white shadow-lg">
      <img className="w-full" src={profilepic} />

      <div className=" flex flex-col items-center justify-center">
        <p className="font-semibold">John Deo</p>
        <p className="text-slate-500">CEO</p>

        <div className="flex gap-2 py-4">
          <img src={facebookicon} />
          <img src={instagramicon} />
          <img src={twittericon} />
        </div>
      </div>
    </div>
  );
}

export default Profile;
