/* eslint-disable react/prop-types */
import axios from "axios";
import { History, File } from "lucide-react";
import { useState } from "react";
const CpuAlert = ({ remarques,state }) => {
  
  const RemarkItem = ({ remarque }) => {
    console.log("remarque from remarkItem", remarque);
    // console.log("remarque", remarque.content);
    return (
      <div className="flex justify-between items-center py-3 px-4 border-b border-[#112377]">
        <div className="flex items-center space-x-2">
          {remarque?.path && (
            <button
              onClick={() =>
                window.open(`http://localhost:8000/files/${remarque.path}`)
              }
            >
              <File className="w-5 h-5" />
            </button>
          )}
          <span className="text-gray-700">
            {remarque?.content || "remarque"}
          </span>
          <span className="text-gray-500">
            {remarque?.sender?.username || "employe username"}
          </span>
        </div>

        <span className="text-gray-500">
          {remarque?.date.substring(11, 16) || "time"}
        </span>
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
    if (remarque || file) {
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
    }
    setFile("");
    setRemarque("");
  };
  return (
    <div className=" rounded-lg  text-white mt-5 lg:mt-10">
      <div className="flex justify-between items-center  p-4 bg-blue-900">
        <div className="text-lg font-semibold">Remarques</div>
        <div className="flex items-center space-x-2">
          <History className="w-5 h-5" />
          <span>{remarques.length || "nb"} Remarque(s)</span>
        </div>
      </div>
      <div className="bg-white  text-gray-700">
        {remarques.map((remarque) => (
          <RemarkItem key={remarque._id} remarque={remarque} />
        ))}
      </div>
      { (state?.status==="open" )&&
        <form
          onSubmit={handleSubmit}
          className="mt-4 text-center text-gray-300 cursor-pointer "
        >
          <div className=" flex w-full  ">
            <div className="w-1/2 flex flex-col items-start pl-4 ">
              <label className="mb-1  text-sm font-medium text-[#112377] ">
                Ajoute votre remarque
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2 w-3/4 "
                type="text"
                placeholder="entrez votre remarque"
                value={remarque}
                onChange={(e) => setRemarque(e.target.value)}
              />
            </div>
            <div className="w-1/2 flex flex-col items-start">
              <label
                htmlFor="example1"
                className="mb-1  text-sm font-medium text-[#112377] "
              >
                Ajoute rapport
              </label>
              <input
                id="example1"
                type="file"
                accept="application/pdf"
                onChange={(e) => setFile(e.target.files[0])}
                className=" w-full text-sm file:mr-4 file:rounded-md file:border-0 file:bg-[#112377] file:cursor-pointer file:py-2.5 file:px-4 file:text-sm file:font-semibold file:text-white hover:file:bg-primary-700 focus:outline-none disabled:pointer-events-none disabled:opacity-60"
              />
            </div>
          </div>
          {/* <input
          type="file"
          accept="application/pdf"
          onChange={(e) => setFile(e.target.files[0])}
        /> */}
          <div className="px-2 pt-6">
            <button
              type="submit"
              className="text-white bg-[#112377]  hover:bg-blue-800  w-full  rounded-sm text-2xl font-semibold  py-3  "
            >
              Envoyer
            </button>
          </div>
        </form>
      }
    </div>
  );
};
// --------------------------------------

export default CpuAlert;
