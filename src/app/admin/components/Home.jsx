"use client";

import React, { useEffect, useState } from "react";
import SideBar from "./sidebar/SideBar";
import MainSectionDisplay from "./main/MainSectionDisplay";

const Home = () => {
  const [selectedPage, setSelectedPage] = useState("home");

  return (
    <div className="grid grid-cols-10 gap-x-2">
      <div className="col-span-10">
        <p className="text-xl font-bold my-5">Admin</p>
      </div>
      {/* admin sidebar */}
      <div className="col-span-2 sticky top-0 min-h-[40vh] bg-white">
        <SideBar setSelectedPage={setSelectedPage} activeView={selectedPage} />
      </div>
      {/* main content */}
      <div className="col-span-8 bg-white w-full">
        <MainSectionDisplay active={selectedPage} />
      </div>
    </div>
  );
};

export default Home;
