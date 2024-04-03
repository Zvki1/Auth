

const MessageSkeleton = () => {
  return (
    <div className="flex flex-row px-4 py-2 gap-2 items-center animate-pulse">
    <div className="w-11 h-11 rounded bg-gray-200"></div>
    <div className="flex flex-col w-full">
      <div className="flex flex-row w-full items-center gap-5">
          <div className="h-4 bg-gray-200 rounded w-3/4 md:w-1/3"></div> 
      </div>
      <div className="h-4 bg-gray-200 rounded w-3/4 md:w-1/3 mt-1"></div>
    </div>
  </div>
  )
}

export default MessageSkeleton