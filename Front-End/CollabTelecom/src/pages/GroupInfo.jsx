import { useEffect, useState } from "react";
import BluePart from "../components/GroupInfo/BluePart";
import GrayPart from "../components/GroupInfo/GrayPart";
import axios from "axios";

const GroupInfo = () => {
  const [groupName, setgroupName] = useState("");
  const [groupMembers, setGroupMembers] = useState([]);
  const [groupAdmins, setGroupAdmins] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const groupNameParam = searchParams.get("groupName");
    axios
      .get(
        `https://auth-ivbz.onrender.com/publicGroup?groupName=${groupNameParam}`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((response) => {
        // console.log(response.data.group.admins)
        setGroupAdmins(response.data.group.admins);
        setGroupMembers(response.data.group.members);
        setgroupName(response.data.group.name);
        const userId = JSON.parse(localStorage.getItem("user")).id;
        if (response.data.group.admins.includes(userId)) {
          setIsAdmin(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="h-screen flex flex-col items-center">
      <BluePart groupName={groupName} isAdmin={isAdmin} />
      <GrayPart groupName={groupName} isAdmin={isAdmin} />
    </div>
  );
};

export default GroupInfo;
