import { useEffect, useState } from "react";
import Header from "../components/GroupMembersList/Header";
import MembersList from "../components/GroupMembersList/MembersList";
import SearchMember from "../components/GroupMembersList/SearchMember";
import axios from "axios";

const GroupMembersList = () => {

  const [groupMembers, setGroupMembers] = useState([]);
  const [groupName, setGroupName] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const groupNameParam = searchParams.get("groupName");
    setGroupName(groupNameParam);
    axios
      .get(`http://localhost:8000/publicGroup?groupName=${groupNameParam}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((response) => {
        console.log(response.data.group);
        setGroupMembers(response.data.group.members);
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
    <div>
      <Header />
      <SearchMember />
      <MembersList groupMembers={groupMembers} groupName={groupName} isAdmin={isAdmin}/>
    </div>
  );
};

export default GroupMembersList;
