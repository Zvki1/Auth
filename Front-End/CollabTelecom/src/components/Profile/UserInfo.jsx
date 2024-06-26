/* eslint-disable react/prop-types */
import Avatar from "react-avatar";

const UserInfo = ({ name, status }) => {
  return (
    <div className=" absolute  top-20 flex flex-col items-center space-y-4">
      <div className=" bg-white p-2 rounded-3xl">
        <Avatar
          name={name}
          autoColor={true}
          size={152}
          round={20}
         
        />
      </div>
      <div className="text-center">
        <h3 className="font-Inter text-3xl font-[500]">{name}</h3>
        <h5 className="font-inter text-xl font-[500]  ">{status}</h5>
      </div>
    </div>
  );
};

export default UserInfo;
