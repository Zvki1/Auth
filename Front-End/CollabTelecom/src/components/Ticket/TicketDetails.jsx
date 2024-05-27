/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
const TicketDetails = ({ticket}) => {
    const [assignedTo, setAssignedTo] = useState([]);
    useEffect(() => {
        if(ticket) {
          ticket?.assignedTo.map((user) => {
              setAssignedTo(assignedTo.push(user.username));
          })
        }
    }, [ticket])
console.log(ticket);
   
  return (
    <div className="w-full flex justify-between  p-4 border rounded-lg bg-gray-100">
      <div>
        <div className="text-lg font-semibold mb-2">
          {ticket?.title || "title of the ticket"}
        </div>
        <div className="text-gray-700 mb-2">
            {ticket?.description || "description of the ticket"}
        </div>
        <div className="text-sm text-gray-500 mb-2">
         assigne a : {ticket?.assignedTo.map((user) => user.username).join(", ") || "assigned to"}
        </div>
        {ticket?.status ==="open"?(
        <span className="bg-orange-400 text-white text-xs font-medium px-2.5 py-0.5 rounded-full  ">
        en cours
      </span>
       ):(
        <span className="bg-[#209E34] text-white text-xs font-medium px-2.5 py-0.5 rounded-full  ">
        finalise
      </span>
       )}
      </div>
      <p className="font-Lato font-[400] text-[#9E9E9E] text-xl">{ticket?.date.substring(11,16)}</p>
    </div>
  );
};

export default TicketDetails;
