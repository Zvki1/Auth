/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const ProfileInfo =({ icon, text, linkTo }) => {
    return (
        <>
          <Link to={linkTo}>
           <button className=" w-full bg-gray-200 rounded-lg pl-[18px] py-[14px]    inline-flex items-center font-Inter font-[400]">
           <span className="icon mr-[6px]">{icon}</span>
           <span className=" font-inter font-[500] text-[23px]">{text}</span>
            </button> 
          </Link> 
        </>
    )
}
export default ProfileInfo;