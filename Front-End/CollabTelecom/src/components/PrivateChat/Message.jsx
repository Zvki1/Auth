/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Avatar from "react-string-avatar";
const Message = ({sender,time,content}) => {
  // extrecting hours and mins from the time
    const dateString = time;
    const hours = dateString.substring(11, 13);
    const minutes = dateString.substring(14, 16);
    const formattedTime = hours + ':' + minutes;

  return (
    <div className="flex flex-row px-4 py-2 gap-2 items-start">
        <Avatar 
            string={sender}
            autoColor={true}
            width={46}
            cornerRadius={5}
          />
          <div className="flex flex-col">
            <div className="flex flex-row items-center gap-5">
                <p className="font-lato text-[#2B363B] text-lg font-bold">{sender}</p>
                <p className="text-[#616061] font-lato font-[400] text-sm">{formattedTime}</p>
            </div>
            <p className="text-[#1D1C1D] text-base font-[400] font-lato">
                {content}
            </p>
          </div>
    </div>
  )
}

export default Message