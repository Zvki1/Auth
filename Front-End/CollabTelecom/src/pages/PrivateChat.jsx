/* eslint-disable react/prop-types */
import Header from "../components/PrivateChat/Header";
import Message from "../components/PrivateChat/Message";
import MessageInput from "../components/PrivateChat/MessageInput";
import SocketContext from '../context/SocketContext';
import { useContext,useEffect } from 'react';


// Hardcoded data for demonstration purposes
const person1 = "REGUIEG Zakaria";
const person2 = "AMARI Lamis";

// Array to store messages
const messages = [
  { sender: person1, time: "9:00 am", content: "Salut Lamis, comment ça va ?" },
  { sender: person2, time: "9:05 am", content: "Bonjour Zakaria, ça va bien, merci ! Et toi ?" },
  { sender: person1, time: "9:07 am", content: "Ça va bien aussi. As-tu eu le temps de regarder la nouvelle série sur Netflix ?" },
  { sender: person2, time: "9:10 am", content: "Oui, je l'ai commencée hier soir. C'est vraiment captivant !" },
  { sender: person1, time: "9:12 am", content: "Oui, j'ai entendu dire que c'était génial. Peut-être que nous pourrions la regarder ensemble ce week-end ?" },
  { sender: person2, time: "9:15 am", content: "Ça semble être une excellente idée ! Je suis partante. On se retrouve chez toi ?" },
  { sender: person1, time: "9:17 am", content: "D'accord, ça marche. On se voit samedi soir alors !" },
  { sender: person2, time: "9:20 am", content: "Parfait ! À samedi alors !" },  
  { sender: person1, time: "9:35 am", content: "Bonjour, merci pour l'information. Lamis, est-ce que je peux te voir rapidement pour discuter de nos tâches sur le projet XYZ ?" },
  { sender: person2, time: "9:40 am", content: "Bien sûr Zakaria, je suis disponible maintenant. Où est-ce que tu veux qu'on se rencontre ?" },
  { sender: person1, time: "9:45 am", content: "Allons dans la salle de réunion 2, elle est libre pour l'instant." },
  { sender: person2, time: "9:50 am", content: "D'accord, j'arrive tout de suite." },



];

const PrivateChat = () => {
  const socket = useContext(SocketContext);
  useEffect(() => {
    socket.on('chat message', (msg) => {
      console.log('Message from the socket :', msg);
    });
  }, [socket]);
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className=" overflow-y-auto h-full pb-20">
      {messages.map((element, index) => (
        <Message
          key={index}
          sender={element.sender}
          time={element.time}
          content={element.content}
        />
      ))}
      
      </div>
      <MessageInput />
    </div>
  );
};

export default PrivateChat;
