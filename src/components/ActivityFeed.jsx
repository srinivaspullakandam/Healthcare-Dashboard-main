
import React from "react";

const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

const barData = [
  [24, 40, 60],
  [35, 50, 45],
  [50, 65, 30],
  [30, 25, 55],
  [40, 30, 60],
  [28, 55, 40],
  [45, 35, 50],
];

const colors = ["bg-[#3D5CFF]", "bg-[#5CE1E6]", "bg-[#CBD5E1]"];

const ActivityFeed = () => {
  return (
    <div className="bg-gray-100 rounded-2xl shadow-md p-4 w-full">
      <div className="flex item-center justify-between">
      <h2 className="text-lg font-semibold text-gray-800">Activity</h2>
      <p className="text-sm text-gray-400">3 appointments on this week</p>
      </div> 
      <div className="flex justify-between items-end h-36">
        {barData.map((group, dayIndex) => (
          <div key={dayIndex} className="flex flex-col items-center space-y-2">
            
            <div className="flex space-x-1 items-end h-28">
              {group.map((height, i) => (
                <div
                  key={i}
                  className={`${colors[i]} w-1.5 rounded-md`}
                  style={{ height: `${height}px` }}
                ></div>
              ))}
            </div>
            
            <span className="text-xs text-gray-500">{days[dayIndex]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
