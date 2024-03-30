/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import Avatar from "react-string-avatar";
// eslint-disable-next-line react/prop-types
const ChatElement = ({sender,time,content}) => {
  const truncatedContent = content.length >25 ? `${content.slice(0,25)}...` : content;
  return (
    <Link to="/PrivateChat/zaki" className="flex flex-row gap-4">
      <div className="flex flex-row gap-4 max-h-14 w-full">
        {/* icon div */}
        <div className="relative inline min-w-14">
          <Avatar
            string={sender}
            autoColor={true}
            width={54}
            cornerRadius={5}
          />
          <span className="absolute bottom-0 left-11 transform translate-y-1/4 w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
        </div>
        {/* second div */}
        <div className="flex flex-row justify-between  w-full ">
          {/* username + text div */}
          <div>
            <h3 className="text-[#2B363B] text-2xl font-Inter font-bold">
              {sender}
            </h3>
            <p className="text-base text-elipsis ">{truncatedContent}</p>
          </div>
          <p>{time}</p>
        </div>
      </div>
    </Link>
  );
};

export default ChatElement;
