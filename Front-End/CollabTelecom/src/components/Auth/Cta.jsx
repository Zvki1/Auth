import { Link } from "react-router-dom"


// eslint-disable-next-line react/prop-types
const Cta = ({paragraph,cta}) => {
  return (
    <div className="flex flex-row gap-1 w-full justify-center  text-[20px] font-medium pt-2 ">
      <p className="text-[#5E5D5D]">{paragraph}</p>
      {cta === "Sign up" ? (
        <Link to="/SignUp" className="text-[#112377] font-semibold">
          {cta}
        </Link>
      ) : cta === "Log In" ? (
        <Link to="/login" className="text-[#112377] font-semibold">
          {cta}
        </Link>
      ) : null}
    
    </div>
  )
}

export default Cta