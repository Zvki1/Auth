import { useEffect, useState } from "react";
import axios from "axios";
import TicketHeader from "../components/Ticket/TicketHeader";
import TicketDetails from "../components/Ticket/TicketDetails";
import CpuAlert from "../components/Ticket/CpuAlert";
import { useLocation } from "react-router-dom";
import Loader from "../components/Loader";

const Ticket = () => {
  let { state } = useLocation();
  const [isFetchingTicket, setIsFetchingTicket] = useState(false);
  const [ticket, setTicket] = useState(null);
  const [remarques, setRemarques] = useState([]);
  const [userRole, setUserRole] = useState(null);
  useEffect(() => {
    const ticketId = window.location.search.split("=")[1];
    setIsFetchingTicket(true);
    axios
      .get(`https://auth-ivbz.onrender.com/ticket?id=${ticketId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setTicket(res.data.ticket);
        setRemarques(res.data.ticket.remarques);
        setUserRole(res.data.userRole);
      })
      .catch((err) => console.log("error from getting the ticket", err))
      .finally(() => setIsFetchingTicket(false));
  }, []);
  return (
    <div>
      <TicketHeader userRole={userRole} statut={ticket?.status} />
      {isFetchingTicket ? (
        <div className="pt-32"><Loader /></div>
      ) : (
        <div>
          <TicketDetails ticket={ticket} />
          <CpuAlert remarques={remarques} state={state} />
        </div>
      )}
    </div>
  );
};

export default Ticket;
