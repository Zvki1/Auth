import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../components/Auth/Header";
import HeroText from "../components/Auth/HeroText";
import DesktopHeading from "../components/Auth/DesktopHeading";
import Cta from "../components/Auth/Cta";
import Email from "../assets/SignUp/Email.svg";
import { User, Hash } from "lucide-react";
import { SquareAsterisk } from "lucide-react";

const SignUp = () => {
  // const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [matricule, setMatricule] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};

    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid email format";
    }

    if (!username.trim()) {
      errors.username = "Username is required";
    } else if (username.length < 6) {
      errors.username = "username must be at least 6 characters long";
    }
    if (!matricule.trim()) {
      errors.matricule = "Matricule is required";
    } else if (matricule.length < 6) {
      errors.matricule = "Matricule est de 6 caracterers minimum";
    }

    if (!password.trim()) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }
    // else if the password containt numbers
    else if (!/\d/.test(password)) {
      errors.password = "Password must contain at least one number";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0; // Returns true if there are no errors
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios.get("http://localhost:8000/register").then((res) => {
      console.log(res.data);
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      axios
        .post("http://localhost:8000/register", {
          email,
          username,
          password,
          matricule,
        })
        .then(() => {
          alert("Registration Successful");
          setEmail("");
          setUsername("");
          setPassword("");
          navigate("/login");
          // need to fix it  redirect to  messages page and  set the local storage
        })
        .catch((error) => {
          if (error.response && error.response.status === 400) {
            console.log(
              "Email is already in use. Please use a different email."
            );
            errors.email = "Email is already in use.";
            setErrors(errors);
          } else if (error.response && error.response.status === 401) {
            console.log(
              "Username is already in use. Please use a different username."
            );
            errors.username = "Username is already in use.";
            setErrors(errors);
          } else if (error.response && error.response.status === 402) {
            console.log("Matricule non existant");
            errors.matricule = "Matricule non existant";
            setErrors(errors);
          } else {
            console.log(
              "Unable to register user. Please try again later.",
              error
            );
          }
        });
    }
  };
  return (
    <>
      <div className="flex flex-row lg:items-center">
        <DesktopHeading />
        <div className="w-full lg:w-3/5 h-full flex flex-col items-start lg:justify-center lg:items-center px-5 pt-16 lg:rounded-lg lg:shadow-[0px_4px_8px_-0px_rgba(94,93,93,0.15)] lg:mx-20 lg:py-[24px] lg:px-12 lg:border-[2px]">
          <Header />
          <HeroText
            hero="Sign up"
            paragraph="Create a new account to "
            p2="collaborate with your teammates."
          />

          <form
            className="w-full flex flex-col pt-16 lg:pt-8 gap-6"
            onSubmit={handleSubmit}
          >
            {/* email */}
            {errors.email && (
              <p className="text-red-500 pt-1 -mb-[17px]">{errors.email}</p>
            )}
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <img
                  src={Email}
                  alt="emailicon"
                  className="w-4 h-4 text-gray-500 "
                />
              </div>
              <input
                type="text"
                id="email-address-icon"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-lg font-medium rounded-lg  block w-full ps-10 p-4     "
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            {/* username */}
            {errors.username && (
              <p className="text-red-500 pt-1 -mb-[17px]">{errors.username}</p>
            )}
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <User size={20} strokeWidth={3} color="#6b7280" />
              </div>
              <input
                type="text"
                id="email-address-icon"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-lg font-medium rounded-lg  block w-full ps-10 p-4     "
                placeholder="Full name"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            {/* matricule */}
            {errors.matricule && (
              <p className="text-red-500 pt-1 -mb-[17px]">{errors.matricule}</p>
            )}
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <Hash size={20} strokeWidth={3} color="#6b7280" />
              </div>
              <input
                type="text"
                id="matricule"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-lg font-medium rounded-lg  block w-full ps-10 p-4     "
                placeholder="matricule algerie telecom"
                value={matricule}
                onChange={(e) => {
                  setMatricule(e.target.value);
                }}
              />
            </div>
            {/* password */}
            {errors.password && (
              <p className="text-red-500 pt-1 -mb-[17px]">{errors.password}</p>
            )}
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <SquareAsterisk size={20} strokeWidth={2} color="#6b7280" />
              </div>
              <input
                type="password"
                id="email-address-icon"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-lg font-medium rounded-lg  block w-full ps-10 p-4     "
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            {/* button */}
            <button
              type="submit"
              className="text-white bg-[#112377] hover:bg-blue-800   rounded-lg text-2xl font-semibold  py-3  "
            >
              Sign Up
            </button>
          </form>
          <Cta paragraph="Already have an account?" cta="Log In" />
        </div>
      </div>
    </>
  );
};

export default SignUp;
