/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import { UserRound,SquarePen,Settings , LogOut  } from 'lucide-react';
import ConfirmDelete from "./ConfirmDelete";
import { useState } from "react";

const Actionscontainer = ({groupName}) => {
  const [showModal, setShowModal] = useState(false)
  const handleClick = () => {
    setShowModal(true)
  }
  return (
    <div className="p-5 flex flex-col gap-3 ">
          <Link to={`/groupMembersList?groupName=${groupName}`}>  
           <button className=" w-full bg-[#F8F8F8] rounded-lg pl-[14px] py-[10px]  space-x-2   inline-flex items-center font-Inter font-[400]">
           <span className="icon mr-[6px]">
              <UserRound color="#0B4C8C" size={32} />
           </span>
           <span className=" font-inter font-[500] text-[23px]">Liste des membres</span>
            </button> 
          </Link> 

          <Link to="linkTo">
           <button className=" w-full bg-[#F8F8F8] rounded-lg pl-[14px] py-[10px] space-x-2    inline-flex items-center font-Inter font-[400]">
           <span className="icon mr-[6px]">
                <SquarePen color="#0B4C8C"  size={32} />
           </span>
           <span className=" font-inter font-[500] text-[23px]">Voir les contenus</span>
            </button> 
          </Link> 

          <Link to="linkTo">
           <button className=" w-full bg-[#F8F8F8] rounded-lg pl-[14px] py-[10px]  space-x-2   inline-flex items-center font-Inter font-[400]">
           <span className="icon mr-[6px]">
                <Settings color="#0B4C8C" size={32} />
           </span>
           <span className=" font-inter font-[500] text-[23px]">Parametres</span>
            </button> 
          </Link> 

         
           <button className=" w-full bg-[#F8F8F8] rounded-lg pl-[14px] py-[10px]  space-x-2   inline-flex items-center font-Inter font-[400]" onClick={handleClick}>
          
                <LogOut size={32} color="red" />
          
           <span className=" font-inter font-[500] text-[23px]">Suprimer le groupe</span>
            </button> 
         
        {showModal && <ConfirmDelete setShowModal={setShowModal}/>}
     
          </div>
  )
}

export default Actionscontainer