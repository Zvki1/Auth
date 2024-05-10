import Alert from "../components/Alertes/Alert"
import Navbar from "../components/Navbar"
import Header from "../components/Notifications.jsx/Header"
import Switcher from "../components/Notifications.jsx/Switcher"

const Alertes = () => {
  return (
    <div>
        <Header/>
        <Switcher/>
        <Alert/>
        <Navbar/>
    </div>
  )
}

export default Alertes