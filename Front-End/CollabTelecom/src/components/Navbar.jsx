import { NavLink } from "react-router-dom";

// importing icons
import { Home, MessageCircle, Bell, CircleUserRound } from "lucide-react";

/* eslint-disable no-unused-vars */
const Navbar = () => {
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
      href: "/Notifications/Others",
      icon: Bell,
    },
    {
      title: "Profile",
      href: "/Profile",
      icon: CircleUserRound,
    },
  ];

  return (
    <div className="w-full bg-[#EDF2F7]  absolute bottom-0 flex  items-center justify-around  ">
      {NavElements.map((element) => (
        <NavLink
          key={element.title}
          to={element.href}
          className={({isActive}) =>
            "pt-6 pb-[22px] border-b-4 px-4 " + (isActive ? " text-[#112377]  border-b-[#112377] " : "text-[#4A5568]")
          }
        >
          <element.icon />
        </NavLink>
      ))}
    </div>
  );
};

export default Navbar;
