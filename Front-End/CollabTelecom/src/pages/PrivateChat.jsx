/* eslint-disable react/prop-types */
import axios from "axios";
import Header from "../components/PrivateChat/Header";
import HeaderSkeleton from '../components/PrivateChat/HeaderSkeleton'
import Message from "../components/PrivateChat/Message";
import MessageSkeleton from "../components/PrivateChat/MessageSkeleton";
import MessageInput from "../components/PrivateChat/MessageInput";
import SocketContext from '../context/SocketContext';
import { useContext,useEffect,useState,useRef} from 'react';



const PrivateChat = () => {
  const messagesEndRef = useRef(null);
  const  [username, setUsername] = useState('')
  const [messages, setMessages] = useState([]);
  const [isOnline, setisOnline] = useState(false)
  const [isTyping, setisTyping] = useState(false)
  const [receiverId, setreceiverId] = useState('')
  const socket = useContext(SocketContext);
  //  handle the message from the socket
  useEffect(() => {
   if(socket){
    socket.on('chat message',(content,receiverId) => {
      console.log('Message from the socket :', content);
      console.log('and this is my id:',receiverId);
      if (username) {
        const newMessage = {
          content: content,
          sender: username,
          timestamp: new Date().toISOString() // Ajouter l'heure d'envoi du message
        };
        console.log(newMessage);
        setMessages(prevMessages => [...prevMessages, newMessage]);
      }
    });
    socket.on('typing',() => {
      setisTyping(true)
    });
    socket.on('stop typing',() => {
      setisTyping(false)
    });
  }
  }, [socket,username]);

  // fetching id from the url
  useEffect(() => {
   const id=window.location.pathname.split('/')[2] 
   console.log(id);
   setreceiverId(id)
    axios
    .get(`http://localhost:8000/PrivateChat?freindId=${id}`,
    {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
    .then((response) => {
     
      setUsername(response.data.freindInfos.username)
      setisOnline(response.data.freindInfos.isOnline)
      console.log('Messages:',response.data.privateGroup.messages);
      setMessages(response.data.privateGroup.messages)
    })
    .catch((error) => {
      console.log(error)
      if (error.response.status === 401 || error.response.status === 403) {
        localStorage.removeItem('token')
        window.location.replace('/login')
      }
    })
  }, [])
  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: 'auto' });
  }, [messages,isTyping]);
  return (
    <div className="h-screen  flex flex-col">
      {username ? <Header username={username} isOnline={isOnline} /> : <HeaderSkeleton />}
      <div className=" overflow-y-auto w-full h-full ">
        {messages.length === 0 && 
        <div>
        {[...Array(50)].map((_, index) => (
          <MessageSkeleton key={index} />
        ))}
      </div>
        
        }
      {messages.map((element, index) => (
        <Message className="w-full"
          key={index}
          sender={element.sender.username || element.sender}
          time={element.timestamp}
          content={element.content}
        />
      ))}
      {/* empty div used for the scroll */}
       <div ref={messagesEndRef} >
      {isTyping && 
      <div className="animate-typing text-gray-500 pl-4 py-1 text-lg font-medium animate-pulse text-start">Typing...</div>
      }
       </div>
      
      </div>
      <MessageInput receiverId={receiverId} setMessages={setMessages} setisTyping={setisTyping} />
    </div>
  );
};

export default PrivateChat;
