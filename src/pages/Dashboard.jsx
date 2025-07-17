import React from 'react';
import DashboardOverview from '../components/DashboardOverview';
import CalendarView from '../components/CalendarView';
import UpcomingSchedule from '../components/UpcomingSchedule';
import ActivityFeed from '../components/ActivityFeed';

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-6 p-4 w-full overflow-y-auto">
      <DashboardOverview />
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <CalendarView />
        <UpcomingSchedule />
      </div>
      <ActivityFeed />
    </div>
  );
};

export default Dashboard;
