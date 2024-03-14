import { Link } from "react-router-dom";
import { ChevronLeft,Phone,Video,EllipsisVertical    } from "lucide-react";
import Avatar from "react-string-avatar";
const Header = () => {
  return (
    <header className="py-4 px-5 flex justify-between items-center border-b-2">
      <div className="flex flex-row items-center gap-2">
        <Link to="/MessagesList">
          <ChevronLeft />
        </Link>

        <div className="relative inline">
          <Avatar
            string="Reguieg Zakaria"
            autoColor={true}
            width={36}
            cornerRadius={5}
          />

          <span className="absolute bottom-0 left-7 transform translate-y-1/4 w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
        </div>
        <p className="font-lato text-[#2B363B] text-xl font-semibold">Karim</p>
      </div>

      <div className="flex items-center gap-3 justify-center">
      <Phone color="#1D1C1DB2" />
      <Video  color="#1D1C1DB2"/>
      <EllipsisVertical color="#1D1C1DB2" />
      </div>
    </header>
  );
};

export default Header;
