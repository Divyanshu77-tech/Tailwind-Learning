import React, { useState } from "react";
import SideBarMobileToggle from "./SideBarMobileToggle";
import NavPanel from "./NavPanel";

const SideBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <div className="h-full">
        <SideBarMobileToggle isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      <NavPanel isMenuOpen={isMenuOpen} />
      {isMenuOpen ? (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black opacity-15 z-0 lg:hidden"
        ></div>
      ) : null}
    </div>
  );
};

export default SideBar;
