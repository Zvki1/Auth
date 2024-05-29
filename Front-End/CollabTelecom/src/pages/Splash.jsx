import { Link } from "react-router-dom";
import "../App.css";
import Logo from "../assets/logo.svg";
const Splash = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-12 w-screen h-[100dvh] ">
        <div className="flex flex-col items-center justify-center gap-8">
          <img src={Logo} alt="" />
          <h1 className=" text-5xl font-bold text-[#112377] Lato">
            CollabTelecom
          </h1>
        </div>
        <Link to="/signup">
          <button
            type="button"
            className="text-white bg-[#112377] hover:bg-blue-800  font-medium rounded-xl text-3xl px-5 py-2.5 me-2 mb-2 mt-10 "
          >
            Get started
          </button>
        </Link>
      </div>
    </>
  );
};

export default Splash;
