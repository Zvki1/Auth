import { Link } from "react-router-dom"
import { UserRoundPlus ,Phone,Video   } from "lucide-react"
const ButtonsContainer = () => {
  return (
    <div className="flex justify-center gap-14 ">
        <Link to={`/EditGroup`} className="bg-white rounded-xl p-2 flex justify-center items-center" >
          <Phone  strokeWidth={2} color="#112377" />
        </Link>
        <Link to={`/EditGroup`} className="bg-white rounded-xl p-2 flex justify-center items-center" >
          <Video strokeWidth={2}  color="#112377" />
        </Link>
        <Link to={`/EditGroup`} className="bg-white rounded-xl p-2 flex justify-center items-center" >
          <UserRoundPlus  strokeWidth={2} color="#112377" />
        </Link>
    </div>
  )
}

export default ButtonsContainer