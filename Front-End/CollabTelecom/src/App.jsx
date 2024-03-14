import {Routes, Route, Navigate} from 'react-router-dom'
import './App.css'
import SignUp from './pages/SignUp'

import Login from './pages/Login'
import Splash from './pages/Splash'
import MessagesList from './pages/MessagesList'

import Navbar from './components/Navbar'
import NotFound from './pages/NotFound'
import PrivateChat from './pages/PrivateChat'
import GeneralChat from './pages/GeneralChat'
import Notifications from './pages/Notifications'
import Profile from './pages/Profile'


function App() {
  const isUserSignedIn = !!localStorage.getItem('token')
// dont forgetr to remove the token from local storage when the user logs out
  return (
    <>
    
    <Routes>
      <Route path="/" element={<Splash />} />
     {isUserSignedIn && <Route path="/GeneralChat" element={<GeneralChat/>} /> }
     {isUserSignedIn && <Route path="/MessagesList" element={<MessagesList />} /> }
     {isUserSignedIn && <Route path="/Notifications" element={<Notifications />} /> }
     {isUserSignedIn && <Route path="/Profile" element={<Profile />} /> }



     {isUserSignedIn && <Route path="/PrivateChat/:user" element={<PrivateChat/>} /> }
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      {/* i comment it just for testing the navbar  */}
      {/* {isUserSignedIn && <Route path="*" element={<NotFound/>} />} */}
    </Routes>
    {/* {isUserSignedIn && <Navbar/>} */}
    {!isUserSignedIn && <Navigate to="/login" />}
    </>
  )
}

export default App
