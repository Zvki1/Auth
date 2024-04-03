/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import ChatElement from "./ChatElement"
const lastMessages = [
  { sender: "Youssef Ben", time: "9:00 am", content: "Hey, how's it going?" },
  { sender: "Sofia ElKhattabi", time: "9:05 am", content: "Hi Youssef! I'm doing well, thanks. How about you?" },
  { sender: "Ahmed pouhajja", time: "9:10 am", content: "I'm good too. Did you watch the match last night?" },
  { sender: "Amina BenSalah", time: "9:15 am", content: "Yes, I did. It was incredible! What about you?" },
  { sender: "Mohamed Toumi", time: "9:20 am", content: "I missed it. Who won?" },
  { sender: "Laila BenMansour", time: "9:25 am", content: "The home team won. It was a close game!" },
  { sender: "Omar Khelifi", time: "9:30 am", content: "That's great to hear. We should go to a match sometime!" },
  { sender: "Fatima ElGharbi", time: "9:35 am", content: "Definitely! I'm up for it." },
  { sender: "Nabil Chergui", time: "9:40 am", content: "Count me in too. Let's plan it for next weekend." },
  { sender: "Nora Abidi", time: "9:45 am", content: "Sounds like a plan!" },
  { sender: "Mehdi Meziani", time: "9:50 am", content: "Agreed! I'll check the schedule for tickets." },
  { sender: "Samira Fassi", time: "9:55 am", content: "Awesome! Keep us posted." },
  { sender: "Karim Mansouri", time: "10:00 am", content: "Will do!" },
  { sender: "Nadia Soussi", time: "10:05 am", content: "Looking forward to it!" },
  { sender: "Ali Cherif", time: "10:10 am", content: "Me too!" }
];
const ChatList = ({freinds}) => {
  return (
    <div className="px-5 pt-5  flex flex-col w-screen h-screen">
      {freinds && freinds.length > 0 ? (
         <div className="flex-grow space-y-4 overflow-y-auto w-full  h-screen">
         {freinds.map((message, index) => (
           <ChatElement key={index} sender={message.username} isOnline={message.isOnline} time="time" content="message" freindId={message._id} />
         ))}
   </div>
      ) : (
        <div className=" h-screen flex flex-col gap-3  items-center">
            <div role="status">
        <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
        <span className="sr-only">Loading...</span>
            </div>
            <h2 className=" text-blue-600 text-xl font-semibold">Loading...</h2>
          </div>
      )}
    
    </div>
  )
}

export default ChatList