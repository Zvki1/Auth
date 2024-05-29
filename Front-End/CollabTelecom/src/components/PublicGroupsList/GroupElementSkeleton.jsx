

const GroupElementSkeleton = () => {
  return (
    <div className="flex flex-row gap-4 animate-pulse">
      <div className="flex flex-row gap-4 max-h-14 w-full">
        <div className="relative inline min-w-14 h-14 bg-gray-200 rounded"></div>
        <div className="flex flex-col justify-center gap-2  w-full ">
          <div className="h-4 bg-gray-200 rounded w-4/4"></div>
          <div className="h-4 bg-gray-200 rounded w-4/4"></div>
        </div>
      </div>
    </div>
  );
};

export default GroupElementSkeleton;
