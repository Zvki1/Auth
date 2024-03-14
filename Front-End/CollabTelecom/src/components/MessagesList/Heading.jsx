import { Link } from "react-router-dom"
import { UserRoundPlus } from 'lucide-react';
function Heading() {
  return (
    <div className="px-5 flex justify-between items-center">
        <h1 className="text-black font-Inter text-3xl font-semibold">Messages</h1>

        <Link to={'/AddFreind'}>
        <UserRoundPlus size={30} />
        </Link>
    </div>
  )
}

export default Heading