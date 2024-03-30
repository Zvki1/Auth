import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */

const Logout = ({ icon, text }) => {
    const navigate = useNavigate();
    const handleSignOut = () => {
        localStorage.removeItem('token');
        console.log("sign out");
        navigate('/login');
        }
        
  return (
    <button onClick={handleSignOut}  className=" w-full bg-gray-200 rounded-lg pl-[18px] py-[14px]    inline-flex items-center font-Inter font-[400]">
    <span className="icon mr-[6px]">{icon}</span>
    <span className=" font-inter font-[500] text-[23px]">{text}</span>
     </button> 
  )
}

export default Logout