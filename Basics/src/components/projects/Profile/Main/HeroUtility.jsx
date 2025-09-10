import React from 'react'

const HeroUtility = () => {
  return (
    <div className="w-[90%] h-55 grid grid-cols-2 items-center gap-2 mt-5 mb-4 rounded-xl p-2 shadow-[0px_0px_2px_5px_rgba(0,0,0,0.1)] col-span-3 sm:place-self-center md:col-span-2 lg:col-span-1 ">
      <div className="flex flex-col items-center ">
        <div className="w-14 h-14 rounded-xl bg-green-500 flex items-center justify-center">
          <i className="ri-calendar-2-line text-4xl"></i>
        </div>
        <p>Schedule a webinar</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-14 h-14 rounded-xl bg-green-500 flex items-center justify-center">
          <i className="ri-add-large-line text-4xl"></i>
        </div>
        <p>Schedule a webinar</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-14 h-14 rounded-xl bg-green-500 flex items-center justify-center">
          <i className="ri-movie-2-line text-4xl"></i>
        </div>
        <p>Schedule a webinar</p>
      </div>
    </div>
  );
}

export default HeroUtility