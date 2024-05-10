// import AlertesPic from "../../assets/AlertesPic.svg";
import { MapPin } from 'lucide-react';

const Alert = () => {
  return (
    <div className="px-4 py-3 border-y-2 flex flex-row  justify-between">
        {/* <div className="flex items-center">
            <img src={AlertesPic} alt="" />
        </div> */}
        <div>   
            <h2 className=" text-md font-bold"> Dépassement du Seuil de Charge CPU</h2>
            <h4 className="text-xs font-medium">La charge CPU a dépassé le seuil critique de 90 %.</h4>
            <div className="flex flex-row">
                <MapPin color="#112377" />
                <p>Location</p>
            </div>
        </div>
        <div className="flex flex-col justify-around items-end gap-2  ">
            <p>time</p>
            <button type="button" className="text-white bg-[#112377] hover:bg-blue-800  font-medium rounded-md text-sm px-5 py-2.5  ">Accepter</button>
        </div>
    </div>
  )
}

export default Alert