import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import SocketContext from "../../context/SocketContext";
import axios from "axios";
/* eslint-disable react/prop-types */

const Logout = ({ icon, text }) => {
  const socket = useContext(SocketContext);

  const navigate = useNavigate();
  const handleSignOut = () => {
    const token = localStorage.getItem("token");
    axios
      .patch("https://auth-ivbz.onrender.com/profile/disconnect", null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log("User is disconnected", res.data);
      })
      .catch((error) => {
        console.error("Error disconnecting user:", error);
      });

    localStorage.clear();
    socket.disconnect();

    navigate("/login");
    window.location.reload();
  };

  return (
    <button
      onClick={handleSignOut}
      className=" w-full bg-gray-200 rounded-lg pl-[18px] py-[14px]    inline-flex items-center font-Inter font-[400]"
    >
      <span className="icon mr-[6px]">{icon}</span>
      <span className=" font-inter font-[500] text-[23px]">{text}</span>
    </button>
  );
};

export default Logout;
