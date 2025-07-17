import React from "react";
import Lungs from "../assets/images/lungs.png";
import Teeth from "../assets/images/tooth.png";
import Bone from "../assets/images/bone.png";

const healthData = [
  { title: "Lungs", img: Lungs },
  { title: "Teeth", img: Teeth },
  { title: "Bone", img: Bone },
];

const HealthStatusCards = () => (
  <div className="space-y-4">
    {healthData.map(({ title, img }) => (
      <div
        key={title}
        className="bg-gray-100 px-4 py-2 rounded-xl shadow flex flex-col items-start gap-2 w-auto"
      >
        <div className="flex items-center gap-2">
          <img src={img} alt={title} className="w-14 h-14 object-contain" />
          <h3 className="font-semibold text-lg">{title}</h3>
        </div>

        <div className="flex flex-col w-full gap-2">
          <p className="text-sm text-gray-500">Date: 12 Oct 2021</p>
          <div className="bg-slate-300 h-2 rounded-lg mt-2">
            <div
              className={`w-1/2 h-2 rounded-lg ${
                title === "Lungs"
                  ? "bg-orange-800"
                  : title === "Teeth"
                  ? "bg-cyan-600"
                  : "bg-orange-500"
              }`}
            />
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default HealthStatusCards;
