import { Link } from "react-router-dom"
import ButtonsContainer from "./ButtonsContainer"
import Actionscontainer from "./Actionscontainer"

const GrayPart = ({groupName,isAdmin}) => {
  return (
    <div className="w-full h-3/4 bg-[#EAEAEA] pt-32">
        <ButtonsContainer/>
        <Actionscontainer groupName={groupName} isAdmin={isAdmin}/>
    
    </div>
  )
}

export default GrayPart