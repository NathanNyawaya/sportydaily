"use client";

import React, { useEffect, useState } from "react";
import SideBar from "./sidebar/SideBar";
import MainSectionDisplay from "./main/MainSectionDisplay";

const Home = () => {
  const [selectedPage, setSelectedPage] = useState("home");
  const [openSideBar, setOpenSideBar] = useState(false)

  return (
    <div className="grid md:grid-cols-10 grid-cols-1 gap-2">

      {/* admin sidebar */}
      <div className="md:hidden col-span-1 flex md:col-span-10 bg-gray-900">
        <p className="text-sm font-bold m-3 bg-blue-900 px-3 text-white py-1 rounded cursor-pointer" onClick={() => setOpenSideBar(prev => !prev)}>Menu</p>
      </div>
      <div className="hidden md:block col-span-1 md:col-span-2 min-h-[40vh] bg-white">
        <SideBar setSelectedPage={setSelectedPage} activeView={selectedPage} setOpenSideBar={setOpenSideBar} />
      </div>

      {
        openSideBar &&
        <>
          <div className="md:hidden h-screen w-[90%] bg-gray-100 absolute top-0 z-50">
            <div className="col-span-1 flex md:col-span-10 justify-end">
              <p className="font-bold m-3 bg-blue-900 text-white px-3 py-1 rounded cursor-pointer" onClick={() => setOpenSideBar(prev => !prev)}>Close</p>
            </div>

            <SideBar setSelectedPage={setSelectedPage} activeView={selectedPage} setOpenSideBar={setOpenSideBar} />
          </div>
        </>
      }

      {/* main content */}
      <div className="col-span-1 md:col-span-8 bg-white w-full">
        {/* <div className="flex items-center justify-end w-full bg-gradient-to-r from-gray-400 to-yellow-700">
          
        </div> */}
        <MainSectionDisplay active={selectedPage} />
      </div>
    </div>
  );
};

export default Home;
