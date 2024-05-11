import { useEffect, useState } from "react";
import Alert from "./Alert";
import axios from "axios";

const AlertsContainer = () => {
  const [alerts, setAlerts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/alertes", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((response) => {
      setAlerts(response.data.alerts);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);
  
  return (
  !alerts.lenght > 0 ? (
    <div>
      {alerts.map((alert) => (
        <Alert alert={alert} key={alert._id}  />
      ))}
    </div>
    ) : (
        <div>
            <h2>There are no alerts</h2>
        </div>
        )
    
  );
};

export default AlertsContainer;
