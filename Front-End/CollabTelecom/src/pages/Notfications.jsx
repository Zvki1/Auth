import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Notifications.jsx/Header";
import Switcher from "../components/Notifications.jsx/Switcher";
import { Navigate } from "react-router-dom";

const Notifications = () => {
  useEffect(() => {
    
    document.title = "Notifications";
  }, []);
  return (
    <div className="h-screen w-screen ">
      <Header />
      <Switcher/>
      <Navbar />
    </div>
  );
};

export default Notifications;
