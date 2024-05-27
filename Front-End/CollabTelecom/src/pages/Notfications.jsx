import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Alertes/Header";
import Switcher from "../components/Alertes/Switcher";
import SideBar from "../components/SideBar";
import { useNavigate } from "react-router-dom";

const Notifications = () => {
  const navigate = useNavigate();
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    navigate("/Notifications/alertes");
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    document.title = "Notifications";
  }, []);
  return (
    <div
      className={`flex w-screen h-screen   ${
        width > 768 ? " flex-row-reverse justify-end" : ""
      }`}
    >
      <div className={`${width > 768 && "w-11/12"}  flex-grow`}>
        <Header />
        <Switcher />
      </div>
      {width > 768 ? <SideBar /> : <Navbar />}
    </div>
  );
};

export default Notifications;
