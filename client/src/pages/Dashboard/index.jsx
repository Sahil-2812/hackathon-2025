// src/pages/Dashboard/index.jsx
import React from "react";
import { useAuthContext } from "../../contexts/Auth/AuthContext";
import DonorDashboard from "./Donor/DonorDashboard";
import NGODashboard from "./NGO/NGODashboard";

const Dashboard = () => {
  const { user, isAuth } = useAuthContext(); // user should have role property

  if (!isAuth) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h2 className="text-xl text-red-600">Please login to access the dashboard</h2>
      </div>
    );
  }

  // default to Donor if role is missing
  const role = user?.role || "donor";

  return (
    <>
      {role === "ngo" ? <NGODashboard /> : <DonorDashboard />}
    </>
  );
};

export default Dashboard;
