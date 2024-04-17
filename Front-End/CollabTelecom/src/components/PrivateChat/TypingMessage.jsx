/* eslint-disable react/prop-types */
import Avatar from "react-string-avatar";


const TypingMessage = ({typer}) => {
  return (
    <div className="flex flex-row px-4 py-2 gap-2 items-start">
        <Avatar 
            string={typer}
            autoColor={true}
            width={46}
            cornerRadius={5}
          />
          <div className="flex flex-col">
            <div className="flex flex-row items-center gap-5">
                <p className="font-lato text-[#2B363B] text-lg font-bold">{typer}</p>
                <p className="text-[#616061] font-lato font-[400] text-sm">Now</p>
            </div>
            <p className=" font-lato animate-typing  text-[#1D1C1D]  text-lg font-medium animate-pulse text-start">
            Typing...
            </p>
          </div>
    </div>
  )
}

export default TypingMessage