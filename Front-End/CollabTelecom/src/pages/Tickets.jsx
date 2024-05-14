import { useEffect, useState } from "react";
import { fetchProfile } from "../../api/profile";
import Header from "../components/Alertes/Header";
import Switcher from "../components/Alertes/Switcher";
import Navbar from "../components/Navbar";
const Tickets = () => {
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
        <Header/>
        <Switcher role={role}/>
        <Navbar/>
    </div>
  )
}

export default Tickets