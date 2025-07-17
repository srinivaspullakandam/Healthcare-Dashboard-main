import React from 'react'
import UpcomingSchedule from './UpcomingSchedule'
import CalendarView from './CalendarView'
import avatar from "../assets/images/avatar.png"

const ProfileDashboard = () => {
    return (
        <div className="flex flex-col bg-blue-50 gap-1 px-5">
            <div className='flex gap-2 justify-end mx-5 my-4'>
            <img src= {avatar} alt="Avatar" className="w-8 h-8  rounded-lg bg-cyan-400" />
            <span className="bg-[#37367c] w-8 h-8 text-center text-white text-xl rounded-lg">+</span>
            </div>
            
            <CalendarView />
            <UpcomingSchedule />
        </div>
    );
}

export default ProfileDashboard
