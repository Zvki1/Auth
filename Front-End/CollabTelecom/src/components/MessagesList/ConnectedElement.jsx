import Avatar from "react-string-avatar";

const ConnectedElement = () => {
  return (
    <div className="inline">
      <div className="relative inline">
      
        <Avatar
          string="Karim mostafa"
          autoColor={true} 
          width={54}
          cornerRadius={5}
        />

        <span className="absolute bottom-0 left-11 transform translate-y-1/4 w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
      </div>
        <p className="font-lato text-[#2B363B] text-xl font-semibold">Karim</p>

    </div>
  );
};

export default ConnectedElement;
