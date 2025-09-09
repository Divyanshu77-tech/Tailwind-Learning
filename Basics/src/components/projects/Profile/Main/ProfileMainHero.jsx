import React from 'react'
import ProfileMainHeroBox from './ProfileMainHeroBox';

const ProfileMainHero = () => {
  return (
    <div className="mt-5 mb-[20px] w-full flex flex-col items-center">
      <div className="flex flex-col gap-1">
        <p className="text-[0.90rem] font-semibold text-center">
          Monday, 14 October
        </p>
        <p className="text-xl font-semibold">Good morning, Prabhleen! 👋</p>
      </div>
      <div className="mt-5 w-[95%] py-4 px-2 rounded-xl shadow-[0px_0px_4px_2px_rgba(0,0,0,0.1)]">
        <ProfileMainHeroBox />
        <ProfileMainHeroBox />
        <ProfileMainHeroBox />
        <ProfileMainHeroBox />
      </div>
    </div>
  );
}

export default ProfileMainHero