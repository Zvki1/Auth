/* eslint-disable react/prop-types */
import axios from "axios";
import { ChevronLeft } from "lucide-react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ isButtonDisabled, nameOfGroup, membersToAdd }) => {
  const navigate = useNavigate();
  useEffect(() => {}, [isButtonDisabled]);
  const handleClick = () => {
    axios
      .post(
        "https://auth-ivbz.onrender.com/publicGroup",
        { name: nameOfGroup, members: membersToAdd.map((member) => member.id) },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        window.alert("Groupe créé avec succès");
        navigate("/publicGroupsList");
      })
      .catch((error) => {
        console.error("Error creating group:", error);
      });
  };
  return (
    <div className="w-full flex items-center justify-between px-5 py-4 border-b-2 ">
      <div className="flex items-center">
        <Link to="/publicGroupsList">
          <ChevronLeft size={32} />
        </Link>
        <h2 className="font-Inter text-[#2B363B] text-2xl font-semibold">
          Nouveau Groupe
        </h2>
      </div>
      <button
        disabled={isButtonDisabled}
        onClick={handleClick}
        className={`font-lato text-xl font-[600] ${
          isButtonDisabled ? "text-[#2B363B]" : " text-blue-700"
        }`}
      >
        Créer
      </button>
    </div>
  );
};

export default Header;
