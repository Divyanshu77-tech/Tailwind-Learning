import React from "react";

const NavPanelBtn = ({ name, logo }) => {
  return (
    <div className="group w-full rounded-lg px-2 cursor-pointer flex justify-between items-baseline py-2 transition-all duration-300 hover:bg-[#E4EAEF] ">
      <p className="font-medium text-[0.95rem] sm:text-[1.1rem] text-[#AAAAAB] transition-all duration-300 group-hover:text-black ">
        {name}
      </p>
      <span className="text-[1.1rem] sm:text-xl text-[#AAAAAB] transition-all duration-300 group-hover:text-black">{logo}</span>
    </div>
  );
};

export default NavPanelBtn;
