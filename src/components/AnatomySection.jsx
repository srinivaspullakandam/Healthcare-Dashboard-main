import React from "react";
import Anatomy from "../assets/images/anatomy.png";
const AnatomySection = () => (
  <div className="p-7 flex justify-center">
    <div className="relative bg-gray-100 rounded-xl shadow p-4 max-w-sm w-full">
      <img src={Anatomy} alt="Anatomy" className="w-full h-auto" />

      <div className="absolute top-[22%] left-[70%] bg-[#37367c] text-white text-xs p-1 rounded-lg flex items-center shadow-md text-nowrap">
        <span role="img" aria-label="heart">
          ❤️
        </span>
        <span>Healthy Heart</span>
      </div>
      <div className="absolute top-[66%] right-[70%] bg-cyan-400 text-white text-xs px-2 py-1 rounded-lg flex items-center space-x-1 shadow-md text-nowrap">
        <span role="img" aria-label="leg">
          🦵
        </span>
        <span>Healthy Leg</span>
      </div>
    </div>
  </div>
);

export default AnatomySection;
