import { useEffect, useState } from "react";
import AlertsContainer from "../components/Alertes/AlertsContainer";
import Navbar from "../components/Navbar";
import Header from "../components/Notifications.jsx/Header";
import Switcher from "../components/Notifications.jsx/Switcher";
import axios from "axios";

const Alertes = () => {
  const [showPopUp, setshowPopUp] = useState(null);
  const [role, setRole] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/profile",
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
    ).then((res) => {
      setRole(res.data.user.role);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);
  return (
    <div>
      <Header />
      {role.includes("manager") ? <Switcher /> : null}
     
      <AlertsContainer setshowPopUp={setshowPopUp} showPopUp={showPopUp} />

      <Navbar />
    </div>
  );
};

export default Alertes;
