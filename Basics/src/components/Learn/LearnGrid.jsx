import React from "react";

const LearnGrid = () => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-12 h-[550px] w-[600px] bg-black">
      <div className="bg-green-500 col-span-1 sm:col-span-5">Green</div>
      <div className="bg-red-500 col-span-1 sm:col-span-5">Red</div>
      <div className="bg-blue-500 col-span-1 sm:col-span-2">Blue</div>
    </div>
  );
};

export default LearnGrid;
