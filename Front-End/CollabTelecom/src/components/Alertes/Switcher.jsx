/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

NavLink;
const Switcher = ({ role }) => {
  const switchElements = [
    {
      title: "Others",
      href: "/Notifications/Others",
    },
    {
      title: "Tickets",
      href: "/Notifications/Tickets",
    },
    {
      title: role.includes("manager") ? "Alertes" : null,
      href: role.includes("manager") ? "/Notifications/Alertes" : null,
    },
  ];
  return (
    <div className="w-full flex flex-row items-center gap-8 border-b-1 px-5">
      {switchElements.map((element) => (
        <NavLink
          key={element.title}
          to={element.href}
          className={({ isActive }) =>
            "pt-3 pb-3    " +
            (isActive
              ? " text-[#112377] border-b-4 border-b-[#112377] font-Inter text-xl font-semibold "
              : "text-[#4A5568] border-b-4 border-b-white font-Inter text-xl font-semibold")
          }
        >
          {element.title}
        </NavLink>
      ))}
    </div>
  );
};

export default Switcher;
