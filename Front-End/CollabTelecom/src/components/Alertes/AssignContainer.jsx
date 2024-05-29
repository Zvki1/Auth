/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import SearchEmployee from "./SearchEmployee";
import MembersToAssign from "./MembersToAssign";
import axios from "axios";
const AssignContainer = ({ setshowPopUp, alert }) => {
  const [employeName, setEmployeName] = useState("");
  const [employelist, setEmployelist] = useState([]);
  const [remarque, setRemarque] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(employeName);
    if (employelist.length === 0) {
      window.alert("vous devez choisir au moins un employé");
      return;
    }
    if (remarque === "") {
      window.alert("vous devez ajouter une remarque");
      return;
    }
    // console.log("i will send this to the back", employelist,alert,remarque);
    axios
      .post(
        "https://auth-ivbz.onrender.com/tickets",
        {
          employelist,
          alert,
          remarque,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        window.alert("ticket crée avec succés");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
    setshowPopUp(false);
  };
  useEffect(() => {
    console.log(employelist);
  }, [employelist]);
  return (
    // main modal
    <div
      id="authentication-modal"
      tabIndex="-1"
      aria-hidden="true"
      className=" bg-black/40  absolute top-0 right-0 left-0 z-50 flex justify-center items-center w-[100dvw] h-full md:inset-0  max-h-full"
    >
      <div className="relative p-3 md:p-4 w-full max-w-md max-h-full">
        {/* <!-- Modal content --> */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          {/* <!-- Modal header --> */}
          <div className="flex items-center justify-between p-4 md:p-5 pb-0 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold font-Inter text-gray-900 dark:text-white">
              Assigner la tache
            </h3>
            <button
              onClick={() => setshowPopUp(false)}
              type="button"
              className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
          {/* <!-- Modal body --> */}
          <div className="p-4 md:p-5 pb-1 pt-2 md:pt-0">
            <form>
              <div>
                <label htmlFor="remarque">Remarque</label>
                <input
                  type="text"
                  value={remarque}
                  onChange={(e) => setRemarque(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 "
                  placeholder="ajoutez vos remarque "
                  required
                />
              </div>
              <div>
                <MembersToAssign
                  employelist={employelist}
                  setEmployelist={setEmployelist}
                />
                <SearchEmployee
                  setEmployelist={setEmployelist}
                  employelist={employelist}
                  employeName={employeName}
                  setEmployeName={setEmployeName}
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full mt-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Creer le ticket
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignContainer;
