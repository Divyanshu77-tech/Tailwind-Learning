import React, { useRef, useState } from "react";

const VerifyAge = () => {
  const [dirty, setDirty] = useState(false);
  function handleChange(e) {
    if (e.target.value.length > 0) return setDirty(true);
    setDirty(false);
  }
  return (
    <div className="h-screen w-screen bg-[#002A5A] text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl">
        <span className="text-[#41E6D3]">Webinar</span>.gg
      </h1>
      <div className="px-2 py-6 flex flex-col items-center mt-5">
        <p className="text-2xl font-semibold">Verify Your Age</p>
        <p className="mt-8">
          Please confirm your birth year. This data will not be stored.
        </p>
        <div className="w-full flex flex-col items-center mt-8 gap-8">
          <input
            type="text"
            placeholder="Your Birth Year"
            onChange={handleChange}
            className="outline-none bg-[#193F6B] rounded-lg px-3 py-2 w-[90%]"
          />
          <button
            disabled={dirty ? false : true}
            className={`${
              dirty
                ? "bg-[#3FDFD0] hover:bg-[#2FC2B5] cursor-pointer"
                : "bg-[#7F95AC] cursor-not-allowed"
            } px-3 py-2 w-[90%] rounded-lg`}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyAge;
