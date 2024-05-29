import { useEffect, useState } from "react";
import ContactsToAdd from "../components/NewGroup/ContactsToAdd";
import Header from "../components/NewGroup/Header";
import NameInput from "../components/NewGroup/NameInput";
import NewMembersList from "../components/NewGroup/NewMembersList";
import SearchFreind from "../components/NewGroup/SearchFreind";
import axios from "axios";

const NewGroup = () => {
  const [searchTerm, setSearchTerm] = useState(""); // Utilisez cet état pour stocker le terme de recherche de l'utilisateur
  // array tee les contacts li ykhrjou f recherche
  const [contactsList, setContactsList] = useState([]); // Remplacez cette liste vide par la liste des contacts de l'utilisateur
  // array tee les membres li ghadi n7tou f groupe
  const [membersToAdd, setmembersToAdd] = useState([]);
  const [nameOfGroup, setNameOfGroup] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  // use effect tee search contacts
  useEffect(() => {
    axios
      .get(
        `https://auth-ivbz.onrender.com/searchUsers?searchTerm=${searchTerm}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => {
        setContactsList(response.data.users);
      })
      .catch((error) => {
        console.error("Error searching for friends:", error);
      });
  }, [searchTerm]);
  useEffect(() => {
    if (nameOfGroup && membersToAdd.length > 0) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [membersToAdd, nameOfGroup]);
  return (
    <div className="flex flex-col h-screen">
      <Header
        isButtonDisabled={isButtonDisabled}
        nameOfGroup={nameOfGroup}
        membersToAdd={membersToAdd}
      />
      <NameInput nameOfGroup={nameOfGroup} setNameOfGroup={setNameOfGroup} />
      <NewMembersList
        membersToAdd={membersToAdd}
        setmembersToAdd={setmembersToAdd}
      />
      <SearchFreind setSearchTerm={setSearchTerm} />
      <ContactsToAdd
        contactsList={contactsList}
        membersToAdd={membersToAdd}
        setmembersToAdd={setmembersToAdd}
      />
    </div>
  );
};

export default NewGroup;
