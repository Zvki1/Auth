import { Link } from "react-router-dom"
import { MessageSquarePlus , EllipsisVertical} from 'lucide-react';
import { useState } from "react";


const Heading = () => {
  const [isAdmin, setisAdmin] = useState(true)
  return (
    <div className="px-5 flex justify-between items-center">
        <h1 className="text-black font-Inter text-3xl font-semibold">Groups</h1>
        <div className="flex gap-1 ">
            {isAdmin 
            &&
            <Link to={'/newGroup'}>
            <MessageSquarePlus size={30} />
            </Link>
            }

            {/* <Link to="/groupInfos">
            <EllipsisVertical  size={30} />
            </Link> */}
        </div>
    </div>
  )
}

export default Heading