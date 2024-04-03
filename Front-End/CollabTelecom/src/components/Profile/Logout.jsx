import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import SocketContext from "../../context/SocketContext"
import axios from "axios";
/* eslint-disable react/prop-types */

const Logout = ({ icon, text }) => {

  const socket = useContext(SocketContext);

    const navigate = useNavigate();
    const handleSignOut = () => {

        const token=localStorage.getItem('token');
        axios.patch('http://localhost:8000/profile/disconnect',null,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((res) => {
            console.log('User is disconnected',res.data);
        })
        .catch((error) => {
            console.error('Error disconnecting user:', error);
        });


        localStorage.removeItem('token');
        localStorage.removeItem('user');
        socket.disconnect();
        console.log("sign out");
        navigate('/');
        }
        
  return (
    <button onClick={handleSignOut}  className=" w-full bg-gray-200 rounded-lg pl-[18px] py-[14px]    inline-flex items-center font-Inter font-[400]">
    <span className="icon mr-[6px]">{icon}</span>
    <span className=" font-inter font-[500] text-[23px]">{text}</span>
     </button> 
  )
}

export default Logout