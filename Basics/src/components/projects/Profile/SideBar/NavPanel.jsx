import React from "react";
import "../style.css";
import NavLinkBtn from "./NavLinkBtn";

const NavPanel = ({isMenuOpen}) => {
  return (
    <div
      className={`w-50 h-full fixed top-0 left-0 z-10 bg-white xl:border-r-2 p-2 flex flex-col gap-4 transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 lg:static lg:border-none`}
    >
      {/*Company logo & user profile section */}
      <div>
        {/*Company logo */}
        <div className="bg-[#0a6359] w-fit h-fit flex-center text-[1.1rem] px-4 py-2 rounded-xl">
          <p className=" text-white">Webinar</p>
          <span className="text-[#38C8C0]">.gg</span>
        </div>
        {/*Profile pic */}
        <div></div>
      </div>
      {/*Nav Links*/}
      <nav className="flex flex-col gap-2">
        <NavLinkBtn name={"Home"} logo={<i className="ri-home-line "></i>} />
        <NavLinkBtn
          name={"Webinars"}
          logo={<i className="ri-group-3-line"></i>}
        />
        <NavLinkBtn
          name={"Billing"}
          logo={<i className="ri-bank-card-line "></i>}
        />
        <NavLinkBtn
          name={"User Management"}
          logo={<i className="ri-user-community-fill "></i>}
        />
        <NavLinkBtn
          name={"Settings"}
          logo={<i className="ri-settings-2-line "></i>}
        />
      </nav>
    </div>
  );
};

export default NavPanel;
