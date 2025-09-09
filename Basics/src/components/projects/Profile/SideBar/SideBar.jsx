import React, { useState } from "react";
import MobileMenuBtn from "./MobileMenuBtn";
import NavPanel from "./NavPanel";

const SideBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function openMenu() {
    setIsMenuOpen(prev => !prev);
  }
  function closeMenu() {
    setIsMenuOpen(prev => !prev);
  }
  return (
    <>
    <div className="h-full">
      <MobileMenuBtn openMenu={openMenu} />
      <NavPanel isMenuOpen={isMenuOpen} />
    </div>
    {isMenuOpen && <div onClick={closeMenu} className="fixed inset-0 bg-black opacity-15 lg:hidden"></div>}
    </>
  );
};

export default SideBar;
