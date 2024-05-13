import { useState } from "react";
import AlertsContainer from "../components/Alertes/AlertsContainer";
import Navbar from "../components/Navbar";
import Header from "../components/Notifications.jsx/Header";
import Switcher from "../components/Notifications.jsx/Switcher";

const Alertes = () => {
  const [showPopUp, setshowPopUp] = useState(null);
  return (
    <div>
      <Header />
      <Switcher />
      <AlertsContainer setshowPopUp={setshowPopUp} showPopUp={showPopUp} />

      <Navbar />
    </div>
  );
};

export default Alertes;
