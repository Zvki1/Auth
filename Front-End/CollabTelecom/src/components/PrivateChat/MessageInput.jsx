import { SendHorizontal } from 'lucide-react';

const MessageInput = () => {
  return (
//    pt-4 border-t border-gray-300 maybe i add it in the style of the form
<form className="w-full pb-3  absolute bottom-0 inset-x-0 flex items-center justify-evenly  ">   
   {/* message input */}
    <div className="relative w-4/5">
        <input type="text" id="default-search" className="block w-full p-4  text-sm text-gray-900 border border-gray-300 rounded-3xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Send your message" required />
        {/* we will hide it temprarly  */}
        <div className=" absolute end-2.5 bottom-2.5 hidden  ">\
        <input type="file" />
        <input type="file" />
        </div>
    </div>
    {/* send buton */}
    <button className=' bg-blue-700 p-3 rounded-full  '>
    <SendHorizontal color='white' />
    </button>
</form>

  )
}

export default MessageInput