/* eslint-disable react/prop-types */


import axios from "axios";
import { useState } from "react";

import EmployeeElement from "./EmployeeElement";

const SearchEmployee = ({setEmployelist,employelist,employeName,setEmployeName}) => {
    const [searchResults, setSearchResults] = useState([]);
  

    const handleSearch = async (term) => {
        try { 
            const token = localStorage.getItem('token');
            const response = await axios.get(
                `http://localhost:8000/searchUsers?searchTerm=${term}`
                ,{headers: { Authorization: `Bearer ${token}` }}
                );
            setSearchResults(response.data.users);
           
        } catch (error) {
            console.error('Error searching for friends:', error);
        }
    }; 
  const handleChange = (e) => {
    const value = e.target.value;
    setEmployeName(value); 
    console.log(value);
    handleSearch(value);
};

  return (
      
<div className="w-full ">   
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-[#167D8E] dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input
         value={employeName}
          onChange={handleChange} type="search" id="default-search" className="block placeholder-[#167D8E] w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="chercher vos employes"  />
    </div>
    <div className="pt-5 flex flex-col items-center">
            <h3 className="text-[#112377] font-semibold md:text-xl font-Inter text-start w-full">Contact existant dans l’entreprise</h3>
            {/* users container */}
            <div  className="pt-3 flex flex-col w-full gap-3 max-h-80 overflow-y-auto">
                {/*  user elements */}
                {searchResults.map((user)=> (
                   <EmployeeElement key={user._id} name={user?.username || "name"}  email={user?.email || "email"} isOnline={user?.isOnline || false} id={user._id} setEmployelist={setEmployelist} employelist={employelist}  />
                ))}
            </div> 
            {/* <img className="pt-8" src={illustration} alt="search freinds"  width={180}/> */}
        </div>
</div>
  )
}

export default SearchEmployee