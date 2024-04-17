import { useState } from "react";
import Header from "../components/EditProfile/Header"
import Avatar from 'react-string-avatar';
import axios from "axios";




const EditProfile =()=>{
    const[username,setUsername]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

    const handleChangeUsername =(e)=>{
      const value = e.target.value;
      setUsername(value); 
      console.log(value);
    }

    const handleChangeemail =(e)=>{
      const value = e.target.value;
      setEmail(value); 
      console.log(value);
    }

    const handlePassword =(e)=>{
      const value = e.target.value;
      setPassword(value); 
      console.log(value);
    }
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        console.log("Data for update : ");
        const token = localStorage.getItem("token");
        const user = {
          username: username,
          email: email,
          password: password
        };
        const response = await axios.patch("http://localhost:8000/profile/update", user, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log(response.data);
        // const response = await axios.put(`https://yourendpoint/${user.id}`, user);
      } catch (error) {
        console.log(error);
      }
    }

    
    return(
        <>
        <div className="w-full bg-gray-100 h-screen flex flex-col items-center space-y-6">
            <Header/>
            <div className=' bg-white p-2 rounded-3xl'>
             <Avatar  string="kamel" autoColor={true} width={152} cornerRadius={20} style={{color: "red"}} />
            </div>
        {/*button to modify the pic*/ }
        <button className="text-blue-800 font-inter font-bold text-xl md:text-2xl">
            Modifier la photo
        </button>
            {/*form*/}
        <div className="w-full px-4">
        <form className=" flex flex-col gap-6" onSubmit={handleSubmit}>
        {/* username */}
        {/*errors.email && <p className="text-red-500 pt-1 -mb-[17px]">{errors.email}</p>*/}
        
          <input
            type="text"
            id=""
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xl font-medium rounded-lg  block w-full ps-4 p-4     "
            placeholder="Username"
            value={username}
            onChange={handleChangeUsername}
          />
        
        {/* email */}
        {/*errors.username && <p className="text-red-500 pt-1 -mb-[17px]">{errors.username}</p>*/}
        <div className="relative">
          <input
            type="text"
            id=""
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xl font-medium rounded-lg  block w-full ps-4 p-4     "
            placeholder="email"
            value={email}
            onChange={handleChangeemail}
            
          />
        </div>
        {/* password */}
        {/*errors.password && <p className="text-red-500 pt-1 -mb-[17px]">{errors.password}</p>*/}
        <div className="relative">
          <input
            type="text"
            id=""
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xl font-medium rounded-lg  block w-full ps-4 p-4     "
            placeholder="Password"
            value={password}
            onChange={handlePassword}
         
          />
        </div>
        {/* button */}
        <button type="submit" className="text-white bg-[#112377] hover:bg-blue-800   rounded-lg text-2xl font-semibold  py-3  ">Enregistrer</button>
      </form></div>
      </div>
        
        </>
    )
}
export default EditProfile;