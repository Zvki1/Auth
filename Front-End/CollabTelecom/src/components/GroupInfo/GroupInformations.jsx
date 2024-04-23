import GroupImage from '../../assets/Logo_group_chat.svg'

const GroupInformations = ({groupName}) => {
  return (
    <div className=' absolute  top-24 flex flex-col items-center space-y-2'>
    <div className=' bg-white p-2 rounded-2xl'>
    <img src={GroupImage} width={120} alt="grouppicture" />
    </div>
    <div className='text-center'>
    {groupName ? <h1 className=' text-2xl font-semibold'>{groupName}</h1> : <h1 className=' text-2xl font-semibold'>Group Name</h1>}
    </div>
</div>
  )
}

export default GroupInformations