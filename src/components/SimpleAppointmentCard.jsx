const SimpleAppointmentCard = ({ title, time, icon }) => (
  <div className="bg-[#d8ddf8] p-2 rounded-lg flex flex-col font-semibold">
    <span>{title}{icon}
</span>
    <span className="text-sm text-gray-500">{time}</span>
  </div>
);

export default SimpleAppointmentCard;