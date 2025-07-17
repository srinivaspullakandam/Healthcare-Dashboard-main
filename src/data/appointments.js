const appointments = {
  dayNames : ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  days: ["25", "26", "27", "28", "29", "30", "31"],
  times: {
    "25": ["10:00", "12:00",  "12:00"],
    "26": ["09:30", "10:00","11:20"],
    "27": ["12:00","--" ,"13:00"],
    "28": ["10:00","11:00","--"],
    "29": ["10:00", "--",  "12:00"],
    "30": ["09:00", "10:00","12:00"],
    "31": ["14:00", "12:00",  "12:00"],
  },
  details: [
    { title: "Dentist", time: "09:00 AM - 11:00 AM", name:"Dr. Cameron Williamsons" },
    { title: "Physiotherapy Appoinment", time: "11:00 AM - 12:00pm", name:"Dr. Kevin Djones" },
  ],
};
export default appointments;