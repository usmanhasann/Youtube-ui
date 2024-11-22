import React from "react";
import { CiMenuBurger } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { IoMicCircleSharp } from "react-icons/io5";
import { MdVideoCall } from "react-icons/md";
import { CiBellOn } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { Tooltip as ReactTooltip } from "react-tooltip"; // Use named import

import YTLogo from "../assets/YouTube_Premium_logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="h-[56px] top-0 w-[100%] opacity-[1] bg-[var(--yt-spec-base-background)] flex justify-between sticky">
        <div className="p-[16px] py-0 flex items-center gap-6 mx-3">
          <CiMenuBurger size={23} className="cursor-pointer" />
          <img
            src={YTLogo}
            alt="YTLogo"
            className="w-[26%] cursor-pointer"
            data-tooltip-id="yt-tooltip"
            data-tooltip-content="YouTube Home"
          />
        </div>
        <div className="flex mr-4 gap-3 items-center">
          <div className="flex">
            <input
              className="w-[30rem] bg-transparent placeholder:text-white text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder="Search"
            />
            <button
              data-tooltip-id="yt-tooltip"
              data-tooltip-content="Search"
              className="border-[1px] border-solid cursor-pointer h-[40px] w-[64px] rounded-tr-[40px] rounded-br-[40px] border-[var(--ytd-searchbox-legacy-button-border-color)]"
            >
              <CiSearch
                size={28}
                style={{ width: "90%" }}
                className="border-[1px solid var(--ytd-searchbox-legacy-border-color)] bg-[var(--ytd-searchbox-background)]"
              />
            </button>
          </div>
          <IoMicCircleSharp
            size={40}
            className="w-[26%] cursor-pointer"
            data-tooltip-id="yt-tooltip"
            data-tooltip-content="Search with your voice"
          />
        </div>
        <div className="flex items-center gap-3 pr-6">
          <MdVideoCall
            className="icons-YT"
            data-tooltip-id="yt-tooltip"
            data-tooltip-content="Create"
          />
          <CiBellOn
            className="icons-YT"
            data-tooltip-id="yt-tooltip"
            data-tooltip-content="Notifications"
          />
          <CgProfile className="icons-YT" />
        </div>
      </div>
      <ReactTooltip
        id="yt-tooltip"
        place="top"
        type="dark"
        effect="solid"
        style={{
          backgroundColor: "grey",
          color: "white",
          borderRadius: "4px",
          padding: "6px 8px",
          fontsize: "10px",
        }}
        noArrow
      />
    </>
  );
};

export default Header;
