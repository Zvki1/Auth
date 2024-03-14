import Logo from "../../assets/logo.svg"

const Header = () => {
  return (
    <div className="flex flex-row gap-3  items-center lg:hidden">
      <img width="48px" src={Logo} alt="" />
      <h3 className="text-[#444444] font-bold text-[38px]">CollabTelecom</h3>
    </div>
  )
}

export default Header