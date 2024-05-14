import { useEffect, useState } from "react";
import AlertsContainer from "../components/Alertes/AlertsContainer";
import Navbar from "../components/Navbar";
import Header from "../components/Alertes/Header";
import Switcher from "../components/Alertes/Switcher";
import axios from "axios";
import { fetchProfile } from "../../api/profile";

const Alertes = () => {
  const [showPopUp, setshowPopUp] = useState(null);
  const [role, setRole] = useState([]);
  useEffect(() => {
    axios
     fetchProfile()
      .then((res) => {
        setRole(res.data.user.role);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Header />
      <Switcher role={role}/>

      <AlertsContainer setshowPopUp={setshowPopUp} showPopUp={showPopUp} />

      <Navbar />
    </div>
  );
};

export default Alertes;
