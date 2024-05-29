import { useEffect, useState } from "react"
import axios from 'axios'
import TicketHeader from "../components/Ticket/TicketHeader"
import TicketDetails from "../components/Ticket/TicketDetails"
import CpuAlert from "../components/Ticket/CpuAlert"
import { useLocation } from "react-router-dom"

const Ticket = () => {
  let {state} =useLocation()
  
  const [ticket, setTicket] = useState(null)
  const [remarques, setRemarques] = useState([])
  const [userRole, setUserRole] = useState(null)
  useEffect(() => {
    const ticketId = window.location.search.split("=")[1]
    axios.get(`http://localhost:8000/ticket?id=${ticketId}`,
    { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
    )
    .then(res => {
      setTicket(res.data.ticket)
      setRemarques(res.data.ticket.remarques)
      setUserRole(res.data.userRole)
   
    })
    .catch(err => console.log("error from getting the ticket",err))

  }, [])
  return (
    <div>
      <TicketHeader userRole={userRole} statut={ticket?.status} />
      <TicketDetails ticket={ticket}/>
      <CpuAlert remarques={remarques} state={state}/>
      

    </div>
  )
}

export default Ticket