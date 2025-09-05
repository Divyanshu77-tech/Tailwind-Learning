import { useRef, useState } from "react";

const VerifyEmail = () => {
  const [dirty, setDirty] = useState(false);
  function handleOnchange(e) {
    if (e.target.value.length > 0) return setDirty(true);
    setDirty(false);
  }

  return (
    <div className="h-screen w-screen bg-[#002A5A] text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl text-center mb-10 font-semibold">
        <span className="text-[#41E6D3]">Webinar</span>.gg
      </h1>
      <div className="w-[350px] h-[300px] flex flex-col items-center justify-evenly">
        <p className="text-2xl text-white font-semibold">Let's Get Started</p>
        <input
          type="text"
          placeholder="Email id"
          onChange={handleOnchange}
          className="bg-[#193F6B] outline-none rounded-lg px-4 py-2 w-[80%]"
        />
        <input
          disabled={dirty ? false : true}
          type="Submit"
          className={`${
            dirty
              ? "bg-[#3FDFD0] hover:bg-[#2FC2B5] cursor-pointer"
              : "bg-[#7F95AC] cursor-not-allowed"
          } font-semibold text-[1rem] py-2 w-[80%] rounded-lg  transition-colors duration-300`}
        />
      </div>
    </div>
  );
};

export default VerifyEmail;
