import { useEffect, useState } from "react"
import axios from 'axios'
import TicketHeader from "../components/Ticket/TicketHeader"
import TicketDetails from "../components/Ticket/TicketDetails"
import CpuAlert from "../components/Ticket/CpuAlert"

const Ticket = () => {
  const [ticket, setTicket] = useState(null)
  const [remarques, setRemarques] = useState([])
  useEffect(() => {
    const ticketId = window.location.search.split("=")[1]
    axios.get(`http://localhost:8000/ticket?id=${ticketId}`,
    { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
    )
    .then(res => {setTicket(res.data)
      setRemarques(res.data.remarques)
    })
    .catch(err => console.log("error from getting the ticket",err))

  }, [])
  return (
    <div>
      <TicketHeader />
      <TicketDetails ticket={ticket}/>
      <CpuAlert remarques={remarques}/>
      

    </div>
  )
}

export default Ticket