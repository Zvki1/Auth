/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Alert from "./Alert";
import axios from "axios";
import { TriangleAlert } from "lucide-react";

const AlertsContainer = ({ setshowPopUp, showPopUp }) => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/alertes", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setAlerts(response.data.alerts);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {});
  }, []);
  useEffect(() => {}, [alerts]);
  return alerts.length > 0 ? (
    <div>
      {alerts.map((alert) => (
        <Alert
          alert={alert}
          key={alert._id}
          setshowPopUp={setshowPopUp}
          showPopUp={showPopUp}
        />
      ))}
    </div>
  ) : (
    <div className="flex flex-col gap-2 grow w-full h-[380px] items items-center justify-center">
      <TriangleAlert size="120" color="#112377" />
      <h3 className=" font-Inter font-semibold text-xl text-[#112377]">
        Pas d&apos;alertes pour l&apos;instant
      </h3>
    </div>
  );
};

export default AlertsContainer;
