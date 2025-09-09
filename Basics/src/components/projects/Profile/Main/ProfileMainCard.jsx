import React from 'react'

const ProfileMainCard = () => {
  return (
    <div className="h-75 w-48 py-3 mt-5 rounded-xl flex flex-col gap-2 items-center shadow-[0px_0px_5px_1px_rgba(0,0,0,0.3)]">
      <div className="h-[60%] w-[90%] rounded-xl object-top overflow-hidden">
        <img
          className="h-full w-full "
          src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
          alt=""
        />
      </div>
      <div className="w-full text-center">
        <p className="text-[1.1rem] font-semibold">John Doe</p>
        <p className="text-gray-700 mt-1">example@email.com</p>
        <p className="text-gray-700">1234567890</p>
        <p className="text-gray-700 mt-1">Delhi, India</p>
      </div>
    </div>
  );
}

export default ProfileMainCard