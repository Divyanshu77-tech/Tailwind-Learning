import React from "react";
import NavPanelHead from "./NavPanelHead";
import NavPanelBtn from "./NavPanelBtn";

const NavPanel = ({ isMenuOpen }) => {
  return (
    <div
      className={`h-full  lg:w-[28%] xl:w-[22%] 2xl:[18%] fixed top-0 left-0 flex flex-col gap-6 p-3 z-10 bg-white border-2 border-gray-300 transition-transform duration-300 ease-linear  ${
        isMenuOpen
          ? "translate-x-0 xs:w-[60%] sm:w-[45%] md:w-[38%]"
          : "-translate-x-full"
      } lg:static lg:translate-x-0 `}
    >
      <NavPanelHead />
      <nav className="flex flex-col gap-4">
        <NavPanelBtn name={"Home"} logo={<i className="ri-home-9-fill"></i>} />
        <NavPanelBtn
          name={"Webinars"}
          logo={<i className="ri-user-community-fill"></i>}
        />
        <NavPanelBtn name={"Billing"} logo={<i className="ri-bill-line"></i>} />
        <NavPanelBtn
          name={"User Management"}
          logo={<i className="ri-user-line"></i>}
        />
        <NavPanelBtn
          name={"Setting"}
          logo={<i className="ri-settings-2-line"></i>}
        />
      </nav>
    </div>
  );
};

export default NavPanel;
