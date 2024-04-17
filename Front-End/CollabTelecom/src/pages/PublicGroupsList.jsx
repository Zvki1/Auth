import Navbar from "../components/Navbar"
import Heading from "../components/PublicGroupsList/Heading"
import SearchChat from "../components/MessagesList/SearchChat"

import GroupList from "../components/PublicGroupsList/GroupList"
const PublicGroupsList = () => {
 
      
  return (
    <div className="flex flex-col h-screen overflow-y-hidden">
    <div className=" ">
    <div className="pt-4">
        <Heading/>
        <SearchChat />
        <GroupList/>
      </div>
    </div>
    {/* Navbar component is rendered here, outside the flex container */}
    <Navbar/>
  </div>
  )
}

export default PublicGroupsList