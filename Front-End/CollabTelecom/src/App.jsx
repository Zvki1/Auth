import {Routes, Route, Navigate,} from 'react-router-dom'
// import { useState } from 'react'
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


function App() {

  const isUserSignedIn = !!localStorage.getItem('token')
// dont forgetr to remove the token from local storage when the user logs out
  return (
    <>
    <Routes>
      {/* Route pour la page d'accueil accessible à tous */}
      <Route path="/" element={<Splash />} />

      {/* Routes protégées accessibles uniquement aux utilisateurs connectés */}
      {isUserSignedIn ? (
        <>
          <Route path="/GeneralChat" element={<GeneralChat />} />
          <Route path="/MessagesList" element={<MessagesList />} />
          <Route path="/Notifications" element={<Notifications />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/PrivateChat/:user" element={<PrivateChat />} />
          <Route path='/AddFreind' element={<AddFreind/>} />
          <Route path="/login" element={<Login />} />
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
  </>
  )
}

export default App