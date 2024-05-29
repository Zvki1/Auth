import { useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EditGroupe = () => {
  const [newname, setNewname] = useState("");
  const [isdisabled, setIsdisabled] = useState(true);
  const navigate = useNavigate();
  const handleChangeUsername = (e) => {
    const value = e.target.value;
    if (!value.trim()) {
      setIsdisabled(true);
    } else {
      setIsdisabled(false);
    }
    setNewname(value);
  };
  const handleClick = () => {
    console.log(newname);
    const searchParams = new URLSearchParams(window.location.search);
    const groupName = searchParams.get("groupName");
    axios
      .patch(
        "https://auth-ivbz.onrender.com/publicGroup/editGroup",
        {
          groupName,
          newName: newname,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((response) => {
        console.log(response.data);
        alert("Group updated successfully");
        navigate("/publicGroupsList");
      })
      .catch((error) => {
        console.log(error);

        if (error.response.data.error === "Group name already taken") {
          alert("Nom de groupe déjà pris");
        }
      });
    setNewname("");
  };

  return (
    <div className="h-screen w-screen ">
      <Header title="Edit Group" />

      <div className="w-full flex gap-4 px-4 flex-col justify-center ">
        <h1 className="text-xl font-semibold text-[#112377]">
          Modifier le nom du groupe
        </h1>
        {/* {usernameError <p className="text-red-500 pt-1 -mb-[17px]">{usernameError}</p>} */}
        <input
          type="search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-xl font-medium rounded-lg  block w-full ps-4 p-4     "
          placeholder="nom du groupe"
          value={newname}
          onChange={handleChangeUsername}
        />
        <button
          disabled={isdisabled}
          onClick={handleClick}
          className={`text-white ${
            !isdisabled ? "bg-[#112377] hover:bg-blue-800" : " bg-gray-400"
          }    rounded-lg text-2xl font-semibold  py-3`}
        >
          Modifier
        </button>
      </div>
    </div>
  );
};

export default EditGroupe;
