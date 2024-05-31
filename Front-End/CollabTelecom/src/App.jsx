/* eslint-disable react-hooks/exhaustive-deps */
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

import "./App.css";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Splash from "./pages/Splash";
import MessagesList from "./pages/MessagesList";
import NotFound from "./pages/NotFound";
import PrivateChat from "./pages/PrivateChat";
import GeneralChat from "./pages/GeneralChat";
import Notifications from "./pages/Notfications";
import Profile from "./pages/Profile";
import AddFreind from "./pages/AddFreind";
import ListAmis from "./pages/ListAmis";
import PublicGroupsList from "./pages/PublicGroupsList";
import EditProfile from "./pages/EditProfile";

import io from "socket.io-client";
import SocketContext from "./context/SocketContext";
import NewGroup from "./pages/NewGroup";
import GroupInfo from "./pages/GroupInfo";
import GroupMembersList from "./pages/GroupMembersList";
import EditGroupe from "./pages/EditGroup";
import Alertes from "./pages/Alertes";
// import Appels from './pages/Appels'
import Others from "./pages/Others";
import Tickets from "./pages/Tickets";
import Ticket from "./pages/TicketPage";
import MessagesListAndPrivateChat from "./pages/MessagesListAndPrivateChat";
// import Remarque from './pages/Remarque'

function App() {
  // const isUserSignedIn = !!localStorage.getItem('token')
  const [isUserSignedIn] = useState(!!localStorage.getItem("token"));
  const [socket, setSocket] = useState(null);
  useEffect(() => {
    if (isUserSignedIn) {
      const user = JSON.parse(localStorage.getItem("user"));
      const socket = io("https://auth-ivbz.onrender.com", {
        auth: {
          token: localStorage.getItem("token"),
        },
        extraHeaders: {
          userId: user.id,
        },
      });
      setSocket(socket);
      socket.on("connect", () => {
        console.log("Connected to  the socket server from the app");
        // console.log('userId:',localStorage.getItem('user'));
      });
      socket.on("chat message", (content, receiverId,username) => {
        checkPageStatus(content,username);
      });
      socket.on("disconnect", () => {
        console.log("Disconnected from the socket  server");
      });
    }
  }, []);
  // hnaya rani zayed socket fl useEffect
  const checkPageStatus = (message, username) => {
    if (!("Notification" in window)) {
      alert("This browser does not support system notifications!");
    } else if (Notification.permission === "granted") {
      sendNotification(message, username);
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission((permission) => {
        if (permission === "granted") {
          sendNotification(message, username);
        }
      });
    }
  };
  const sendNotification = (message, username) => {
    console.log("send notification from app");

    if (document.visibilityState === "hidden") {
      const notification = new Notification("New message from Collabtelecom", {
        icon: "Front-End\CollabTelecom\public\logo512.png",
        body: `${username}: ${message}`,
      });
      notification.onclick = () =>
        function () {
          window.open("http://127.0.0.1:5173/MessagesList");
        };
    }
  };
  return (
    <SocketContext.Provider value={socket}>
      <Routes>
        {/* Route pour la page d'accueil accessible à tous */}
        <Route path="/" element={<Splash />} />

        {/* Routes protégées accessibles uniquement aux utilisateurs connectés */}
        {isUserSignedIn ? (
          <>
            <Route path="/EditProfile" element={<EditProfile />} />
            <Route path="/publicGroupsList" element={<PublicGroupsList />} />
            <Route path="/GeneralChat" element={<GeneralChat />} />
            <Route path="/MessagesList" element={<MessagesList />} />
            <Route path="/PrivateChat/:user" element={<PrivateChat />} />
            <Route path="/Chat" element={<MessagesListAndPrivateChat />} />
            {/* this notificaiton is not used  */}
            <Route path="/Notifications" element={<Notifications />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/AddFreind" element={<AddFreind />} />
            <Route path="/login" element={<Navigate to="/MessagesList" />} />
            <Route path="/signup" element={<Navigate to="/MessagesList" />} />
            <Route path="/ListAmis" element={<ListAmis />} />
            <Route path="/newGroup" element={<NewGroup />} />
            <Route path="/groupInfos" element={<GroupInfo />} />
            <Route path="/groupMembersList" element={<GroupMembersList />} />
            <Route path="/EditGroup" element={<EditGroupe />} />
            <Route path="Notifications/Alertes" element={<Alertes />} />
            <Route path="Notifications/Tickets" element={<Tickets />} />
            <Route path="Notifications/Tickets/ticket" element={<Ticket />} />
            <Route path="/Notifications/Others" element={<Others />} />
            {/* Route NotFound pour les routes non définies */}
            <Route path="*" element={<NotFound />} />
          </>
        ) : (
          <>
            {/* Routes d'authentification accessibles aux utilisateurs non connectés */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            {/* Redirection vers la page d'accueil pour toutes les autres routes */}
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        )}
      </Routes>
    </SocketContext.Provider>
  );
}

export default App;
