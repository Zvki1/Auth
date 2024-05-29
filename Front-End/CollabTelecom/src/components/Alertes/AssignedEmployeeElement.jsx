/* eslint-disable react/prop-types */
import Avatar from "react-avatar";
import { X } from 'lucide-react';
const AssignedEmployeeElement = ({setEmployelist,employelist,employee}) => {
    const handleClick = (e) => {
        e.preventDefault();
        setEmployelist(employelist.filter((member) => member.id !== employee.id));
      }
    
      return (
    
        <div className='min-w-14'>
            <div className="relative">
          
        <Avatar
          name={employee.name}
          autoColor={true} 
          size={54}
          round={5}
        />
          <button onClick={handleClick} className="absolute -top-1 -right-1  size-6 bg-[#112377] text-white rounded-md p-1 cursor-pointer flex items-center justify-center opacity-90">
            <X strokeWidth={4}/>
          </button>
      </div>
        <p className="text-center font-lato text-[#2B363B] text-xl font-semibold truncate max-w-14  ">{employee.name}</p>
        </div>
      
    )
}

export default AssignedEmployeeElement