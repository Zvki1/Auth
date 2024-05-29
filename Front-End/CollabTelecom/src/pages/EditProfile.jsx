import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Header from "../components/EditProfile/Header";
import Avatar from "react-avatar";
import axios from "axios";

const EditProfile = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get("name");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeUsername = (e) => {
    const value = e.target.value;
    setUsername(value);
    console.log(value);
  };

  const handleChangeemail = (e) => {
    const value = e.target.value;
    setEmail(value);
    console.log(value);
  };

  const handlePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
    console.log(value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim() && !email.trim() && !password.trim()) {
      setUsernameError("All fields are required");
      return;
    }
    if (email.trim() && !/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Invalid email format");
      return;
    }
    if (username.length < 6) {
      setUsernameError("Username must be at least 6 characters long");
      return;
    }
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      return;
    } else if (!/\d/.test(password)) {
      setPasswordError("Password must contain at least one number");
      return;
    }
    try {
      console.log("Data for update : ");
      const token = localStorage.getItem("token");
      const user = {
        username: username,
        email: email,
        password: password,
      };
      const response = await axios.patch(
        "http://localhost:8000/profile/update",
        user,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      if (response.data.message) {
        alert(response.data.message);
        localStorage.setItem("user", JSON.stringify(response.data.user));
      }
    } catch (error) {
      console.log(error.response.data.message);
      setUsernameError(error.response.data.message);
    }
  };
  useEffect(() => {
    console.log(name);
  }, [name]);

  return (
    <>
      <div className="w-full bg-gray-100 h-screen flex flex-col items-center space-y-6 ">
        <Header />
        <div className=" bg-white p-2 rounded-3xl">
          <Avatar
            name={name}
            autoColor={true}
            size={152}
            round={20}
            style={{ color: "red" }}
          />
        </div>
        {/*button to modify the pic*/}
        <button className="text-blue-800 font-inter font-bold text-xl md:text-2xl">
          Modifier la photo
        </button>
        {/*form*/}
        <div className="w-full px-4 pb-4">
          <form className=" flex flex-col gap-6" onSubmit={handleSubmit}>
            {/* username */}
            {usernameError && (
              <p className="text-red-500 pt-1 -mb-[17px]">{usernameError}</p>
            )}

            <input
              type="text"
              id=""
              className="bg-gray-50 border border-gray-300 text-gray-900 text-xl font-medium rounded-lg  block w-full ps-4 p-4     "
              placeholder="Username"
              value={username}
              onChange={handleChangeUsername}
            />

            {/* email */}
            {emailError && (
              <p className="text-red-500 pt-1 -mb-[17px]">{emailError}</p>
            )}
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
            {password && (
              <p className="text-red-500 pt-1 -mb-[17px]">{password}</p>
            )}
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
            <button
              type="submit"
              className="text-white bg-[#112377] hover:bg-blue-800   rounded-lg text-2xl font-semibold  py-3  "
            >
              Enregistrer
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default EditProfile;
