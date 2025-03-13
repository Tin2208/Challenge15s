import React, { useState } from "react";
import MoonIcon from "../assets/icon-moon-mode.svg";
import LightIcon from "../assets/icon-light-mode.svg";

const ThemeToggle = ({ toggleTheme, isDark }) => {
  return (
    <div className="flex justify-between items-center">
      <div
        className={`text-[26px] font-bold ${
          isDark ? "text-white" : "text-[#2a3341]"
        }`}
      >
        devfinder
      </div>

      <div
        className="flex self-start px-[6px] py-[1px] gap-3 cursor-pointer"
        onClick={toggleTheme}
      >
        <span
          className={`font-bold text-[16px] tracking-[2.5px] ${
            isDark ? "text-white" : "text-[#4b699b]"
          }`}
        >
          {isDark ? "LIGHT" : "DARK"}
        </span>
        <img
          src={isDark ? LightIcon : MoonIcon}
          alt={isDark ? "Light Mode Icon" : "Dark Mode Icon"}
          width={20}
          height={20}
        />
      </div>
    </div>
  );
};

export default ThemeToggle;
