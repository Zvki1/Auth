import Navbar from "../components/Navbar";
import Heading from "../components/PublicGroupsList/Heading";
import SearchChat from "../components/MessagesList/SearchChat";
import GroupList from "../components/PublicGroupsList/GroupList";
import { useState, useEffect } from "react";
import SideBar from "../components/SideBar";

const PublicGroupsList = () => {
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
  return (
    <div
      className={`flex w-screen h-[100dvh]  ${
        width > 768 ? " flex-row-reverse justify-end" : ""
      }`}
    >
      <div className={`${width > 768 && "w-11/12"}  flex-grow`}>
        <div className="pt-4 h-[100dvh] overflow-y-auto">
          <Heading />
          <SearchChat
            searchGroup={searchGroup}
            setSearchGroup={setSearchGroup}
          />
          <GroupList searchGroup={searchGroup} />
        </div>
      </div>
      {/* Navbar component is rendered here, outside the flex container */}
      {width > 768 ? <SideBar /> : <Navbar />}
    </div>
  );
};

export default PublicGroupsList;
