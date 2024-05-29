/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Avatar from "react-avatar";

// eslint-disable-next-line react/prop-types
const ChatElement = ({sender,time="time",content,freindId,isOnline,realSender}) => {
  const dateString = time;
  const hours = dateString.substring(11, 13);
  const hourInt = parseInt(hours);
  const incrementedHour = hourInt + 1;
  const formattedHour = incrementedHour.toString();
  const minutes = dateString.substring(14, 16);
  const formattedTime = formattedHour + ':' + minutes;

  const truncatedContent = content.length >25 ? `${content.slice(0,25)}...` : content;
  const [id, setId] = useState('')
  const [isSame, setisSame] = useState(false)
  useEffect(() => {
   const idofuser =JSON.parse(localStorage.getItem('user')).id
    setId(idofuser)
    const username = JSON.parse(localStorage.getItem('user')).username
    if (realSender === idofuser) {
      setisSame(true)
    }
  }, [])
  return (
    <Link to={`/PrivateChat/${freindId}`} className="flex flex-row gap-4">
      <div className="flex flex-row gap-4 max-h-14 w-full">
        {/* icon div */}
        <div className="relative inline min-w-14">
          <Avatar
            name={sender}
            autoColor={true}
            size={54}
            round={5}
          />
          {isOnline && <span className="absolute bottom-0 left-11 transform translate-y-1/4 size-4 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>}
        </div>
        {/* second div */}
        <div className="flex flex-row justify-between  w-full ">
          {/* username + text div */}
          <div>
            <h3 className="text-[#2B363B] text-2xl font-Inter font-bold">
              {sender}
            </h3>
            {
              isSame ? (
                <p className="text-[#2B363B] text-sm font-Inter font-normal">
                  You:{truncatedContent}
                </p>
              ) : (
                <p className="text-[#2B363B] text-sm font-Inter font-normal">
                  {truncatedContent}
                </p>
              )
            }
          </div>
          <p>{formattedTime}</p>
        </div>
      </div>
    </Link>
  );
};

export default ChatElement;
