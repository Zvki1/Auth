import axios from "axios";
import { useEffect, useState } from "react";
import Ticket from "./Ticket";

const TicketsContainer = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
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
      });
  }, []);
  return (
    <div className="w-full ">
      {tickets.map((ticket) => (
        <Ticket ticket={ticket} key={ticket._id} />
      ))}
    </div>
  );
};

export default TicketsContainer;
