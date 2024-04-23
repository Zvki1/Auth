import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="w-full py-6 pl-3 flex items-center justify-between">
        <button onClick={()=>{history.back()}}>
        <ChevronLeft size={32} />
        </button>
      <h3 className="text-black font-Inter text-3xl font-semibold mx-auto ">Membres du groupe</h3>
    </div>
  );
};

export default Header;
