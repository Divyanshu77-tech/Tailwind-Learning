import React from "react";

const SideBar = () => {
  return (
    <div className="bg-white border-2 border-gray-300 w-[18%] h-full px-4 py-6">
      {/*Profile image section */}
      <div className="w-full flex justify-between items-center">
        <div className="bg-[#002A5B] px-4 py-2 rounded-xl w-36 text-white text-center">
          <p>
            Webinar<span className="text-[#36C3BE]">.gg</span>
          </p>
        </div>
        <div className="bg-yellow-500 w-10 h-10 rounded-lg overflow-hidden">
          <img className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
      <div className="w-full mt-6">
        <div className="text-[#6e6e6e] p-2 mt-3 font-semibold rounded-lg hover:bg-[#d4d4d4] hover:text-black text-[1.1rem] cursor-pointer transition-all duration-200">
          <p>Home</p>
        </div>
        <div className="text-[#6e6e6e] p-2 mt-3 font-semibold rounded-lg hover:bg-[#d4d4d4] hover:text-black text-[1.1rem] cursor-pointer transition-all duration-200">
          <p>Webinars</p>
        </div>
        <div className="text-[#6e6e6e] p-2 mt-3 font-semibold rounded-lg hover:bg-[#d4d4d4] hover:text-black text-[1.1rem] cursor-pointer transition-all duration-200">
          <p>Billing</p>
        </div>
        <div className="text-[#6e6e6e] p-2 mt-3 font-semibold rounded-lg hover:bg-[#d4d4d4] hover:text-black text-[1.1rem] cursor-pointer transition-all duration-200">
          <p>User Management</p>
        </div>
        <div className="text-[#6e6e6e] p-2 mt-3 font-semibold rounded-lg hover:bg-[#d4d4d4] hover:text-black text-[1.1rem] cursor-pointer transition-all duration-200">
          <p>Settings</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
