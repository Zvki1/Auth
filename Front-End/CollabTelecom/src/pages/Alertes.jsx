import { useEffect, useState } from "react";
import AlertsContainer from "../components/Alertes/AlertsContainer";
import Navbar from "../components/Navbar";
import Header from "../components/Alertes/Header";
import Switcher from "../components/Alertes/Switcher";
import axios from "axios";
import { fetchProfile } from "../../api/profile";
import SideBar from "../components/SideBar";

const Alertes = () => {
  const [showPopUp, setshowPopUp] = useState(null);
  const [role, setRole] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    axios;
    fetchProfile()
      .then((res) => {
        setRole(res.data.user.role);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div
      className={`flex w-screen h-[100dvh]   ${
        width > 768 ? " flex-row-reverse justify-end" : ""
      }`}
    >
      <div className={`${width > 768 && "w-11/12"}  flex-grow`}>
        <Header />
        <Switcher role={role} />

        <AlertsContainer setshowPopUp={setshowPopUp} showPopUp={showPopUp} />
      </div>

      {width > 768 ? <SideBar /> : <Navbar />}
    </div>
  );
};

export default Alertes;
