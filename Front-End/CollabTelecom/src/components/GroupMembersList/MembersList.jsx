/* eslint-disable react/prop-types */

import { Group } from "lucide-react";
import GroupMember from "./GroupMember";

const MembersList = ({groupMembers,groupName,isAdmin}) => {
  console.log(groupMembers);
  return (
    <div className="py-3 flex flex-col w-full gap-3 items-center  flex-grow overflow-y-auto ">
        {groupMembers.length === 0 && <div className="flex flex-col items-center gap-3 pt-9">
            <Group size={100}  color="#0B4C8C"/>
            <h1 className="text-[#2B363B] font-semibold text-2xl font-Inter">Getting your members</h1>
        </div>}
         {groupMembers.map((member) =>(
            <GroupMember member={member} groupName={groupName} key={member._id}  isAdmin={isAdmin}/>
         ))} 
    </div>
  )
}

export default MembersList