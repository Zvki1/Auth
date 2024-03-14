import 'tailwindcss/tailwind.css';  
// eslint-disable-next-line react/prop-types
const HeroText = ({hero,paragraph,p2}) => {
  return (
    <div className=" flex flex-col items-start justify-start w-full pt-16 lg:pt-0">
      <h2 className='text-[#112377] text-[42px] font-bold'>{hero}</h2>
      <p className='text-[#5E5D5D] text-[23px] font-medium'>{paragraph}<br/>{p2}</p>
    </div>
  )
}

export default HeroText