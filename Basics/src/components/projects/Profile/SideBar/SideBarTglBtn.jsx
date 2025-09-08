import React from "react";

const SideBarTglBtn = ({ handleClick, open }) => {
  return (
    <div className="animate-bar h-full z-0 w-10 sm:w-12 md:w-14 lg:hidden border-r-2 border-gray-300">
      <button
        onClick={handleClick}
        className="w-full text-center py-2 cursor-pointer"
      >
        {open ? (
          <i className="ri-close-line text-xl font-semibold"></i>
        ) : (
          <i className="ri-menu-line text-xl font-semibold"></i>
        )}
      </button>
    </div>
  );
};

export default SideBarTglBtn;
