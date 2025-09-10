import React from 'react'

const HeroBox = () => {
  return (
    <div className="w-full flex py-2 border-b-2 border-y-gray-400">
      <div className="w-[25%] py-2 text-center border-r-2 border-green-500">
        <p className="text-xl font-semibold">11:30</p>
      </div>
      <div className='flex-1 ml-2'>
        <p className='text-[0.9rem] text-gray-700 font-medium'>Live</p>
        <p className='text-xl font-semibold'>UX Webinar</p>
      </div>
    </div>
  );
}

export default HeroBox