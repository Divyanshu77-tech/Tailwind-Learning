import React from 'react'
import TimeBox from './TimeBox'
import TextBox from './TextBox'


const ProfileMainHeroBox = () => {
  return (
    <div className="w-full py-2 flex border-b-1 border-gray-400">
      <TimeBox />
      <TextBox />
    </div>
  );
}

export default ProfileMainHeroBox