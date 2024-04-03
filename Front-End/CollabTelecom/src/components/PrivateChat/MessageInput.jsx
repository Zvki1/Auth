/* eslint-disable react/prop-types */
import { SendHorizontal } from 'lucide-react';
import { useState,useContext } from 'react';
import SocketContext from '../../context/SocketContext';

const MessageInput = ({receiverId}) => {
  const socket = useContext(SocketContext);
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (!message.trim()) return; 
    console.log('Message from the input not from the socket :', message);
    console.log('receiverId:',receiverId);
    socket.emit( 'chat message', message,receiverId)

    setMessage(''); // Effacer le champ de saisie après l'envoi du message
  };
  return (
//    pt-4 border-t border-gray-300 maybe i add it in the style of the form
<form className="w-full py-3 bg-white  absolute bottom-0 inset-x-0 flex items-center justify-evenly  ">   
   {/* message input */}
    <div className="relative w-4/5">
        <input
        value={message}  onChange={(e) => setMessage(e.target.value)} type="text" id="default-search" className="block w-full p-4  text-sm text-gray-900 border border-gray-300 rounded-3xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Send your message" required />
        {/* we will hide it temprarly  */}
        <div className=" absolute end-2.5 bottom-2.5 hidden  ">\
        <input type="file" />
        <input type="file" />
        </div>
    </div>
    {/* send buton */}
    <button onClick={(event)=>{event.preventDefault();handleSendMessage()}} className=' bg-blue-700 p-3 rounded-full  '>
    <SendHorizontal color='white' />
    </button>
</form>

  )
}

export default MessageInput