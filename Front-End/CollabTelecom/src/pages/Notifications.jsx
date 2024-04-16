import { useState } from "react";
import Navbar from "../components/Navbar"


const Notifications = () => {
  const [data, setData] = useState({
    name: 'nazar',
    email: 'nazar@gmail.com',
    phone: 123456789,
  });

  // handle on change according to input name and setState
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    // take data to submit
  };
  return (
    <div>
        Notifications
        <Navbar/>
    </div>
  )
}

export default Notifications