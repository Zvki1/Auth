/* eslint-disable no-unused-vars */
import ConnectedElement from "./ConnectedElement"
import { useState,useEffect } from "react"
import axios from "axios"
//  i want an array of different maghrebien names 
//  i want to map over the array and for each name i want to render the connected element
const names = [
  "Karim",
  "Mohamed",
  "Ali",
  "Hassan",
  "Youssef",
  "Khalid",
  "Omar",
  "Ahmed",
  "Ibrahim",
  "Abdellah",
  //names that dont begin with a 
  "Yassine",
  "Nabil",
  "Younes",
  "Noureddine",
  "Younes",
  "zakaria",
  // female names
  "Fatima",
  "Amina",
  "Khadija",
  "Zineb",

]

 
 const ConnectedList = () => {
  const [freinds,setFreinds] = useState([false])
  const fetchFreinds = async () => {
   
        // Envoyer une requête GET vers l'endpoint /profile pour récupérer le profil de l'utilisateur
        const token = localStorage.getItem('token');
         axios
         .get('http://localhost:8000/messages', {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then((res) => {
            setFreinds(res.data.freinds)  
        })
        .catch((error) => {
            console.error('Error fetching user profile:', error);
        });

};
useEffect(() => {
  fetchFreinds();
}, []); 

   return (
    <div className="w-full px-5 pt-5 pb-3 flex flex-row items-center gap-3 overflow-x-auto">
      {freinds.length === 0 && <p className="text-gray-500">No freinds connected</p>}
      
      {freinds.length > 0 
      && freinds[0] &&
      freinds.map((freind,index) => (
          <ConnectedElement key={index} name={freind.username} />
        ))
        }
      

    </div>
   )
 }
 
 export default ConnectedList