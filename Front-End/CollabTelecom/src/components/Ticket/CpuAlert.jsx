/* eslint-disable react/prop-types */
import axios from "axios";
import { History, File, Beaker } from "lucide-react";
import { useState } from "react";
const CpuAlert = ({ remarques }) => {
  const EnCoursButton = () => (
    <div className="flex items-center bg-orange-500 text-white rounded-full px-2 py-0.5">
      <svg
        className="w-4 h-4 mr-1"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M16.24 16.24l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M16.24 7.76l1.41-1.41"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-sm font-medium">en cours</span>
    </div>
  );

  const FinaliseButton = () => (
    <div className="flex items-center bg-green-500 text-white rounded-full px-2 py-0.5">
      <svg
        className="w-4 h-4 mr-1"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 13l4 4L19 7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-sm font-medium">finalisé</span>
    </div>
  );

  const RemarkItem = ({ remarque }) => {
    console.log("remarque from remarkItem", remarque);
    return (
      <div className="flex justify-between items-center py-3 px-4 border-b border-[#112377]">
        <div className="flex items-center space-x-2">
          <File className="w-5 h-5" />
          <span className="text-gray-700">Remarque</span>
          <span className="text-gray-500">employe name</span>
        </div>
        {status === "finalise" ? <FinaliseButton /> : <EnCoursButton />}
        <span className="text-gray-500">9:56</span>
      </div>
    );
  };
  // --------------------------------------
  // this is remarque li ttb3et frequest
  const [remarque, setRemarque] = useState("");
  const [file, setFile] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("remarque", remarque);
    formData.append("file", file);
    formData.append("ticketId", window.location.search.split("=")[1]);
    console.log("remarque", remarque);
    console.log("file", file);
    axios
      .post("http://localhost:8000/addRemarque", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setFile("");
    setRemarque("");
  };
  return (
    <div className=" rounded-lg  text-white mt-5 lg:mt-10">
      <div className="flex justify-between items-center  p-4 bg-blue-900">
        <div className="text-lg font-semibold">Manager username</div>
        <div className="flex items-center space-x-2">
          <History className="w-5 h-5" />
          <span>12 Remarques</span>
        </div>
      </div>
      <div className="bg-white  text-gray-700">
        {remarques.map((remarque) => (
          <RemarkItem key={remarque._id} remarque={remarque} />
        ))}
      </div>
      <form
        onSubmit={handleSubmit}
        className="mt-4 text-center text-gray-300 cursor-pointer "
      >
        <input
          type="text"
          placeholder="entrez votre remarque"
          value={remarque}
          onChange={(e) => setRemarque(e.target.value)}
        />
        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <div className="px-2 pt-6">
          <button
            type="submit"
            className="text-white bg-[#112377]  hover:bg-blue-800  w-full  rounded-sm text-2xl font-semibold  py-3  "
          >
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
};
// --------------------------------------

export default CpuAlert;
