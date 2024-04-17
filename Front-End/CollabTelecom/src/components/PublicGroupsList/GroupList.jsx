import { useEffect, useState } from "react"
import GroupElement from "./GroupElement"
import axios from "axios"

const GroupList = () => {
    const [groups, setgroups] = useState([])
    useEffect(() => {
      
        axios.get('http://localhost:8000/publicGroups', {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        .then((res) => {
            // console.log('Public groups:', res.data.grouplist);
            setgroups(res.data.grouplist);
        })
        .catch((error) => {
            console.error('Error fetching public groups:', error);
            if (error.response.status === 403) {
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                window.location.reload();
            }
        });
        
     
    }, [])
    // const groups=[
    //     {
    //         "groupName": "Work Chat",
    //         "lastMessage": "Don't forget the meeting tomorrow!",
    //         "timestamp": "2024-04-15T18:30:00Z"
    //     },
    //     {
    //       "groupName": "Family Group",
    //       "lastMessage": "What time are we meeting for dinner?",
    //       "timestamp": "2024-04-14T20:45:00Z"
    //     },
    //     {
    //       "groupName": "Study Buddies",
    //       "lastMessage": "I found a great resource for our project!",
    //       "timestamp": "2024-04-15T10:20:00Z"
    //     },
    //     {
    //         "groupName": "Study Buddies",
    //         "lastMessage": "I found a great resource for our project!",
    //         "timestamp": "2024-04-15T10:20:00Z"
    //         },
    
          
          
    //   ]
  return (
    <div className="px-5 pt-5  flex flex-col w-screen   ">
        <div className="flex-grow space-y-4    w-full  ">
            {groups.map((group, index) => (
            <GroupElement key={index} name={group.name} content={group?.latestMessage?.content || "message"} time={group?.latestMessage?.timestamp || "time"} />
        ))}
        </div>
    </div>
  )
}

export default GroupList