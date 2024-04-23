import { useEffect, useState } from "react"
import BluePart from "../components/GroupInfo/BluePart"
import GrayPart from "../components/GroupInfo/GrayPart"
import axios from "axios"


const GroupInfo = () => {
  const  [groupName, setgroupName] = useState("")
  const [groupMembers, setGroupMembers] = useState([])
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const groupNameParam = searchParams.get('groupName');    
  axios.get(`http://localhost:8000/publicGroup?groupName=${groupNameParam}`,{
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
  })
  .then((response) => {
    // console.log(response.data.group.members)
    setGroupMembers(response.data.group.members)
    setgroupName(response.data.group.name)
  })
  .catch((error) => {
    console.log(error)
  })
  }, [])
  return (
    <div className="h-screen flex flex-col items-center">
        <BluePart groupName={groupName} />
        <GrayPart  groupName={groupName} />
    </div>
  )
}

export default GroupInfo