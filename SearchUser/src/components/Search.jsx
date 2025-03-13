import React from "react";
import SearchIcon from "../assets/icon-search.svg";
import { useState, useEffect } from "react";

const Search = ({ setUserData, isDark }) => {
  // const [username, setUsername] = useState("");
  const [username, setUsername] = useState("octocat");

  const handleSearch = async () => {
    if (!username) return;

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) throw new Error("User not found");

      const data = await response.json();
      setUserData(data); // Cập nhật state của user
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);
  return (
    <div
      className={`flex gap-4 flex-row w-full h-12  rounded-[15px] shadow-[0px_16px_30px_-10px_rgba(70,96,187,0.2)] mt-9  ${
        isDark ? "bg-[#1e2b48]" : "bg-white"
      }`}
    >
      <img
        className="relative h-5 w-5 top-[0.8rem] left-[0.8rem]"
        src={SearchIcon}
        alt="SearchIcon"
      />
      <input
        className={`w-full text-[13px] border-none ${
          isDark ? "placeholder-white" : "placeholder-[#757575]"
        } `}
        type="text"
        placeholder="Search GitHub username..."
        // value={username || ""}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="relative  text-white bg-[#0077ff] font-bold  h-[2.4rem] w-[6.25rem] rounded-[10px] border-none right-[0.25rem] top-[0.3rem]"
      >
        <span className="">Search</span>
      </button>
    </div>
  );
};

export default Search;
