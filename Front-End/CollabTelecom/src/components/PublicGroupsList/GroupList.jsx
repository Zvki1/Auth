/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import GroupElement from "./GroupElement";
import axios from "axios";
import GroupElementSkeleton from "./GroupElementSkeleton";

const GroupList = ({ searchGroup }) => {
  const [isFetching, setIsFetching] = useState(false);
  const [groups, setgroups] = useState([]);
  useEffect(() => {
    setIsFetching(true);
    axios
      .get("https://auth-ivbz.onrender.com/publicGroups", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        // console.log('Public groups:', res.data.grouplist);
        setgroups(res.data.grouplist);
      })
      .catch((error) => {
        console.error("Error fetching public groups:", error);
        if (error.response.status === 403) {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          window.location.reload();
        }
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, []);
  const filteredGroups = groups.filter((group) =>
    group.name.toLowerCase().includes(searchGroup.toLowerCase())
  );
  return (
    <div className="px-5 pt-5  flex flex-col w-full   ">
      {!isFetching ? (
        <div className="flex-grow space-y-4    w-full  ">
          {filteredGroups.map((group, index) => (
            <GroupElement
              key={index}
              name={group.name}
              content={group?.latestMessage?.content || "message"}
              time={group?.latestMessage?.timestamp || "time"}
            />
          ))}
        </div>)
        : (
         <div className="space-y-2">
          <GroupElementSkeleton />
          <GroupElementSkeleton />
          <GroupElementSkeleton />
          <GroupElementSkeleton />
          <GroupElementSkeleton />
          <GroupElementSkeleton />
         </div>
        )
      }
    </div>
  );
};

export default GroupList;
