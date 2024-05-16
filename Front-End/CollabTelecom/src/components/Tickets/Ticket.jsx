import { MapPin } from "lucide-react";

const Ticket = () => {
  return (
    <div className="px-4 py-3  flex flex-row  justify-between">
      {/* <div className="flex items-center">
            <img src={AlertesPic} alt="" />
        </div> */}
      <div className="space-y-1">
        <div>
            <h2 className=" text-md font-bold"> {alert?.titre || "title"}</h2>
        <h4 className="text-xs font-medium">
          {alert?.description || "description"}
        </h4>
        <p className=" font-Inter text-sm font-[400]"> Assigne a :moha...</p>
        </div>
        <span className="bg-[#209E34] text-white text-xs font-medium px-2.5 py-0.5 rounded-full  ">
            finalise</span>
      </div>
      <div className="flex flex-col justify-around items-end gap-2  ">
        <p>{"date"}</p>

        <button
          type="button"
          className="text-white bg-[#112377] hover:bg-blue-800  font-medium rounded-md text-sm px-3 py-2.5  "
        >
          Consulter
        </button>
      </div>
    </div>
  );
};

export default Ticket;
