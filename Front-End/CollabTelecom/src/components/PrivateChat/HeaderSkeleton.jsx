

const HeaderSkeleton = () => {
  return (
    <header className="py-4 px-5 flex justify-between items-center border-b-2 animate-pulse">
  <div className="flex flex-row items-center gap-2">
    <div className="h-6 w-6 bg-gray-200 rounded"></div>
    <div className="relative inline">
      <div className="h-9 w-9 bg-gray-200 rounded"></div>
    </div>
    <div className="w-20 h-4 bg-gray-200 rounded"></div>
  </div>
  <div className="flex items-center gap-3 justify-center">
    <div className="w-6 h-6 bg-gray-200 rounded"></div>
    <div className="w-6 h-6 bg-gray-200 rounded"></div>
    <div className="w-6 h-6 bg-gray-200 rounded"></div>
  </div>
</header>
  )
}

export default HeaderSkeleton