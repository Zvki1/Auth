/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft,Phone,Video,EllipsisVertical    } from "lucide-react";
import Avatar from "react-string-avatar";
import GroupLogo from "../../assets/Logo_group_chat.svg";
const GeneralHeader = ({nameOfGroup,Picture}) => {
  // useEffect(() => {
  //   console.log('nameOfGroup:',nameOfGroup);
  //   console.log('Picture:',Picture);
  // }, [Picture,nameOfGroup])
  return (
    <header className="py-4 px-5 flex justify-between items-center border-b-2">
      <div className="flex flex-row items-center gap-2">
      <Link to="/publicGroupsList">
          <ChevronLeft />
        </Link>
        <img src={ GroupLogo|| Picture } alt="logo of group" />
        <p className="font-lato text-[#2B363B] text-xl font-bold">{nameOfGroup}</p>
      </div>

      <div className="flex items-center gap-3 justify-center">
      <Phone color="#1D1C1DB2" />
      <Video  color="#1D1C1DB2"/>
      <EllipsisVertical color="#1D1C1DB2" />
      </div>
    </header>
  )
}

export default GeneralHeader