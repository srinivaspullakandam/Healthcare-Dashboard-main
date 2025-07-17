import React from "react";
import Sidebar from "./components/Sidebar";
import DashboardMainContent from "./components/DashboardMainContent";
import ProfileDashboard from "./components/ProfileDashboard";

const App = () => {
  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <DashboardMainContent />
  <ProfileDashboard />
</div>

    </div>
  );
};

export default App;
