import React, { useState } from "react";

const SubOtpBox = ({ value, onChange, onKeyDown }) => {
  function handleChange(e) {
    let val = e.target.value;
    if (/^[0-9]?$/.test(val)) {
      onChange(val);
    }
  }

  return (
    <input
      onChange={handleChange}
      maxLength={1}
      value={value}
      className="h-[40px] w-[35px] px-3 rounded-lg bg-[#193F6B] outline-none"
      onKeyDown={onKeyDown}
    />
  );
};

export default SubOtpBox;
