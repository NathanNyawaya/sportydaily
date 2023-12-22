"use client";
import React from "react";

const SideBar = ({ setSelectedPage, activeView }) => {
  const handledClick = (current_page_identifier) => {
    setSelectedPage(current_page_identifier);
  };
  const checkActiveView = (id) => {
    if (id === activeView) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <div className="text-black p-2">
      <div className="text-center">Control Panel</div>
      <div className="">
        <p
          className={`${
            checkActiveView("home") && "bg-gray-200"
          } cursor-pointer my-2`}
          onClick={() => handledClick("home")}
        >
          Home
        </p>

        <p
          className={`${
            checkActiveView("all_blogs") && "bg-gray-200"
          } cursor-pointer my-2`}
          onClick={() => handledClick("all_blogs")}
        >
          Blogs
        </p>
        <p
          className={`${
            checkActiveView("all_livestreams") && "bg-gray-200"
          } cursor-pointer my-2`}
          onClick={() => handledClick("all_livestreams")}
        >
          Livestreams
        </p>
        <p
          className={`${
            checkActiveView("bets_tips") && "bg-gray-200"
          } cursor-pointer my-2`}
          onClick={() => handledClick("bets_tips")}
        >
          Betting Tips
        </p>
      </div>
    </div>
  );
};

export default SideBar;
