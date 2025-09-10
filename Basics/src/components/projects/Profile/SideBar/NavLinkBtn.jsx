import React from "react";

const NavLinkBtn = ({ name, logo }) => {
  return (
    <div className="flex justify-between items-baseline px-1 py-2 rounded-xl hover:bg-gray-200 cursor-pointer group transition-all duration-300">
      <p className="text-[1rem] font-medium text-gray-600 group-hover:text-gray-900">
        {name}
      </p>
      <div className="w-fit h-fit text-xl text-gray-600 group-hover:text-gray-900">
        {logo}
      </div>
    </div>
  );
};

export default NavLinkBtn;
