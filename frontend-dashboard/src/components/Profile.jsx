import React from "react";
import profilepic from "../assets/Assets/media.png";
import facebookicon from "../assets/Assets/facebook.png";
import instagramicon from "../assets/Assets/instagram.png";
import twittericon from "../assets/Assets/twitter.png";

function Profile() {
  return (
    <div className="w-1/6 bg-white shadow-lg">
      <img src={profilepic} />

      <div className="px-16">
        <p className="font-semibold">John Deo</p>
        <p className="text-slate-500 px-5">CEO</p>

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
