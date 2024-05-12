import Navbar from "../components/Navbar"
import Heading from "../components/PublicGroupsList/Heading"
import SearchChat from "../components/MessagesList/SearchChat"
import GroupList from "../components/PublicGroupsList/GroupList"
import {  useState } from "react"

const PublicGroupsList = () => {
  const [searchGroup, setSearchGroup] = useState('');
  return (
    <div className="flex flex-col h-screen overflow-y-hidden">
    <div className=" ">
    <div className="pt-4">
        <Heading/>
        <SearchChat  searchGroup={searchGroup} setSearchGroup={setSearchGroup}/>
        <GroupList searchGroup={searchGroup}/>
      </div>
    </div>
    {/* Navbar component is rendered here, outside the flex container */}
    <Navbar/>
  </div>
  )
}

export default PublicGroupsList