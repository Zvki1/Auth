/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import GroupElement from "./GroupElement"
import axios from "axios"

const GroupList = ({searchGroup}) => {
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
    const filteredGroups = groups.filter(group =>
        group.name.toLowerCase().includes(searchGroup.toLowerCase())
    );
  return (
    <div className="px-5 pt-5  flex flex-col w-full   ">
        <div className="flex-grow space-y-4    w-full  ">
            {filteredGroups.map((group, index) => (
            <GroupElement key={index} name={group.name} content={group?.latestMessage?.content || "message"} time={group?.latestMessage?.timestamp || "time"} />
        ))}
        </div>
    </div>
  )
}

export default GroupList