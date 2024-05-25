
import MessagesList from './MessagesList'
import PrivateChat from './PrivateChat'

const MessagesListAndPrivateChat = () => {
  return (
    <div className='w-screen flex ' >
        <div className='w-2/6'>
        <MessagesList />
        </div>
        <div className='w-4/6'>
        <PrivateChat />
        </div>
    </div>
  )
}

export default MessagesListAndPrivateChat