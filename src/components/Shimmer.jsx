const ShimmerCard = () => {
  return (
    <div className="w-[380px] bg-[#0F1824] rounded-2xl overflow-hidden shadow-md animate-pulse border border-gray-800">

      {/* Top Image Area */}
      <div className="w-full h-[330px] bg-gray-700"></div>

      {/* Card Content */}
      <div className="p-5 space-y-3">

        {/* Name Row */}
        <div className="flex items-center gap-3">
          <div className="w-40 h-4 bg-gray-600 rounded"></div>
          <div className="w-10 h-4 bg-gray-500 rounded-full"></div>
        </div>

        {/* Gender */}
        <div className="w-24 h-3 bg-gray-600 rounded"></div>

        {/* Description */}
        <div className="space-y-2">
          <div className="w-full h-3 bg-gray-700 rounded"></div>
          <div className="w-5/6 h-3 bg-gray-700 rounded"></div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 pt-2">
          <div className="w-24 h-8 bg-gray-700 rounded-full"></div>
          <div className="w-28 h-8 bg-gray-700 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerCard;
