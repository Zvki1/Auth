

// eslint-disable-next-line react/prop-types
const NameInput = ({nameOfGroup,setNameOfGroup}) => {
  return (
    <div className=" py-4 px-5 space-y-2">
      <label htmlFor="group-name" className="font-Inter text-xl font-semibold text-[#112377]">Nom du groupe</label>
        <input
             type="text"
            id="group-name"
             className="bg-gray-50 border border-gray-300 text-gray-900 text-lg font-medium rounded-lg   w-full  p-4     "
             placeholder="Entrer le nom du groupe"
            onChange={e =>setNameOfGroup(e.target.value)}
            value={nameOfGroup}
           />
    </div>
  )
}

export default NameInput