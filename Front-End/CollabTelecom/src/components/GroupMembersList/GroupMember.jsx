/* eslint-disable react/prop-types */
import Avatar from "react-avatar";
import {Phone,MessageCircle ,Trash} from "lucide-react";
import axios from "axios";
// import { useState ,useEffect } from "react";
import { Link } from "react-router-dom";
import DeleteMemberError from "./DeleteMemberError";
import { useState } from "react";


const GroupMember = ({member,groupName,isAdmin}) => {
    const [showModal, setShowModal] = useState(false)
    const handleDelete = () => {
        console.log('delete member:',member);
       
        axios.patch(`http://localhost:8000/publicGroup/groupMembers`,{
            groupName:groupName,
            memberId:member._id
        },{
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        })
        .then((response) => {
            console.log(response.data);
            alert('Member deleted successfully');
            window.location.reload();
        })
        .catch((error) => {
            if(error.response.data.error === "You can't delete an admin"){
                console.log(error.response.data.error);
                setShowModal(true)
            }
            // alert(error.response.data.error);
        });
    }
  return (
    <div className=" px-5 flex flex-row justify-between w-full items-center" >
        
                    <div className="flex flex-row items-center gap-3">
                    <Avatar
                        name={member.username}
                        autoColor={true}
                        size={62}
                        round={5}
                    />
                    <div>
                        <h3 className="text-[#2B363B] font-semibold text-xl font-Inter">{member.username}</h3>
                        <p className="text-[#2B363B] font-[400] text-lg font-Inter">{member.email}</p>
                    </div> 
                    </div>
            
                    <div className="flex items-center gap-3 justify-center">
                      <Link to={`/PrivateChat/${member._id}`}>
                       <Phone color="#0B4C8C"/>
                       </Link>
                        <Link to={`/PrivateChat/${member._id}`}>
                       <MessageCircle color="#0B4C8C"/>
                        </Link>
                        
                       {isAdmin && <button onClick={handleDelete}>
                        <Trash color="#D30000"/>
                       </button>
                       }
                       </div>
                 {showModal && <DeleteMemberError setShowModal={setShowModal} />}

        </div>
  )
}

export default GroupMember