import React from 'react'
import userImage from "../../../../assets/user-image.jpg";

const ProfileCard = () => {
  return (
    <div className="w-46 h-65 p-2 flex flex-col items-center rounded-xl shadow-[0px_0px_2px_5px_rgba(0,0,0,0.1)] sm:w-38 sm:h-60 col-span-1 sm:place-self-center">
      <div className="w-[90%] h-[50%] overflow-hidden rounded-xl">
        <img className="h-full w-full object-cover object-top" src={userImage} alt="" />
      </div>
      <p className='text-[1.1rem] font-semibold mt-1 mb-1'>Prabhleen Kaur</p>
      <p className='text-[0.95rem] sm:text-[0.9rem] text-gray-700'>prabhleen@gmail.com</p>
      <p className='text-[0.95rem] sm:text-[0.9rem] text-gray-700 mb-1'>1234567890</p>
      <p className='font-semibold'>Delhi, India</p>
    </div>
  );
}

export default ProfileCard