import Navbar from "../components/Navbar"
import GeneralHeader from "../components/GeneralChat/GeneralHeader"
import GeneralInput from "../components/GeneralChat/GeneralInput"
import Message from "../components/PrivateChat/Message";
import TypingMessage from "../components/PrivateChat/TypingMessage";
import SocketContext from '../context/SocketContext';
import { useContext, useEffect ,useState,useRef} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const GeneralChat = () => {
  const messagesEndRef = useRef(null);
  const [messages, setmessages] = useState([])
  const [nameOfGroup, setnameOfGroup] = useState('')
  const [Picture, setPicture] = useState('')
  const [isTyping, setisTyping] = useState(false)
  const [typer, settyper] = useState('')
  const socket = useContext(SocketContext)


useEffect(() => {
  if(socket){
  socket.on('generalChat', (message,sender) => {
    // console.log('Message received :'+ message + ' from :'+ sender);
    const newMessage = {
      content: message,
      sender: sender,
      timestamp: new Date().toISOString() 
    };
    setmessages(prevMessages => [...prevMessages, newMessage]);

  });
  socket.on('generalTyping',(typer) => {
    console.log('typer:',typer);
    settyper(typer)
    setisTyping(true)
  });
  socket.on('stop generalTyping',(typer) => {
    console.log('typer:',typer);
    settyper('')
    setisTyping(false)
  });
}
}
, [socket]);


useEffect(() => {
  // const groupName=JSON.parse(localStorage.getItem('groups'))[0].name
  const searchParams = new URLSearchParams(window.location.search);
  const groupNameParam = searchParams.get('groupName');
  
  axios
  .get(`http://localhost:8000/GeneralChat?groupName=${groupNameParam}`,
  {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
  })
  .then((response) => {
    
    setPicture(response.data.group.picture)
    setnameOfGroup(response.data.group.name)
    setmessages(response.data.group.messages)
  })
  .catch((error) => {
    console.log(error)
    if (error.response.status === 401 || error.response.status === 403) {
      localStorage.removeItem('token')
      window.location.replace('/login')
    }
  });
}
, []);
useEffect(() => {
  messagesEndRef.current.scrollIntoView({ behavior: 'auto' });
}, [messages]);
  return (
  
    <div className="h-screen flex flex-col">

      <GeneralHeader nameOfGroup={nameOfGroup} Picture={Picture}/>
      <div className=" overflow-y-auto h-full pb-36 ">
      {messages.map((element, index) => (
        <Message
          key={index}
          sender={element.sender.username || element.sender}
          time={element.timestamp}
          content={element.content}
        />
      ))}
      
        <div ref={messagesEndRef} >
      {isTyping && 
      <TypingMessage typer={typer} />
      // <div className="animate-typing text-gray-500 pl-4 py-1 text-lg font-medium animate-pulse text-start">Typing...</div>
      }
       </div>
      
      </div>
      <GeneralInput nameOfGroup={nameOfGroup}/>
       <Navbar />
    </div>
  )
}

export default GeneralChat