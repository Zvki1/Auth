import Header from "../components/EditProfile/Header"
import Avatar from 'react-string-avatar';
const EditProfile =()=>{
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
        <form className=" flex flex-col gap-6 ">
        {/* email */}
        {/*errors.email && <p className="text-red-500 pt-1 -mb-[17px]">{errors.email}</p>*/}
        
          <input
            type="text"
            id="email-address-icon"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xl font-medium rounded-lg  block w-full ps-4 p-4     "
            placeholder="Email"
            value="Username"
            
          />
        
        {/* username */}
        {/*errors.username && <p className="text-red-500 pt-1 -mb-[17px]">{errors.username}</p>*/}
        <div className="relative">
          <input
            type="text"
            id="email-address-icon"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xl font-medium rounded-lg  block w-full ps-4 p-4     "
            placeholder="password"
            value="Password"
            
          />
        </div>
        {/* password */}
        {/*errors.password && <p className="text-red-500 pt-1 -mb-[17px]">{errors.password}</p>*/}
        <div className="relative">
          <input
            type="text"
            id="email-address-icon"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xl font-medium rounded-lg  block w-full ps-4 p-4     "
            placeholder="Password"
            value="Confirm Password"
         
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