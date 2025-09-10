import React from 'react'
import HeroBox from './HeroBox';

const ProfileHero = () => {
  return (
    <div className="w-[93%] px-2 py-3 rounded-xl shadow-[0px_0px_2px_5px_rgba(0,0,0,0.1)] col-span-2">
      <div className="flex flex-col gap-1">
        <p className="text-[0.95rem] font-semibold">Monday, 14 Ocotober</p>
        <p className="text-[1.1rem] font-semibold">
          Good morning, Prabhleen! 👋
        </p>
      </div>
      <div>
        <div className="mt-3 flex gap-3">
          <i className="ri-calendar-2-line text-xl"></i>
          <p>Monday, 14 October 2024</p>
          <div className="hidden">
            <i className="ri-arrow-left-long-fill"></i>
            <i className="ri-arrow-right-long-fill"></i>
          </div>
        </div>
        <div className="mt-3">
          <HeroBox />
          <HeroBox />
          <HeroBox />
          <HeroBox />
        </div>
      </div>
    </div>
  );
}

export default ProfileHero