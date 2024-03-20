import Navbar from "../components/Navbar";
import { SquarePen, SlidersHorizontal, DoorOpen, User } from "lucide-react";

import ProfileInfo from "../components/Profile/ProfileInfo";
import UserInfo from "../components/Profile/UserInfo";


const Profile = () => {
  return (
    <div className="bg-gray-100 h-screen flex flex-col items-center overflow-hidden ">
      {/* personal informations div */}
      <div className=" w-full h-176 bg-blue-800  pr-[18px] pt-[21px] pb-[114px] flex justify-end items-center">
        <button className="bg-white rounded-3xl p-2.5 flex justify-center items-center">
          <SquarePen color="#0B4C8C" />
        </button>
      </div>

      {/* user information component */}
      <UserInfo name="Zerrouki Hayet" status="senior developper" />
      {/* menu div */}
      <div className="flex h-full w-full justify-center pb-48 pt-40 px-6 ">
        {/* buttons container */}
        <div className=" self-end flex flex-col items-center gap-3  w-full  ">
          {/* 3 buttons */}
          <div className=" w-full">
            <ProfileInfo
              icon={<User color="#0B4C8C" size={32} />}
              text="Liste des amis"
            />
          </div>
          <div className="w-full">
            <ProfileInfo
              icon={<SlidersHorizontal color="#0B4C8C" size={32} />}
              text="Paramètres"
            />
          </div>
          <div className="w-full">
            <ProfileInfo
              icon={<DoorOpen color="#D30000" size={32} />}
              text="Se déconnecter"
            />
          </div>
        </div>
      </div>
    {/* navbar component */}
      <Navbar />
    </div>
  );
};

export default Profile;
