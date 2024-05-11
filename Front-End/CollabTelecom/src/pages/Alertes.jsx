
import AlertsContainer from "../components/Alertes/AlertsContainer"
import Navbar from "../components/Navbar"
import Header from "../components/Notifications.jsx/Header"
import Switcher from "../components/Notifications.jsx/Switcher"

const Alertes = () => {
  return (
    <div>
        <Header/>
        <Switcher/>
        <AlertsContainer/>
        <Navbar/>
    </div>
  )
}

export default Alertes