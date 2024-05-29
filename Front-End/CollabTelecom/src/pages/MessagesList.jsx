import { useEffect, useState } from "react";
import ChatList from "../components/MessagesList/ChatList";
import ConnectedList from "../components/MessagesList/ConnectedList";
import Heading from "../components/MessagesList/Heading";
import SearchChat from "../components/MessagesList/SearchChat";
import Navbar from "../components/Navbar";
import axios from "axios";
import SideBar from "../components/SideBar";
import GroupElementSkeleton from "../components/PublicGroupsList/GroupElementSkeleton";
const MessagesList = () => {
  const [freinds, setFreinds] = useState([]);
  const [privateGroups, setPrivateGroups] = useState([]);
  const [searchGroup, setSearchGroup] = useState("");
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("https://auth-ivbz.onrender.com/messages", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        if (!localStorage.getItem("user")) {
          localStorage.setItem("user", JSON.stringify(res.data.user));
        }
        // if(!localStorage.getItem('groups')){
        //   localStorage.setItem('groups',JSON.stringify(res.data.publicGroups));
        // }
        //i need to  cancel it and ghadi njibha f request wa7adha n3ytlha fl page tee public groups

        setFreinds(res.data.freinds);
        setPrivateGroups(res.data.privateGroups);
      })
      .catch((error) => {
        console.error("Error fetching user profile:", error);
        if (error.response.status === 403) {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          window.location.reload();
        }
      });
  }, []);
  return (
    <div
      className={`flex  ${
        width > 768
          ? " flex-row-reverse h-[100dvh] justify-end"
          : "flex-col pb-24"
      } h-[100dvh] overflow-y-auto w-screen  `}
    >
      <div className={`${width > 768 && "w-11/12"}`}>
        <div className="pt-4">
          <Heading />
          <SearchChat
            searchGroup={searchGroup}
            setSearchGroup={setSearchGroup}
          />
          <ConnectedList freinds={freinds} />
          {privateGroups && privateGroups.length > 0 ? (
            <ChatList
              searchGroup={searchGroup}
              freinds={freinds}
              privateGroups={privateGroups}
              setPrivateGroups={setPrivateGroups}
            />
          ) : (
            <div className="space-y-2 px-4 pt-2">
            <GroupElementSkeleton />
            <GroupElementSkeleton />
            <GroupElementSkeleton />
            <GroupElementSkeleton />
            
          </div>
          )}
          {/* <ChatList freinds={freinds} privateGroups={privateGroups}/> */}
        </div>
      </div>
      {/* Navbar component is rendered here, outside the flex container */}
      {width > 768 ? <SideBar /> : <Navbar />}
    </div>
  );
};

export default MessagesList;
