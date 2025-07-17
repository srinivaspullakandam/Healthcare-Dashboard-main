import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  faCalendarDays,
  faChartBar,
  faFlask,
  faMessage,
  faLifeRing,
  faGear,
  faClock,
  faTableColumns,
} from "@fortawesome/free-solid-svg-icons";
import navLinks from "../data/navigation"

const iconMap = {
  faCalendarDays: <FontAwesomeIcon icon={faCalendarDays} style={{ color: "#37349f" }} />,
  "bar-chart-3": <FontAwesomeIcon icon={faChartBar} style={{ color: "#37349f" }} />,
  "flask-conical": <FontAwesomeIcon icon={faFlask} style={{ color: "#37349f" }} />,
  "message-circle": <FontAwesomeIcon icon={faMessage} style={{ color: "#37349f" }} />,
  "life-buoy": <FontAwesomeIcon icon={faLifeRing} style={{ color: "#37349f" }} />,
  settings: <FontAwesomeIcon icon={faGear} style={{ color: " gray"}} />,
  "calendar-clock": <FontAwesomeIcon icon={faClock} style={{ color: "#37349f" }} />,
  "layout-dashboard": <FontAwesomeIcon icon={faTableColumns} style={{ color: "#37349f" }} />,
  history: <FontAwesomeIcon icon={faClock} style={{ color: "#37349f" }} />,
};

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger for mobile */}
      {!open && (
        <button
          className="sm:hidden fixed top-4 left-2 z-30 bg-white p-2 rounded shadow"
          onClick={() => setOpen(true)}
          aria-label="Open sidebar"
        >
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>
      )}

      <aside
        className={`
          w-64 min-h-screen bg-gray-100 shadow-md p-4
          fixed z-20 top-0 left-0
          transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          sm:translate-x-0 sm:static sm:block
        `}
      >
        <button
          className="sm:hidden absolute top-4 right-4 text-gray-500"
          onClick={() => setOpen(false)}
          aria-label="Close sidebar"
        >
          ✕
        </button>

        <div className="flex flex-col justify-between px-4">
          <div>
            <h1 className="text-xl font-bold mb-6"><span className="text-cyan-400">Health</span>care.</h1>

          
            {navLinks.map((section, sectionIdx) => (
              <div key={sectionIdx} className="mb-6">
                <h2 className="text-sm font-bold text-gray-400 mb-4">{section.category}</h2>
                <ul>
                  {section.links.map((link, idx) => (
                    <li key={idx} className="py-2 text-gray-700 flex gap-2 items-center">
                      {iconMap[link.icon] || (
                        <span className="material-icons">{link.icon}</span>
                      )}
                      <span>{link.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

         
          <div className=" pt-4">
            <ul>
              <li className="py-2 text-sm font-bold text-gray-400 flex gap-2 items-center">
                {iconMap["settings"]}
                <span>Setting</span>
              </li>
            </ul>
          </div>
        </div>
      </aside>

      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-10 sm:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
