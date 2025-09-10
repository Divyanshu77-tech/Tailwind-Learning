import React from "react";
import "../style.css";

const SideBarMobileToggle = ({ toggleMenu }) => {
  return (
      <div className="w-10 h-screen lg:hidden">
        <div className="w-full flex-center pt-2 sticky top-0 left-0">
          <button
            onClick={toggleMenu}
            className="w-fit h-fit outline-none border-none cursor-pointer "
          >
            <i className="ri-menu-line text-2xl font-semibold"></i>
          </button>
        </div>
      </div>
  );
};

export default SideBarMobileToggle;
