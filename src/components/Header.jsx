import React from "react";
import { CiMenuBurger } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { IoMicCircleSharp } from "react-icons/io5";
import { MdVideoCall } from "react-icons/md";
import { CiBellOn } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

import YTLogo from "../assets/YouTube_Premium_logo.svg";
// import "./Header.css";
const Header = () => {
  return (
    <>
      <div className="h-[56px] z-[-1] absolute w-[100%] opacity-[1] bg-[var(--yt-spec-base-background)] bg-red-900 flex justify-between">
        <div className="p-[16px] py-0 flex items-center ">
          <CiMenuBurger size={23} />
          <img src={YTLogo} alt="YTLogo" className="w-[35%]" />
        </div>
        <div>
          <input
            className="w-[30%] bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="Type here..."
          />
          <CiSearch />
          <IoMicCircleSharp />
        </div>
        <div>
          <MdVideoCall />
          <CiBellOn />
          <CgProfile />
        </div>
      </div>
    </>
  );
};

export default Header;
