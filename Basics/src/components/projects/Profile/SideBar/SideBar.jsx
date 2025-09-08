import React, { useEffect, useRef, useState } from "react";
import NavButton from "./NavButton";
import SideBarHead from "./SideBarHead";
import SideBarTglBtn from "./SideBarTglBtn";
import SideBarMain from "./SideBarMain";

const SideBar = () => {
  const [open, setOpen] = useState(false);
  const menuDiv = useRef(null);
  function handleClick() {
    setOpen(!open);
  }
  useEffect(() => {
    function handleOutsideClick(e) {
      if (menuDiv.current && !menuDiv.current.contains(e.target)) {
        setOpen((prev) => {
          if (prev);
          return false;
        });
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [open]);
  return (
    <div className="relative h-full flex">
      <SideBarMain menuDiv={menuDiv} open={open} />
      <SideBarTglBtn handleClick={handleClick} />
    </div>
  );
};

export default SideBar;
