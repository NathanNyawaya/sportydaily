"use client"
import React from "react";

const SideBar = () => {
  const handledClick = () => {
    alert("BLogs CLicked");
  };
  return (
    <div className="text-black p-2">
      <div className="text-center">actions</div>
      <div className="">
        <p className="cursor-pointer" onClick={handledClick}>Blogs</p>
      </div>
    </div>
  );
};

export default SideBar;
