import { useEffect, useState } from "react";
import Header from "../components/GroupMembersList/Header";
import MembersList from "../components/GroupMembersList/MembersList";
import SearchMember from "../components/GroupMembersList/SearchMember";
import axios from "axios";

const GroupMembersList = () => {

  const [groupMembers, setGroupMembers] = useState([]);
  const [groupName, setGroupName] = useState("");
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const groupNameParam = searchParams.get("groupName");
    setGroupName(groupNameParam);
    axios
      .get(`http://localhost:8000/publicGroup?groupName=${groupNameParam}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((response) => {
        console.log(response.data.group.members);
        setGroupMembers(response.data.group.members);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <Header />
      <SearchMember />
      <MembersList groupMembers={groupMembers} groupName={groupName}/>
    </div>
  );
};

export default GroupMembersList;
