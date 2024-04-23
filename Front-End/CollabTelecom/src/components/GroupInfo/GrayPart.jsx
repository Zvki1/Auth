import { Link } from "react-router-dom"
import ButtonsContainer from "./ButtonsContainer"
import Actionscontainer from "./Actionscontainer"

const GrayPart = ({groupName}) => {
  return (
    <div className="w-full h-3/4 bg-[#EAEAEA] pt-32">
        <ButtonsContainer/>
        <Actionscontainer groupName={groupName}/>
    
    </div>
  )
}

export default GrayPart