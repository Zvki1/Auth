import { SendHorizontal } from 'lucide-react';
import SocketContext from '../../context/SocketContext';
import { useContext,useEffect,useState} from 'react';
const GeneralInput = () => {
  const socket = useContext(SocketContext)
  const [groups, setgroups] = useState([])
  useEffect(() => {
    JSON.parse(localStorage.getItem('groups')).map((group) => {
      setgroups((prev) => [...prev, group.name]);
    });
  },[])

  const submitMessage = (e) => {
    if(document.getElementById('default-search').value)
     e.preventDefault();
    
    socket.emit('generalChat',document.getElementById('default-search').value,groups,JSON.parse(localStorage.getItem('user')).username);
    console.log('Message sent :',document.getElementById('default-search').value);
    document.getElementById('default-search').value = '';
   
  }
  return (
   
    <form className="w-full py-3  absolute bottom-[73px] inset-x-0 flex items-center justify-evenly bg-[#fff] ">   
   {/* message input */}
    <div className="relative w-4/5">
        <input  type="text" id="default-search" className="block w-full p-4  text-sm text-gray-900 border border-gray-300 rounded-3xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Send your message" required />
        {/* we will hide it temprarly  */}
        <div className=" absolute end-2.5 bottom-2.5 hidden  ">\
        <input type="file" />
        <input type="file" />
        </div>
    </div>
    {/* send buton */}
    <button onClick={(e)=>{submitMessage(e)}} className=' bg-blue-700 p-3 rounded-full  '>
    <SendHorizontal color='white' />
    </button>
</form>
  )
}

export default GeneralInput