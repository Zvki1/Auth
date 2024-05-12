/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Avatar from "react-string-avatar";

const ContactElement = ({name,email,isOnline,id,setmembersToAdd,membersToAdd}) => {
  
  const [isCheckedState, setIsCheckedState] = useState(membersToAdd.some((member) => member.id === id));

  useEffect(() => {
    setIsCheckedState(membersToAdd.some((member) => member.id === id));
  }, [membersToAdd,id]);
    // i added the id whitout testin tsma blk dir problem need to check next time
  const handleCheckboxChange = () => {
    setIsCheckedState((prev)=> !prev);
    if (!isCheckedState) {
      setmembersToAdd([...membersToAdd, { id, name }]);
    } else {
      setmembersToAdd(membersToAdd.filter((member) => member.id !== id));
    }
    // if(isChecked){
    //   setmembersToAdd([...membersToAdd,{id,name}]);
    // }else{
    //   setmembersToAdd(membersToAdd.filter((memberId) => memberId !== id));
    // }
    
  };
  return (
    <div className="w-full flex items-center justify-between ">
      <div className="flex items-center gap-3">
        <div className="relative ">
          <Avatar
            string={name}
            autoColor={true} 
            width={54}
            cornerRadius={5}
          />
          {isOnline && <span className="absolute bottom-0 left-11 transform translate-y-1/4 size-4 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>}
        </div>
        {/* user infos div */}
        <div>
          <h4 className="text-[#2B363B] text-lg font-lato font-bold ">
            {name}
          </h4>
          <p className="text-[#2B363B] text-sm font-lato ">
            {email}
          </p>
        </div>

      </div>
      <input  className="size-[18px] " type="checkbox" checked={isCheckedState} onChange={handleCheckboxChange} name="select" id="select" />
    </div>
  );
};

export default ContactElement;
