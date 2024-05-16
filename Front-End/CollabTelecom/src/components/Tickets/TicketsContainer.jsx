import axios from 'axios'
import  { useEffect, useState } from 'react'
import Ticket from './Ticket'

const TicketsContainer = () => {
    const [tickets,setTickets]=useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/tickets", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
        .then((response) => {
            setTickets(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [])
  return (
    <div>
        {tickets.map((ticket) => (
            <Ticket
            ticket={ticket}
            key={ticket._id}
            />
        ))}
    </div>
  )
}

export default TicketsContainer