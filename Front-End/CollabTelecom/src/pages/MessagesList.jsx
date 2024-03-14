import ChatList from "../components/MessagesList/ChatList"
import ConnectedList from "../components/MessagesList/ConnectedList"
import Heading from "../components/MessagesList/Heading"
import SearchChat from "../components/MessagesList/SearchChat"
import Navbar from "../components/Navbar"


const MessagesList = () => {
   
  return (
    <div className="flex flex-col h-screen">
    <div className="flex-grow overflow-y-hidden">
      <div className="pt-4">
        <Heading />
        <SearchChat />
        <ConnectedList />
        <ChatList />
      </div>
    </div>
    {/* Navbar component is rendered here, outside the flex container */}
    <Navbar/>
  </div>
  )
}

export default MessagesList