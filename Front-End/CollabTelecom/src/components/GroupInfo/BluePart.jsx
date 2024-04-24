import { Link } from "react-router-dom";

import { SquarePen,ChevronLeft } from 'lucide-react'
import GroupInformations from "./GroupInformations";

const BluePart = ({groupName,isAdmin}) => {
  return (
    <div className="w-full h-1/4 bg-[#112377] flex flex-col items-center ">
         <div className="flex items-center justify-between px-5 pt-4 w-full">
        <button onClick={()=>{history.back();}}>
        <ChevronLeft size={30} color="white"/>
        </button>
       {isAdmin && <Link to={`/EditGroup?groupName=${groupName}`} className="bg-white rounded-3xl p-2 flex justify-center items-center" >
          <SquarePen color="#0B4C8C" />
        </Link>}
        </div>
        <GroupInformations groupName={groupName}/>
       
    </div>
  )
}

export default BluePart