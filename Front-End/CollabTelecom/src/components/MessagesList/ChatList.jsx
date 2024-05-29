/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import ChatElement from "./ChatElement";
import GroupElementSkeleton from "../../components/PublicGroupsList/GroupElementSkeleton";

const ChatList = ({ freinds, privateGroups, setPrivateGroups,searchGroup }) => {
  const [render, setrender] = useState(false);
  useEffect(() => {
    // fiha probleme when there is no message between freinds
    privateGroups.sort((a, b) => {
      if (a?.messages?.length != 0) {
        const lastMessageA = a?.messages[a.messages.length - 1];
        const lastMessageB = b?.messages[b.messages.length - 1];
        return (
          new Date(lastMessageB?.timestamp) - new Date(lastMessageA?.timestamp)
        );
      }
    });
    setrender(true);
  }, []);
  const filteredPrivateGroups = privateGroups.filter((group) => {
    return group?.members[0]?.username.toLowerCase().includes(searchGroup.toLowerCase());
  });

  return (
    <div className="px-5 pt-5 flex flex-col w-full overflow-y-auto" style={{ height: "calc(100% - 48px)" }}>
      {/* {console.log("the received groups in chatlist",privateGroups)}
      {console.log("message",privateGroups[0].messages[0].timestamp)} */}

      {privateGroups && privateGroups.length > 0 ? (
        <div className="flex-grow space-y-4 overflow-y-auto w-full h-full">
          {filteredPrivateGroups.map((message, index) => (
            <ChatElement
              key={index}
              sender={message?.members[0].username}
              isOnline={message?.members[0].isOnline}
              time={message?.messages[0]?.timestamp || " "}
              content={message?.messages[0]?.content || " "}
              freindId={message.members[0]._id}
              realSender={message?.messages[0]?.sender || "sender"}
            />
          ))}
        </div>
      ) : (
        <div className="space-y-2">
        <GroupElementSkeleton />
        <GroupElementSkeleton />
        <GroupElementSkeleton />
        <GroupElementSkeleton />
        
      </div>
      )}
    </div>
  );
};

export default ChatList;
