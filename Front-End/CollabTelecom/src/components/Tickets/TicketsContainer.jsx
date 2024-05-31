import axios from "axios";
import { useEffect, useState } from "react";
import Ticket from "./Ticket";
import Loader from "../Loader";

const TicketsContainer = () => {
  const [tickets, setTickets] = useState([]);
  const [isGettingTickets, setIsGettingTickets] = useState(false);

  useEffect(() => {
    setIsGettingTickets(true);
    axios
      .get("https://auth-ivbz.onrender.com/tickets", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setTickets(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsGettingTickets(false);
      });
  }, []);
  return (
    <div className="w-full ">
      {isGettingTickets ? (
        <div className="pt-32"><Loader/></div>
      ) : (
        <div>
          {tickets.map((ticket) => (
            <Ticket ticket={ticket} key={ticket._id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TicketsContainer;
