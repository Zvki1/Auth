/* eslint-disable react/prop-types */
import NewMemberElement from "./NewMemberElement";

const NewMembersList = ({membersToAdd,setmembersToAdd}) => {
  
  return (
    <div className="w-full px-5 pt-1 pb-2 flex flex-row items-center gap-3 overflow-x-auto max-h-32">
      {membersToAdd.length === 0 && (
        <p className="text-gray-500">No freinds connected</p>
      )}

      {membersToAdd.length > 0 &&
        membersToAdd[0] &&
        membersToAdd.map((freind,index) => {
          // console.log(freind);
          return(
          <NewMemberElement key={index} freind={freind} membersToAdd={membersToAdd} setmembersToAdd={setmembersToAdd} />
        )})}
    </div>
  );
};

export default NewMembersList;
