import React from "react";

const NavPanelHead = () => {
  return (
    <div className="flex justify-between">
      <div className="bg-[#002B5B]  text-[1rem] w-36 py-2 text-center rounded-lg">
        <p className="text-white font-semibold">
          Webinars <span className="text-[#2BA5A9]">.gg</span>
        </p>
      </div>
      <div className="hidden sm:block sm:w-10 sm:h-10 rounded-lg overflow-hidden">
        <img
          className="w-full h-full object-cover object-top"
          src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
          alt=""
        />
      </div>
    </div>
  );
};

export default NavPanelHead;
