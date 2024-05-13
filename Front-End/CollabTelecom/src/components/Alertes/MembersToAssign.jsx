/* eslint-disable react/prop-types */

import AssignedEmployeeElement from "./AssignedEmployeeElement"


const MembersToAssign = ({setEmployelist,employelist}) => {
  return (
    <div className="w-full  pt-4 pb-2 flex flex-row items-center gap-3 overflow-x-auto overflow-y-hidden max-h-32">
      {employelist.length === 0 && (
        <p className="text-gray-500">No freinds connected</p>
      )}

      {employelist.length > 0 &&
        employelist[0] &&
        employelist.map((employee,index) => {
         
          return(
         <AssignedEmployeeElement key={index} employee={employee} employelist={employelist} setEmployelist={setEmployelist} />
        )})}
    </div>
  )
}

export default MembersToAssign