/* eslint-disable react/prop-types */


import ContactElement from "./ContactElement";

const ContactsToAdd = ({contactsList,membersToAdd,setmembersToAdd}) => {


  return (
    <div className="px-5 pt-3 w-full flex flex-col text-start max-h-full overflow-hidden ">
      <h3 className="text-[#112377] text-xl font-lato font-bold ">
        Contact existant dans l’entreprise
      </h3>
      <div className="py-2 pr-2 overflow-y-scroll flex flex-col gap-2 w-full ">
        {(contactsList,length==0) ?
          contactsList.map((freind) => {
            return (
           
            <ContactElement key={freind._id} name={freind?.username || "name"}  email={freind?.email || "email"} isOnline={freind?.isOnline || false} id={freind._id} setmembersToAdd={setmembersToAdd} membersToAdd={membersToAdd}/>
          )}) : <p>Pas de contacts</p> }
      </div>
    </div>
  );
};

export default ContactsToAdd;
