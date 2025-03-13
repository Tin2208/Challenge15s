import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import Search from "./Search";
import UserDetails from "./UserDetails";

const Container = () => {
  const [isDark, setIsDark] = useState(false);
  const [userData, setUserData] = useState(null);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
    console.log("Current Theme:", !isDark);
  };

  return (
    <div
      className={` pt-36 pb-36 min-h-screen padding32 ${
        isDark ? "bg-[#141d2e] " : "bg-[#f5f7ff] "
      } transition-all`}
    >
      <div className={` flex max-w-[56rem] mx-auto flex-col px-8`}>
        <ThemeToggle toggleTheme={toggleTheme} isDark={isDark} />
        <Search setUserData={setUserData} isDark={isDark} />
        {userData && <UserDetails user={userData} isDark={isDark} />}
        <UserDetails isDark={isDark} />
      </div>
    </div>
  );
};

export default Container;
