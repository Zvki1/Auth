import { useEffect, useState } from "react";
import { fetchProfile } from "../../api/profile";
import Header from "../components/Alertes/Header";
import Switcher from "../components/Alertes/Switcher";
import Navbar from "../components/Navbar";
import TicketsContainer from "../components/Tickets/TicketsContainer";
import SideBar from "../components/SideBar";
const Tickets = () => {
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
        <TicketsContainer />
      </div>
      {width > 768 ? <SideBar /> : <Navbar />}
    </div>
  );
};

export default Tickets;
