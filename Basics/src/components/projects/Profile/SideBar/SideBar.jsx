import React, { useEffect, useRef, useState } from "react";
import NavButton from "./NavButton";
import SideBarHead from "./SideBarHead";

const SideBar = () => {
  const [open, setOpen] = useState(false);
  const menuDiv = useRef(null);
  function handleClick() {
    setOpen(!open);
  }
  useEffect(() => {
    function handleOutsideClick(e) {
      if (menuDiv.current && !menuDiv.current.contains(e.target)) {
        setOpen((prev) => {
          if (prev);
          return false;
        });
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [open]);
  if (!open) {
    return (
      <div className="h-full w-10 sm:w-12 md:w-14 lg:hidden bg-red-50">
        <button
          onClick={handleClick}
          className="w-full text-center py-2 cursor-pointer"
        >
          <i className="ri-menu-line text-xl font-semibold"></i>
        </button>
      </div>
    );
  }
  return (
    <div
      ref={menuDiv}
      className={`w-[45%] sm:w-[40%] md:w-[35%] lg:w-[25%] xl:w-[20%] h-full border-r-2 border-gray-300 pt-4 px-2 transition-all duration-300 ${
        open ? "-translate-x-0" : "-translate-x-[100%]"
      }`}
    >
      {/* Side bar header profile pic and company logo */}
      <SideBarHead />
      {/* Side bar nav section */}
      <nav className="mt-6 w-full flex flex-col gap-3">
        <NavButton name={"Home"} logo={<i className="ri-home-9-fill "></i>} />
        <NavButton
          name={"Webinars"}
          logo={<i className="ri-user-community-fill"></i>}
        />
        <NavButton
          name={"Billing"}
          logo={<i className="ri-bank-card-line"></i>}
        />
        <NavButton
          name={"User Management"}
          logo={<i className="ri-user-fill"></i>}
        />
        <NavButton
          name={"Setting"}
          logo={<i className="ri-settings-2-line"></i>}
        />
      </nav>
    </div>
  );
};

export default SideBar;
