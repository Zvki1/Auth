import Navbar from "../components/Navbar";
import Header from "../components/Alertes/Header";
import Switcher from "../components/Alertes/Switcher";
import Loader from "../components/Loader";
import { useEffect, useState } from "react";
import { fetchProfile } from "../../api/profile";
import SideBar from "../components/SideBar";
import NotificationsEmptyState from "../components/NotificationsEmptyState";
import axios from "axios";
import { Bell, X } from "lucide-react";

const Others = () => {
  const [role, setRole] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);
  const [notifications, setNotifications] = useState([]);
  const [isgetting, setIsGetting] = useState(false);

  useEffect(() => {
    setIsGetting(true);
    axios
      .get("https://auth-ivbz.onrender.com/notifications", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setNotifications(res.data.notifications);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsGetting(false);
      });
    fetchProfile()
      .then((res) => {
        setRole(res.data.user.role);
      })
      .catch((err) => {
        console.log(err);
      });
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleArchive = (id) => {
    axios
      .patch(
        "https://auth-ivbz.onrender.com/notifications",
        { notificationId: id },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then(() => {
        setNotifications(
          notifications.filter((notification) => notification._id !== id)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      className={`flex w-screen h-screen   ${
        width > 768 ? " flex-row-reverse justify-end" : ""
      }`}
    >
      <div className={`${width > 768 && "w-11/12"}  flex-grow`}>
        <Header />
        <Switcher role={role} />
        {isgetting && <Loader />}
        {notifications.length === 0 ? (
          <>{!isgetting && <NotificationsEmptyState />}</>
        ) : (
          <>
            {!isgetting && (
              <div className="pt-2 px-4">
                {notifications.map((notification) => {
                  return (
                    <div
                      key={notification._id}
                      className="flex items-center gap-3 p-4 rounded-lg bg-gray-100 dark:bg-gray-800"
                    >
                      <Bell className="size-6 text-[#112377] dark:text-gray-400" />
                      <div className="flex-1">
                        <div className="font-medium">{notification?.titre}</div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {notification?.description}
                        </p>
                      </div>
                      <button
                        className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                        onClick={() => handleArchive(notification._id)}
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </>
        )}
      </div>
      {width > 768 ? <SideBar /> : <Navbar />}
    </div>
  );
};

export default Others;
