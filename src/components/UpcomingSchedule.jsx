import React from 'react';
import SimpleAppointmentCard from './SimpleAppointmentCard';


const UpcomingSchedule = () => {
  const schedule = {
    "On Thursday": [
      { title: "Health Checkup Complete", time: "10:00 AM", icon:"💉"},
      { title: "Ophthalmologist", time: "01:00 PM", icon:"👁️"},
    ],
    "On Saturday": [{ title: "Cardiologist", time: "11:30 AM", icon:"❤️" }, { title: "Neurologist", time: "01:00 PM", icon:"👨‍⚕️" }],
  };

  return (
    <div className="bg-gray-100 p-4 lg:col-span-2">
      <h3 className="font-bold">The Upcoming Schedule</h3>
      {Object.entries(schedule).map(([day, appts], idx) => (
        <>
        <h4 className="text-md font-semibold text-slate-400 m-2">{day}</h4>
        <div key={idx} className="flex gap-5">
          
          {appts.map((item, i) => (
            <SimpleAppointmentCard key={i} {...item} />
          ))}
        </div>
        </>
      ))}
    </div>
  );
};


export default UpcomingSchedule;