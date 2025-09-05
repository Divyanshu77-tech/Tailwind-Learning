import { useRef, useState } from "react";
import SubOtpBox from "./SubOtpBox";

const VerifyEmailCode = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [dirty, setDirty] = useState(false);
  const otpContainer = useRef();

  function handleChagne(value, index) {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setDirty(!newOtp.includes(""));
    if (value && index < newOtp.length - 1) {
      otpContainer.current.children[index + 1].focus();
    }
  }
  function handleKeyDown(e, index, value) {
    if(e.key === "Backspace" && !value && index > 0) {
      otpContainer.current.children[index - 1].focus()
    }
  }
  console.log(dirty);
  return (
    <div className="h-screen w-screen bg-[#002A5A] text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl">
        <span className="text-[#41E6D3]">Webinar</span>.gg
      </h1>
      <div className="px-2 py-6 flex flex-col items-center mt-5">
        <p className="text-2xl font-semibold">Check Your Email For A Code</p>
        <p className="mt-8">
          Please enter the verification code sent to your email id
          prabhleen@gmail.com
        </p>
        <div ref={otpContainer} className="flex gap-2 mt-8">
          {otp.map((val, i) => {
            return (
              <SubOtpBox
                key={i}
                value={val}
                onChange={(v) => handleChagne(v, i)}
                onKeyDown={(e) => handleKeyDown(e, i, val)}
              />
            );
          })}
        </div>
        <button
          disabled={dirty ? false : true}
          className={`${
            dirty
              ? "bg-[#3FDFD0] hover:bg-[#2FC2B5] cursor-pointer"
              : "bg-[#7F95AC] cursor-not-allowed"
          } px-3 py-2 w-[90%] rounded-lg mt-8`}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default VerifyEmailCode;
