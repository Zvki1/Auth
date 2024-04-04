import Header from "../components/ListAmis/Header";
import SearchChat from "../components/MessagesList/SearchChat";
import Avatar from "react-string-avatar";
import {Phone,MessageCircle ,Trash} from "lucide-react";
import axios from "axios";
import { useState ,useEffect } from "react";
import { Link } from "react-router-dom";
const ListAmis=() => {
    const [friendList, setFriends] = useState([]);
  
  
  const getFriends=() => {
    const token=localStorage.getItem('token');
      axios.get(
      "http://localhost:8000/freindList"
      ,{headers: { Authorization: `Bearer ${token}` }})
     .then((response) => {
       
        setFriends(response.data.freinds);
         
    })
    .catch((err) => {
      console.log("Error",err);
      if(err.response.status===403){
        localStorage.removeItem('token');
        window.location.reload();
      }
      
    });
  }

  useEffect(() => {
    getFriends();
}, []);
  
    return (
        <div className="h-screen flex flex-col items-center " >
         <Header/>
         <SearchChat/> 
         <div  className="py-3 flex flex-col w-full gap-3 items-center  flex-grow overflow-y-auto ">
 {friendList.map((freinds, index) =>(
         <div className=" px-5 flex flex-row justify-between w-full items-center" key={index}>
        
                    <div className="flex flex-row items-center gap-3">
                    <Avatar
                        string={freinds.username}
                        autoColor={true}
                        width={62}
                        cornerRadius={5}
                    />
                    <div>
                        <h3 className="text-[#2B363B] font-semibold text-xl font-Inter">{freinds.username}</h3>
                        <p className="text-[#2B363B] font-[400] text-lg font-Inter">{freinds.email}</p>
                    </div> 
                    </div>
            
                    <div className="flex items-center gap-3 justify-center">
                      <Link to={`/PrivateChat/${freinds._id}`}>
                       <Phone color="#0B4C8C"/>
                       </Link>
                        <Link to={`/PrivateChat/${freinds._id}`}>
                       <MessageCircle color="#0B4C8C"/>
                        </Link>
                       <Trash color="#D30000"/></div>
                 

        </div>
         ))} 
       
        </div>
        </div>
   ) 
}
export default ListAmis;