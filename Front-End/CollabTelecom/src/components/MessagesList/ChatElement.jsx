import { Link } from "react-router-dom";
import Avatar from "react-string-avatar";
const ChatElement = () => {
  return (
    <Link to="/PrivateChat/zaki" className="flex flex-row gap-4">
      <div className="flex flex-row gap-4">
        {/* icon div */}
        <div className="relative inline">
          <Avatar
            string="Zaki Reg"
            autoColor={true}
            width={54}
            cornerRadius={5}
          />
          <span className="absolute bottom-0 left-11 transform translate-y-1/4 w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
        </div>
        {/* second div */}
        <div className="flex flex-row justify-between grow">
          {/* username + text div */}
          <div>
            <h3 className="text-[#2B363B] text-2xl font-Inter font-bold">
              Zaki reguieg
            </h3>
            <p className="text-base">Hey, how are you doing?</p>
          </div>
          <p>12j</p>
        </div>
      </div>
    </Link>
  );
};

export default ChatElement;
