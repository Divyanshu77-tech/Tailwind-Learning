import React from "react";

const Card = () => {
  return (
    <div className="h-full col-span-1 justify-self-center">
      <div className="p-8 bg-white flex flex-col justify-evenly items-center rounded-xl -translate-y-6 shadow-[0_0px_10px_2px_rgb(0,0,0,0.1)]">
        <div className="h-30 w-28 rounded-xl overflow-hidden">
          <img className="h-full w-full object-cover object-top"
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="w-full text-center">
          <p className="text-[1.2rem] font-semibold mt-3">Prabhleen Kaur</p>
          <p className="text-[#6f6f6f] mt-2">prabhleen@gmail.com</p>
          <p className="text-[#6f6f6f]">9898982351</p>
          <p
            className="text-[#6f6f6f] mt-2
        "
          >
            Delhi, India
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
