/* eslint-disable react-hooks/exhaustive-deps */
import {Routes, Route, Navigate,} from 'react-router-dom'
import { useEffect, useState } from 'react'

import './App.css'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Splash from './pages/Splash'
import MessagesList from './pages/MessagesList'
import NotFound from './pages/NotFound'
import PrivateChat from './pages/PrivateChat'
import GeneralChat from './pages/GeneralChat'
import Notifications from './pages/Notifications'
import Profile from './pages/Profile'
import AddFreind from './pages/AddFreind'
import ListAmis from './pages/ListAmis'
import PublicGroupsList from './pages/PublicGroupsList'


import io from 'socket.io-client';
import SocketContext from './context/SocketContext'

function App() {
  // const isUserSignedIn = !!localStorage.getItem('token')
  const [isUserSignedIn, setIsUserSignedIn] = useState(!!localStorage.getItem('token'))
  const [socket, setSocket] = useState(null);
  useEffect(() => {
    if (isUserSignedIn) {
      const user = JSON.parse(localStorage.getItem('user'));
      const socket = io('http://localhost:8000',
      {
        auth: {
          token: localStorage.getItem('token')
      },
      extraHeaders: {
        'userId':user.id
      }
      });
      setSocket(socket);
      socket.on('connect', () => {
      console.log('Connected to  the socket server from the app');
      // console.log('userId:',localStorage.getItem('user'));
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from the socket  server');
    });
    }
    
  } ,[]);

  return (
    
      <SocketContext.Provider value={socket}>
    <Routes>
      {/* Route pour la page d'accueil accessible à tous */}
      <Route path="/" element={<Splash />} />

      {/* Routes protégées accessibles uniquement aux utilisateurs connectés */}
      {isUserSignedIn ? (
        
        <>
          <Route path="/publicGroupsList" element={<PublicGroupsList />} />
          <Route path="/GeneralChat" element={<GeneralChat />} />
          <Route path="/MessagesList" element={<MessagesList  />} />
          <Route path="/PrivateChat/:user" element={<PrivateChat   />} />
          <Route path="/Notifications" element={<Notifications />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path='/AddFreind' element={<AddFreind/>} />
          <Route path="/login" element={<Navigate to="/MessagesList" />} />
          <Route path="/signup" element={<Navigate to="/MessagesList" />} />
          <Route path="/ListAmis" element={<ListAmis/>} />
          
          {/* Route NotFound pour les routes non définies */}
          <Route path="*" element={<NotFound/>} />
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
  
  )
}

export default App