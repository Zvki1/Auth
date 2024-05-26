import Header from "../components/ListAmis/Header";
import SearchChat from "../components/MessagesList/SearchChat";
import Avatar from "react-string-avatar";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Phone, MessageCircle, Trash } from "lucide-react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const ListAmis = () => {
  const [friendList, setFriends] = useState([]);
  const [searchGroup, setSearchGroup] = useState("");
  const deleteFriend = (id) => {
    const token = localStorage.getItem("token");
    axios
      .patch(
        "http://localhost:8000/freindList",
        { userId: id },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(() => {
        toast.success("Ami Supprime avec succes", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Slide,
        });
        // when the toast is done, we will reload the page to show the changes
        setTimeout(() => {
         if (window.location.pathname === "/ListAmis") {
            window.location.reload();
          }
        }, 5000);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };
  const getFriends = () => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:8000/freindList", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setFriends(response.data.freinds);
      })
      .catch((err) => {
        console.log("Error", err);
        if (err.response.status === 403) {
          localStorage.removeItem("token");
          window.location.reload();
        }
      });
  };

  useEffect(() => {
    getFriends();
  }, []);
  const filteredFreinds = friendList.filter((group) => {
    return group.username.toLowerCase().includes(searchGroup.toLowerCase());
  });

  return (
    <div className="h-screen flex flex-col items-center ">
      <ToastContainer />
      <Header />
      <SearchChat searchGroup={searchGroup} setSearchGroup={setSearchGroup} />
      <div className="py-3 flex flex-col w-full gap-3 items-center  flex-grow overflow-y-auto ">
        {filteredFreinds.map((freinds, index) => (
          <div
            className=" px-5 flex flex-row justify-between w-full items-center"
            key={index}
          >
            <div className="flex flex-row items-center gap-3">
              <Avatar
                string={freinds.username}
                autoColor={true}
                width={62}
                cornerRadius={5}
              />
              <div>
                <h3 className="text-[#2B363B] font-semibold text-xl font-Inter">
                  {freinds.username}
                </h3>
                <p className="text-[#2B363B] font-[400] text-lg font-Inter">
                  {freinds.email}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center">
              <Link to={`/PrivateChat/${freinds._id}`}>
                <Phone color="#0B4C8C" />
              </Link>
              <Link to={`/PrivateChat/${freinds._id}`}>
                <MessageCircle color="#0B4C8C" />
              </Link>
              <button onClick={() => deleteFriend(freinds._id)}>
                <Trash color="#D30000" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ListAmis;
