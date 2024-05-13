/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Avatar from "react-string-avatar";
const EmployeeElement = (
    {name,email,setEmployelist,employelist,id}
) => {
    const [isCheckedState, setIsCheckedState] = useState(employelist.some((member) => member.id === id));
    const handleCheckboxChange = () => {
        // setIsCheckedState((prev)=> !prev);
        if (!isCheckedState) {
            setEmployelist([...employelist, { id, name }]);
        } else {
            setEmployelist(employelist.filter((member) => member.id !== id));
        }
        // if(!isCheckedState){
        //   setEmployelist([...employelist,{id,name}]);
        // }else{
        //   setEmployelist(employelist.filter((memberId) => memberId !== id));
        // }
        
      };
      useEffect(() => {
        setIsCheckedState(employelist.some((member) => member.id === id));
        console.log("employelist");
      }, [employelist,id]);
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
  )
}

export default EmployeeElement