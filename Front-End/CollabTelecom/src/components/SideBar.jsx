import { Home, MessageCircle, Bell, CircleUserRound, Settings, DoorOpen } from "lucide-react";
import Logo from "../assets/sidebar-logo.svg";
import { Link, NavLink } from "react-router-dom";
import Avatar from "react-string-avatar";
const SideBar = () => {
  const NavElements = [
    {
      title: "Home",
      href: "/publicGroupsList",
      icon: Home,
    },
    {
      title: "Messages",
      href: "/MessagesList",
      icon: MessageCircle,
    },
    {
      title: "Notifications",
      href: "/Notifications",
      Children: [
        {
          title: "Others",
          href: "/Others",
        },
        {
          title: "Alertes",
          href: "/Alertes",
        },
        {
          title: "Tickets",
          href: "/Tickets",
        },
      ],
      icon: Bell,
    },
  ];
  console.log();
  return (
    <div className="w-[100px] py-4 bg-[#F3F3F3] flex flex-col items-center justify-between">
      <div>
        <div className="flex flex-col items-center gap-5">
          <img src={Logo} alt="" />
          <Link to="/Profile">
            <Avatar
              string={
                JSON.parse(localStorage.getItem("user")).username || "Profile"
              }
              autoColor={true}
              width={48}
              cornerRadius={5}
            />
          </Link>
        </div>
        <hr className="w-full h-1 bg-[#BFBFBF] rounded-3xl mt-4" />
        <div className="w-full flex flex-col pt-4 gap-2">
          {NavElements.map((element) => (
            <NavLink
              key={element.title}
              to={element.href}
              className={({ isActive }) =>
                "p-5 rounded-lg text-[#112377]" +
                (isActive ? "  bg-white  " : " ")
              }
            >
              <element.icon size={28}/>
            </NavLink>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-6 pb-4">
        <button>
            <Settings size={28} color="#112377"/>
        </button>
        <button>
            <DoorOpen size={28} color="#D30000"/>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
