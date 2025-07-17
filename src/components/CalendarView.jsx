import appointments from "../data/appointments.js";

const CalendarView = () => (
  <div className="bg-gray-100  px-2 ">
    <h3 className="font-bold mb-2">October 2021</h3>
    {/* Use appointments.dayNames for the header */}
    <div className="grid grid-cols-7 gap-2 text-center text-xs font-semibold text-gray-400 mb-1">
      {appointments.dayNames.map((name) => (
        <div key={name}>{name}</div>
      ))}
    </div>
    <div className="grid grid-cols-7 gap-2 text-center text-sm ">
      {appointments.days.map((day, idx) => (
        <div key={idx} className=" p-2 flex flex-col gap-4">
          {day}
          {appointments.times[day] &&
            appointments.times[day].map((time, i) => (
              
              <div
              key={i}
              className={`relative p-1 rounded-lg text-xs ${
                time === "09:30"
                  ? 'bg-[#37367c] text-white'
                  : time === "11:00"
                  ? 'bg-[#d8def8] text-white'
                  : time === "09:00"
                  ? ' text-white'
                  :  time === "14:00"
                  ? ' text-white'
                  : ''
              }`}
            >
              {time === "09:00" && (
                <div className="absolute top-0 left-0 h-6 w-[250%] bg-[#d8def8] z-0 rounded"></div>
              )}
              <span className="relative z-10">{time}</span>
            </div>
            
            ))}
        </div>
      ))}
    </div>
    <div className="flex gap-5 mt-5 flex-wrap">
      {appointments.details.map((appt, i) => (
           <div
           key={i}
           className={`flex flex-col  p-3 text-sm rounded-2xl text-nowrap ${
             i === 0 ? 'bg-[#37367c] text-white' : 'bg-[#d8ddf8]'
           }`}
         >
       <strong >{appt.title}<span> {i === 0 ? '🦷' : '💪'}</span></strong> 
       <h6>{appt.time}</h6>
       <h6>{appt.name}</h6>
     </div>
     
      ))}
    </div>
  </div>
);

export default CalendarView;