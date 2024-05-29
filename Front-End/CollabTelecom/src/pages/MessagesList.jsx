import { useEffect, useState } from "react";
import ChatList from "../components/MessagesList/ChatList";
import ConnectedList from "../components/MessagesList/ConnectedList";
import Heading from "../components/MessagesList/Heading";
import SearchChat from "../components/MessagesList/SearchChat";
import Navbar from "../components/Navbar";
import axios from "axios";
import SideBar from "../components/SideBar";

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
          ? " flex-row-reverse h-screen justify-end"
          : "flex-col pb-24"
      } h-screen overflow-y-auto w-screen  `}
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
            <div className=" h-screen flex flex-col gap-3  items-center">
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
              <h2 className=" text-blue-600 text-xl font-semibold">
                Loading...
              </h2>
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
