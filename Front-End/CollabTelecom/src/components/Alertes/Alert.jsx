/* eslint-disable react/prop-types */
// import AlertesPic from "../../assets/AlertesPic.svg";
import { MapPin } from 'lucide-react';
import { useEffect,useState } from 'react';
import AssignContainer from './AssignContainer';

const Alert = ({alert,setshowPopUp,showPopUp}) => {
    const [formattedTime, setFormattedTime] = useState("");
    useEffect(() => {
    if(alert){
        const dateString = alert.date;
        const hours = dateString.substring(11, 13);
        const hourInt = parseInt(hours);
        const incrementedHour = hourInt + 1;
        const formattedHour = incrementedHour.toString();
        const minutes = dateString.substring(14, 16);
         setFormattedTime( formattedHour + ':' + minutes)
    }
    }, [alert]);
  return (
    <div className="px-4 py-3 border-y-2 flex flex-row  justify-between">
        {/* <div className="flex items-center">
            <img src={AlertesPic} alt="" />
        </div> */}
        <div>   
            <h2 className=" text-md font-bold"> {alert?.titre || "title"}</h2>
            <h4 className="text-xs font-medium">{alert?.description || "description"}</h4>
            <div className="flex flex-row">
                <MapPin color="#112377" />
                <p>{alert?.localisation || "localisation"}</p>
            </div>
        </div>
        <div className="flex flex-col justify-around items-end gap-2  ">
            <p>{formattedTime || "date"}</p>
            <button type="button" className="text-white bg-[#112377] hover:bg-blue-800  font-medium rounded-md text-sm px-5 py-2.5  "
            onClick={() => setshowPopUp(true)}
            >assigner</button>
        </div>

        {showPopUp && <AssignContainer setshowPopUp={setshowPopUp}/>}
    </div>
  )
}

export default Alert