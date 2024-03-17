import Navbar from "../components/Navbar"
import GeneralHeader from "../components/GeneralChat/GeneralHeader"
import GeneralInput from "../components/GeneralChat/GeneralInput"
import Message from "../components/PrivateChat/Message";

const GeneralChat = () => {

// Définition des personnes
const person1 = "محمد أحمد";
const person2 = "فاطمة علي";
const person3 = "علي خليل";
const person4 = "سارة حسين";
const person5 = "عمر عبد الله";

// Tableau pour stocker les messages
const messages = [
  { sender: person1, time: "9:00 am", content: "مرحباً جميعاً، كيف حالكم؟" },
  { sender: person2, time: "9:05 am", content: "مرحباً محمد، أنا بخير، شكراً! وأنت؟" },
  { sender: person3, time: "9:10 am", content: "أنا بخير أيضاً، شكراً! ما هو مخططكم لليوم؟" },
  { sender: person4, time: "9:15 am", content: "ليس لدي أي مخطط خاص لليوم. سأعمل على مشروع XYZ." },
  { sender: person5, time: "9:20 am", content: "أنا أيضاً متاحة للعمل على المشروع. هل يجب أن ننظم اجتماعاً لمناقشة التقدم؟" },
  { sender: person1, time: "9:25 am", content: "هذه فكرة جيدة. متى تتوفر أوقاتكم جميعاً للاجتماع؟" },
  { sender: person2, time: "9:30 am", content: "أنا متاحة اليوم بعد الظهر حوالي الساعة الثالثة." },
  { sender: person3, time: "9:35 am", content: "أنا متاح طوال اليوم." },
  { sender: person4, time: "9:40 am", content: "أنا أيضاً متاحة طوال اليوم." },
  { sender: person5, time: "9:45 am", content: "أستطيع الانضمام في الساعة الرابعة بعد الظهر." },
  { sender: person1, time: "9:50 am", content: "ممتاز! لننظم الاجتماع اليوم في الساعة الثالثة بعد الظهر. سأرسل دعوة للجميع." },
  { sender: person2, time: "9:55 am", content: "فهمت، شكراً محمد." },
  { sender: person3, time: "10:00 am", content: "شكراً، إلى اللقاء في الاجتماع!" },
  { sender: person4, time: "10:05 am", content: "رائع، أراكم في الاجتماع!" },
  { sender: person5, time: "10:10 am", content: "حسناً، إلى اللقاء في الاجتماع!" }
];

  return (
  
    <div className="h-screen flex flex-col">

      <GeneralHeader />
      <div className=" overflow-y-auto h-full pb-36 ">
      {messages.map((element, index) => (
        <Message
          key={index}
          sender={element.sender}
          time={element.time}
          content={element.content}
        />
      ))}
      
      </div>
      <GeneralInput />
       <Navbar />
    </div>
  )
}

export default GeneralChat