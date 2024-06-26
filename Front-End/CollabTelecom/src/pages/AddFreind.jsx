import { useState } from "react";
import axios from "axios";
import Header from "../components/AddFreind/Header";
import Avatar from "react-avatar";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AddFreind = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const [isAdding, setIsAdding] = useState(false);
  const [timerId, setTimerId] = useState(null);

  const handleAddFriend = (userId) => {
    setIsAdding(true);
    setTimerId(
      setTimeout(async () => {
        try {
          console.log("Adding friend:", userId);
          const token = localStorage.getItem("token");
          await axios.patch(
            `https://auth-ivbz.onrender.com/addFreind`,
            { userId },
            { headers: { Authorization: `Bearer ${token}` } }
          );
          toast.success("Ami ajouté avec succès", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Slide,
          });
          // when the toast is done, we will reload the page to show the changes
          setSearchResults(searchResults.filter((user) => user._id !== userId));
        } catch (error) {
          console.error("Error adding friend:", error);
          if (error.response.status === 403) {
            localStorage.removeItem("token");
            window.location.reload();
          }
        } finally {
          setIsAdding(false);
        }
      }, 3000) // Définir un délai de 3 secondes (3000 millisecondes)
    );
  };

  const handleCancelAdd = () => {
    clearTimeout(timerId); // Annuler le timer si l'utilisateur annule l'ajout dans les 3 secondes
    setIsAdding(false);
    console.log("Addition cancelled");
  };

  const handleSearch = async (term) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `https://auth-ivbz.onrender.com/addFreind?searchTerm=${term}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setSearchResults(response.data.users);
    } catch (error) {
      console.error("Error searching for friends:", error);
    }
  };
  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    handleSearch(value);
  };

  return (
    <div className=" px-5">
      <ToastContainer />
      <Header />
      <div>
        <h1 className="text-black font-Inter text-3xl text-center font-semibold">
          Ajouter des amis
        </h1>
        <p className="pt-10 text-[#959595] text-xl font-Inter font-[600]">
          Qui aimerais-tu ajouter comme ami?
        </p>

        {/* search input */}

        <form className="max-w-md mx-auto pt-2">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              value={searchTerm}
              onChange={handleChange}
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  "
              placeholder="Entrez l’adresse email ou nom d’utilisateur"
            />
          </div>
        </form>

        {/* search result container */}
        <div className="pt-5 flex flex-col items-center">
          <h3 className="text-[#112377] font-semibold text-xl font-Inter text-start w-full">
            Contact existant dans l’entreprise
          </h3>
          {/* users container */}
          <div className="pt-3 flex flex-col w-full gap-3">
            {/*  user elements */}
            {searchResults.map((user) => (
              <div
                key={user._id}
                className="flex flex-row justify-between w-full items-center"
              >
                <div className="flex flex-row items-center gap-3">
                  <Avatar
                    name={user.username}
                    autoColor={true}
                    size={62}
                    round={5}
                  />
                  <div>
                    <h3 className="text-[#2B363B] font-semibold text-xl font-Inter">
                      {user.username}
                    </h3>
                    <p className="text-[#2B363B] font-[400] text-lg font-Inter">
                      {user.email}
                    </p>
                  </div>
                </div>
                {!isAdding && (
                  <button
                    onClick={() => handleAddFriend(user._id)}
                    type="button"
                    className="text-white bg-[#112377] hover:bg-blue-800 focus:ring-4  font-medium rounded-lg text-sm px-2 py-4  focus:outline-none "
                  >
                    Ajouter
                  </button>
                )}
                {isAdding && (
                  <button
                    onClick={handleCancelAdd}
                    type="button"
                    className="text-white bg-gray-700 hover:bg-blue-800 focus:ring-4  font-medium rounded-lg text-sm px-2 py-4  focus:outline-none "
                  >
                    Anuller
                  </button>
                )}
              </div>
            ))}
          </div>
          {/* <img className="pt-8" src={illustration} alt="search freinds"  width={180}/> */}
        </div>
      </div>
    </div>
  );
};

export default AddFreind;
