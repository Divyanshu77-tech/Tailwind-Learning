import React from 'react'
import userImage from "../../../../assets/bg-image.jpg";

const ProfileHead = () => {
  return (
    <div className='w-full h-18 col-span-3 xl:col-span-4'>
      <img 
      className='h-full w-full object-cover'
      src={userImage} alt="" />
    </div>
  );
}

export default ProfileHead