import Header from "../components/ListAmis/Header";
import SearchChat from "../components/MessagesList/SearchChat";
import Avatar from "react-string-avatar";
import {Phone,MessageCircle ,Trash} from "lucide-react";

const ListAmis=() => {
    return (
        <div >
         <Header/>
         <SearchChat/> 
         <div  className="pt-3 flex flex-col w-full gap-3 items-center">

         <div className=" px-5 flex flex-row justify-between w-full items-center">
                    <div className="flex flex-row items-center gap-3">
                    <Avatar
                        string="kamel"
                        autoColor={true}
                        width={62}
                        cornerRadius={5}
                    />
                    <div>
                        <h3 className="text-[#2B363B] font-semibold text-xl font-Inter">Kamel</h3>
                        <p className="text-[#2B363B] font-[400] text-lg font-Inter">abu@gmail.com</p>
                    </div> </div>
                    <div className="flex items-center gap-3 justify-center"> <Phone color="#0B4C8C"/><MessageCircle color="#0B4C8C"/><Trash color="#D30000"/></div>
                   

        </div>
        </div>
        </div>
   ) 
}
export default ListAmis;