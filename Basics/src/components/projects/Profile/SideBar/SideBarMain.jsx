import React from "react";
import NavButton from "./NavButton";
import SideBarHead from "./SideBarHead";

const SideBarMain = ({ menuDiv, open }) => {
  return (
    <div
      ref={menuDiv}
      className={`absolute top-0 left-0  z-10 w-[45%] sm:w-[40%] md:w-[35%] lg:w-[25%] xl:w-[20%] h-full border-r-2 border-gray-300 bg-white pt-4 px-2 transition-all duration-300 ${
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

export default SideBarMain;
