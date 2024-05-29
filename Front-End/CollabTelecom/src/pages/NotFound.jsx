import { Link } from "react-router-dom";

Link;
const NotFound = () => {
  return (
    <div className="flex flex-col h-[100dvh] justify-center items-center bg-gray-100">
      <div className="flex flex-col items-center">
        <h1 className="text-[120px] font-extrabold text-gray-700">404</h1>
        <p className="text-2xl font-medium text-gray-600 mb-6">
          Page Not Found
        </p>
        <Link
          to="/"
          className="text-white bg-[#112377] hover:bg-blue-800  font-medium rounded-xl text-3xl px-5 py-2.5"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
