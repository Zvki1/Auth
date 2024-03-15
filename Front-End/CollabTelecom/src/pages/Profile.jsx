import Navbar from "../components/Navbar"
import { SquarePen,SlidersHorizontal,DoorOpen,User } from 'lucide-react';

import ProfileInfo from "../components/Profile/ProfileInfo";
const Profile = () => {
  return (
    <div className="bg-gray-300 h-screen">
      
         <div className=" w-full h-176 bg-blue-800  pr-[18px] pt-[21px] pb-[114px] flex justify-end items-center">
          <button className="bg-white rounded-3xl p-2.5 flex justify-center items-center">
           <SquarePen color="#0B4C8C"/>
          </button>
          
         </div>
          <div className="flex flex-col items-center gap-3  pt-36  pl-[20px] pr-[20px]">
            <div className=" w-full">
             <ProfileInfo icon={<User color="#0B4C8C"/>} text="Liste des amis"/>
            </div>
            <div className="10px] w-full">
             <ProfileInfo icon={<SlidersHorizontal color="#0B4C8C"/>} text="Paramètres"/>
            </div>
            <div className="w-full">
             <ProfileInfo icon={<DoorOpen color="#D30000"/>} text="Se déconnecter"/>
            </div>
         </div>
        <Navbar/>
    </div>
  )
}

export default Profile