"use client";
import React, { useRef, useState } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MenuOpenOutlinedIcon from "@mui/icons-material/MenuOpenOutlined";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);

    if (isOpen && dropdownRef.current) {
      const handleClickOutside = (event) => {
        if (!dropdownRef.current.contains(event.target)) {
          setIsOpen(false);
          document.body.removeEventListener("click", handleClickOutside);
        }
      };
      document.body.addEventListener("click", handleClickOutside);
    }
  };
  return (
    <>
      <div className=" md:block hidden">
        <div className="flex h-[100px] justify-between items-center mx-[120px]">
          <div className="flex gap-[40px] z-[2]">
            <div className="text-[14px] text-[#505F98] cursor-pointer">Home</div>
            <div className="text-[14px] text-[#505F98] cursor-pointer">About</div>
            <div className="text-[14px] text-[#505F98] cursor-pointer">Contact</div>
          </div>
          <div className="text-[#37447E] text-[26px] font-[900] leading-[38px] flex-grow-1  z-[2]">
            Landing
          </div>
          <div className=" z-[2]">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="flex h-[60px] justify-between items-center lg:mx-[120px] mx-[40px] relative md:hidden block">
        <div className="text-[#37447E] text-[26px] font-[900] leading-[38px] flex-grow-1 z-[2]">
          Landing
        </div>
        <button
          className="hamburger hamburger--collapse-r md:hidden"
          type="button"
          onClick={toggleDropdown}
        >
          {isOpen ? <MenuOpenOutlinedIcon /> : <MenuOutlinedIcon />}
        </button>
        {isOpen && (
          <div
            ref={dropdownRef}
            className="dropdown absolute right-0 top-full mt-2 py-2 w-[80%] shadow-md rounded-md bg-white z-50 text-center"
          >
            <ul className="mx-[20px] py-[10px]">
              <li className="text-[#505F98] hover:text-blue-700 border-b ">
                <a href="#">Home</a>
              </li>
              <li className="text-[#505F98] hover:text-blue-700 border-b">
                <a href="#">About</a>
              </li>
              <li className="text-[#505F98] hover:text-blue-700">
                <a href="#">Contact</a>
              </li>
            </ul>
            <div className="z-[2]">
              <button className="btn btn-primary px-[10px]">Buy Now</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
