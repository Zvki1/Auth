import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="w-full py-6 pl-3">
      <Link to="/MessagesList">
        <ChevronLeft size={32} />
      </Link>
    </div>
  );
};

export default Header;
