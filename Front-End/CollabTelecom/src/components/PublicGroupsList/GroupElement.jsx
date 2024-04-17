/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import GroupImage from "../../assets/logo.svg";
const GroupElement = ({name,content,time}) => {
  const dateString = time;
  const hours = dateString.substring(11, 13);
  const hourInt = parseInt(hours);
  const incrementedHour = hourInt + 1;
  const formattedHour = incrementedHour.toString();
  const minutes = dateString.substring(14, 16);
  const formattedTime = formattedHour + ':' + minutes;
  const truncatedContent = content.length >25 ? `${content.slice(0,25)}...` : content;

  return (
    <Link to={`/GeneralChat?groupName=${name}`} className="flex flex-row gap-4">
      <div className="flex flex-row gap-4 max-h-14 w-full">
        {/* icon div */}
        <div className="relative inline min-w-14">
          <img src={GroupImage} width={52} alt="" />
        </div>
        {/* second div */}
        <div className="flex flex-row justify-between  w-full ">
          {/* username + text div */}
          <div>
            <h3 className="text-[#2B363B] text-xl font-Inter font-bold">
              {name}
            </h3>

            <p className="text-[#2B363B] text-sm font-Inter font-normal">
              {truncatedContent}
            </p>
          </div>
          <p>{formattedTime}</p>
        </div>
      </div>
    </Link>
  );
};

export default GroupElement;
