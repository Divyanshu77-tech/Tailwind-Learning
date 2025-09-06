import React from "react";

const Tasks = () => {
  return (
    <div className="col-span-2 pt-6">
      <p className="text-[1.08rem] font-medium">Monday, 14 October</p>
      <p className="text-[1.88rem] font-semibold">Good morning, Prabhleen</p>
      <div className="w-full mt-8 py-4 px-6">
        <div className="w-full flex justify-center rounded-lg overflow-hidden">
          <div className="bg-[#f1f1f1] w-full py-2 text-[1.05rem] font-medium px-2">
            <p>Monday, 14 October 2024</p>
          </div>
        </div>
        <div className=" w-full">
          <div className="w-full grid grid-cols-6 border-b-1 border-gray-300 py-4 ">
            <div className="col-span-1 text-[1.1rem] font-medium flex items-center justify-center border-r-2 border-[#3EE0D0] py-2">
              <p>11:30 AM</p>
            </div>
            <div className="col-span-5 px-2">
              <p className="text-[0.95rem] text-gray-500">Live</p>
              <p className="text-xl mt-1 font-semibold">UX Webinar</p>
            </div>
          </div>
          <div className="w-full grid grid-cols-6 border-b-1 border-gray-300 py-4">
            <div className="col-span-1 text-[1.1rem] font-medium flex items-center justify-center border-r-2 border-[#3EE0D0] py-2">
              <p>11:30 AM</p>
            </div>
            <div className="col-span-5 px-2">
              <p className="text-[0.95rem] text-gray-500">Live</p>
              <p className="text-xl mt-1 font-semibold">UX Webinar</p>
            </div>
          </div>
          <div className="w-full grid grid-cols-6 border-b-1 border-gray-300 py-4 ">
            <div className="col-span-1 text-[1.1rem] font-medium flex items-center justify-center border-r-2 border-[#3EE0D0] py-2">
              <p>11:30 AM</p>
            </div>
            <div className="col-span-5 px-2">
              <p className="text-[0.95rem] text-gray-500">Live</p>
              <p className="text-xl mt-1 font-semibold">UX Webinar</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Tasks;
