/* eslint-disable react/prop-types */
import { ChevronLeft } from "lucide-react";

const TicketHeader = ({userRole,statut}) => {
  return (
    <div className="w-full py-6 px-3 flex items-center justify-between">
      <div className="flex flex-row gap-2">
        <button
          onClick={() => {
            history.back();
          }}
        >
          <ChevronLeft size={32} />
        </button>
        <h3 className="text-black font-Inter text-3xl font-semibold mx-auto ">
          Ticket
        </h3>
      </div>
      { (statut=="open" && userRole?.includes("manager")) && <button className="text-[#112377] text-xl font-[500] border-2 hover:border-[#112377] border-white p-2 rounded-md">
        Finaliser
      </button>}
    </div>
  );
};

export default TicketHeader;
