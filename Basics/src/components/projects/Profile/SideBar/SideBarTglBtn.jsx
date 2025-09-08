import React from "react";

const SideBarTglBtn = ({ handleClick }) => {
  return (
    <div className="absolute top-0 left-0 h-full w-10 sm:w-12 md:w-14 lg:hidden border-r-2 border-gray-300">
      <button
        onClick={handleClick}
        className="w-full text-center py-2 cursor-pointer"
      >
        <i className="ri-menu-line text-xl font-semibold"></i>
      </button>
    </div>
  );
};

export default SideBarTglBtn;
