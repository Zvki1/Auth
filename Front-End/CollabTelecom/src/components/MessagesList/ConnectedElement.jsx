/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Avatar from "react-avatar";

const ConnectedElement = ({name,freindId,isOnline}) => {
  return (
    <Link to={`/PrivateChat/${freindId}`} className=" min-w-14">
      <div className="relative ">
      
        <Avatar
          name={name}
          autoColor={true} 
          size={54}
          round={5}
        />

        {isOnline && <span className="absolute bottom-0 left-11 transform translate-y-1/4 size-4 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>}
      </div>
        <p className="text-center font-lato text-[#2B363B] text-xl font-semibold truncate max-w-14  ">{name.split(' ')[0]}</p>

    </Link>
  );
};

export default ConnectedElement;
