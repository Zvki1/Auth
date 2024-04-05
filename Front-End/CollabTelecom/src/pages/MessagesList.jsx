
import { useEffect,useState } from "react"
import ChatList from "../components/MessagesList/ChatList"
import ConnectedList from "../components/MessagesList/ConnectedList"
import Heading from "../components/MessagesList/Heading"
import SearchChat from "../components/MessagesList/SearchChat"
import Navbar from "../components/Navbar"
import axios from "axios"



const MessagesList = () => {
  const [freinds,setFreinds] = useState([])
   useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('http://localhost:8000/messages', {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then((res) => {
        if (!localStorage.getItem('user')) {
          localStorage.setItem('user', JSON.stringify(res.data.user));
        }
        if(!localStorage.getItem('groups')){
          localStorage.setItem('groups',JSON.stringify(res.data.groups));
        }
        
        setFreinds(res.data.freinds) 
        
        })
        .catch((error) => {
            console.error('Error fetching user profile:', error);
            if (error.response.status === 403) {
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                window.location.reload();
            }
        });
  }
  , [])

  return (
    <div className="flex flex-col h-screen">
    <div className="flex-grow overflow-y-hidden">
      <div className="pt-4">
        <Heading />
        <SearchChat />
        <ConnectedList freinds={freinds} />
        <ChatList freinds={freinds}/>
      </div>
    </div>
    {/* Navbar component is rendered here, outside the flex container */}
    <Navbar/>
  </div>
  )
}

export default MessagesList