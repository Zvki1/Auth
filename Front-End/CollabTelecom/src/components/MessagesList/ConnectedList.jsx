/* eslint-disable no-unused-vars */
import ConnectedElement from "./ConnectedElement"
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
   return (
     <div className="w-full px-5 pt-5 pb-3 flex flex-row items-center gap-3 overflow-x-auto">
        {names.map((name,index) => (
          <ConnectedElement key={index} name={name} />
        ))}
      
       
    </div>
   )
 }
 
 export default ConnectedList