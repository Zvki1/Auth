/* eslint-disable no-unused-vars */
import ChatElement from "./ChatElement"
const lastMessages = [
  { sender: "Youssef BenAmmar", time: "9:00 am", content: "Hey, how's it going?" },
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
const ChatList = () => {
  return (
    <div className="px-5 pt-6  flex flex-col w-screen h-screen">
       <div className="flex-grow space-y-4 overflow-y-auto w-full  h-screen">
        {lastMessages.map((message, index) => (
          <ChatElement key={index} sender={message.sender} time={message.time} content={message.content} />
        ))}
  </div>
    </div>
  )
}

export default ChatList