/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Cta from '../components/Auth/Cta'
import DesktopHeading from '../components/Auth/DesktopHeading'
import HeroText from '../components/Auth/HeroText'
import Header from '../components/Auth/Header'
import Email from "../assets/SignUp/Email.svg"
import { SquareAsterisk } from 'lucide-react'

function Login() {
    // const [users, setUsers] = useState([])
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({})
    const navigate = useNavigate();

    useEffect(() => {
        fetchUsers();
    }, [])

    const fetchUsers = () => {
        axios
        .get('http://localhost:8000/register')
        .then((res) => {
            console.log("axios is workinggg in login page", res.data)
        })
    }


    const handleLogin =  async (event) => {

        event.preventDefault();
        const errors = {};
        if (!email.trim()) {
          errors.email = "Email is required";
        
        } else if (!/\S+@\S+\.\S+/.test(email)) {
          errors.email = "Invalid email format";
        }

        if (!password.trim()) {
          errors.password = "Password is required";
        }

        setErrors(errors);
        if (Object.keys(errors).length > 0) return;
        try {
            const response = await axios
            .post('http://localhost:8000/login', { email, password })
            const token = response.data.token
            console.log('Login response', response.data);
            // alert('Login successful')
            setEmail('')
            setPassword('')
            fetchUsers();
                navigate('/MessagesList')
                window.location.reload();
                localStorage.setItem('token', token)
                                                            // am not passing the id separated from the token in the response
            
        } catch (error) {
          const errors = {};
          const errorResponse = error.response.data.error
            console.log('Login Error', errorResponse)
           
            if(errorResponse.includes('email')){
                errors.email = 'Email does not exist';
                setErrors(errors);
            }else if(errorResponse.includes('password')){
                errors.password = 'Invalid password';
                setErrors(errors);
            }
            
        }
    }


  return (
    <div className="flex flex-row lg:items-center">
    <DesktopHeading/>
     <div className="w-full lg:w-3/5 h-full flex flex-col items-start lg:justify-center lg:items-center px-5 pt-16 lg:rounded-lg lg:shadow-[0px_4px_8px_-0px_rgba(94,93,93,0.15)] lg:mx-20 lg:py-[24px] lg:px-12 lg:border-[2px]">
       <Header  />
       <HeroText
         hero="Log In"
         paragraph="Access to collaborate with "
         p2="your teammates."
       />
    
       <form className="w-full flex flex-col pt-16 lg:pt-8 gap-6" onSubmit={handleLogin}  >
         {/* email */}
         {errors.email && <p className="text-red-500 pt-1 -mb-[17px]">{errors.email}</p>}
         <div className="relative">
           <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
           <img src={Email} alt="emailicon"  className="w-4 h-4 text-gray-500 " />
           </div>
           <input
             type="text"
             id="email-address-icon"
             className="bg-gray-50 border border-gray-300 text-gray-900 text-lg font-medium rounded-lg  block w-full ps-10 p-4     "
             placeholder="Email"
             value={email}
             onChange={(e)=>{setEmail(e.target.value)}}
           />
         </div>
       
         {/* password */}
         {errors.password && <p className="text-red-500 pt-1 -mb-[17px]">{errors.password}</p>}
         <div className="relative">
           <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
           <SquareAsterisk size={20} strokeWidth={2}  color="#6b7280" />
           </div>
           <input
             type="password"
             id="email-address-icon"
             className="bg-gray-50 border border-gray-300 text-gray-900 text-lg font-medium rounded-lg  block w-full ps-10 p-4     "
             placeholder="Password"
             value={password}
             onChange={(e)=>{setPassword(e.target.value)}}
           />
         </div>
         {/* button */}
         <button type="submit" className="text-white bg-[#112377] hover:bg-blue-800   rounded-lg text-2xl font-semibold  py-3  ">Login</button>
       </form>
       <Cta paragraph="Don't have an account?" cta="Sign up"/>
     </div>
     </div> 
  )
}

export default Login