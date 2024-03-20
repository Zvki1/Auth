/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Avatar from "react-string-avatar";

const ConnectedElement = ({name}) => {
  return (
    <Link to="/PrivateChat/zaki" className=" min-w-14">
      <div className="relative ">
      
        <Avatar
          string={name}
          autoColor={true} 
          width={54}
          cornerRadius={5}
        />

        <span className="absolute bottom-0 left-11 transform translate-y-1/4 w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
      </div>
        <p className="text-center font-lato text-[#2B363B] text-xl font-semibold truncate  ">{name}</p>

    </Link>
  );
};

export default ConnectedElement;
