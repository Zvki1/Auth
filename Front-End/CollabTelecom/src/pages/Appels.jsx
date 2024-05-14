import Navbar from "../components/Navbar";
import Header from "../components/Alertes/Header";
import Switcher from "../components/Alertes/Switcher";
import { useEffect, useState } from "react";
import { fetchProfile } from "../../api/profile";


const Appels = () => {
  
  const [role, setRole] = useState([]);
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
    <div>
      <Header />
      <Switcher role={role}/>
      <Navbar />
    </div>
  );
};

export default Appels;
