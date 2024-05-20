/* eslint-disable react/prop-types */
// import { MapPin } from "lucide-react";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Ticket = ({ ticket }) => {
  console.log(ticket);
  const [assignedToList, setAssignedToList] = useState([]);
  // make an array that contains the usernames of the assignedTo  and concatinate them 
  useEffect(() => {
    const assignedTo = ticket.assignedTo.map((user) => user.username).join(",");
    setAssignedToList(assignedTo);
  }, [ticket]);
  return (
    <div className="px-4 py-3  flex flex-row  justify-between">
      {/* <div className="flex items-center">
            <img src={AlertesPic} alt="" />
        </div> */}
      <div className="space-y-1">
        <div>
          <h2 className=" text-md font-bold"> {ticket?.title || "title"}</h2>
          <h4 className="text-xs font-medium">
            {ticket?.description || "description"}
          </h4>
          <p className=" font-Inter text-sm font-[400]"> Assigne a:{assignedToList}</p>
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
      <div className="flex flex-col justify-around items-end gap-2  ">
        <p>{ticket?.date.substring(11,16)||"date"}</p>

        <Link
          to={`/Notifications/Tickets/ticket?id=${ticket._id}`}
          type="button"
          className="text-white bg-[#112377] hover:bg-blue-800  font-medium rounded-md text-sm px-3 py-2.5  "
        >
          Consulter
        </Link>
      </div>
    </div>
  );
};

export default Ticket;
