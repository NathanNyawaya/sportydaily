"use client";

import React, { useEffect, useState } from "react";
import SideBar from "./sidebar/SideBar";
import MainSectionDisplay from "./main/MainSectionDisplay";

const Home = () => {
  const [selectedPage, setSelectedPage] = useState("home");
  const [openSideBar, setOpenSiderBar] = useState(false)

  return (
    <div className="grid md:grid-cols-10 grid-cols-1 gap-2">

      {/* admin sidebar */}
      <div className="md:hidden col-span-1 flex md:col-span-10 bg-gray-900">
        <p className="text-sm font-bold m-3 bg-blue-900 px-3 text-white py-1 rounded cursor-pointer" onClick={() => setOpenSiderBar(prev => !prev)}>Menu</p>
      </div>
      <div className="hidden md:block col-span-1 md:col-span-2 min-h-[40vh] bg-white">
        <SideBar setSelectedPage={setSelectedPage} activeView={selectedPage} />
      </div>

      {
        openSideBar &&
        <>
          <div className="md:hidden h-screen w-[90%] bg-white absolute top-0 z-50">
            <div className="col-span-1 flex md:col-span-10 bg-gray-900">
              <p className="font-bold m-3 bg-blue-900 px-3 py-1 rounded cursor-pointer" onClick={() => setOpenSiderBar(prev => !prev)}>Close</p>
            </div>
            <SideBar setSelectedPage={setSelectedPage} activeView={selectedPage} />
          </div>
        </>

      }
      {/* main content */}
      <div className="col-span-1 md:col-span-8 bg-white w-full">
        <MainSectionDisplay active={selectedPage} />
      </div>
    </div>
  );
};

export default Home;
