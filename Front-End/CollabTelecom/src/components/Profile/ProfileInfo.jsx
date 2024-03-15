

const ProfileInfo =({ icon, text }) => {
    return (
        <>
           <button className=" w-[450px] bg-gray-200 rounded-lg pl-[18px] py-[14px]   inline-flex items-center">
           <span className="icon mr-[6px]">{icon}</span>
           <span className="text font-inter text-[19px]">{text}</span>
            </button> 
        </>
    )
}
export default ProfileInfo;