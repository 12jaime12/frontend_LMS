import { useAuth } from "../../contexts/authContext";
import "./Dashboard.css";

import React from "react";

const Dashboard = () => {
  const {user} = useAuth()

  
  return <div>Dashboard
    
  </div>;
};

export default Dashboard;
