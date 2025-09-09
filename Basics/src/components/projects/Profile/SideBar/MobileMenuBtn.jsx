import React from 'react'
import "./style.css"

const MobileMenuBtn = ({openMenu}) => {
  return (
    <div className="h-full w-10 pt-2 sm:w-12 lg:hidden border-r-2 border-gray-300">
      <div className="w-full flex-center">
        <button onClick={openMenu} className="w-fit cursor-pointer">
          <i className="ri-menu-line text-xl font-semibold"></i>
        </button>
      </div>
    </div>
  );
}

export default MobileMenuBtn