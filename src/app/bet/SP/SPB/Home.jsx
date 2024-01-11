"use client";
import React, { useState } from "react";

import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import BottomNavBar from "../../components/navbar/Dropdown";
import SlidingAds from "../../components/ads/SlidingAds";
import SideBar from "./components/SideBar";


const MobileFixed = ({ setTogglSidebar }) => {
  return (
    <div className="bg-black max-h-screen max-w-screen">
      <div className="grid grid-cols-3 gap-x-2">
        <div className="col-span-1 bg-gray-800 flex justify-center items-center p-3" onClick={() => setTogglSidebar(prev => !prev)}>
          <p className="font-bold text-sm">Menu</p>
        </div>
        <div className="col-span-1 bg-gray-800 flex justify-center items-center p-3">
          <p className="font-bold text-sm">Home</p>
        </div>
        <div className="col-span-1 bg-gray-800 flex justify-center items-center p-3">
          <p className="font-bold text-sm">Betlsip</p>
        </div>
      </div>
    </div>
  )
}


const SportsBookHome = () => {
  const [toggleSidebar, setTogglSidebar] = useState(false)

  return (
    <main className="relative w-screen">
      <div className="z-100 sticky top-0 z-50 mx-auto max-w-screen-xl">
        {/* navigations */}
        <Navbar />
        <div className="bg-black">
          <div className="mx-auto max-w-screen-xl">
            <BottomNavBar />
          </div>
        </div>

        {/* mobile navigations */}
        <div className="fixed left-0 right-0 bottom-0">
          <MobileFixed setTogglSidebar={setTogglSidebar} />
        </div>
      </div>

      {/* main content */}
      <div className="mx-auto max-w-screen-xl mb-10">
        <div className="min-h-[90vh] grid grid-cols-11">

          <div className="max_md:hidden col-span-2 bg-gray-800">
            <SideBar />
          </div>



          <div className="col-span-12 md:col-span-9 flex flex-col">
            <div className="">
              <SlidingAds setTogglSidebar={setTogglSidebar} />
            </div>
            {
              toggleSidebar &&
              <div className="bg-gray-700 min-md:hidden bg-gray-800 m-1">
                <SideBar setTogglSidebar={setTogglSidebar} />
              </div>
            }
            {
              !toggleSidebar &&
              <div className="h-full mt-5">
                <div className="grid grid-cols-10  mx-1 items-center p-2 rounded">
                  <div className="col-span-1">
                    <div className="flex flex-col border-r border-gray-900 pr-2">

                    </div>
                  </div>
                  <div className="col-span-5 flex flex-col border-l border-gray-900 px-1">

                  </div>
                  <div className="col-span-4 h-full">
                    <div className="grid grid-cols-3 h-full gap-1 rounded">
                      <div className="col-span-1 bg-green-500/[0.2] flex justify-center items-center">
                        <p>1</p>
                      </div>
                      <div className="col-span-1 bg-yellow-500/[0.2] flex justify-center items-center">
                        <p>x</p>
                      </div>
                      <div className="col-span-1 bg-orange-500/[0.1] flex justify-center items-center">
                        <p>2</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-10 bg-black mx-1 items-center p-2 rounded mb-2">
                  <div className="col-span-1">
                    <div className="flex flex-col border-r border-gray-900 pr-2">
                      <p className="text-[0.8rem]">25/01</p>
                      <p className="text-[0.8rem]">23:25</p>
                    </div>
                  </div>
                  <div className="col-span-5 flex flex-col border-l border-gray-900 px-1">
                    <p className="text-[0.8rem] font-bold">Brighton Albions</p>
                    <p className="text-[0.8rem] font-bold">Brighton Albions</p>
                  </div>
                  <div className="col-span-4 h-full">
                    <div className="grid grid-cols-3 h-full gap-1 rounded">
                      <div className="col-span-1 bg-green-500/[0.2] flex justify-center items-center">
                        <p>1.23</p>
                      </div>
                      <div className="col-span-1 bg-yellow-500/[0.2] flex justify-center items-center">
                        <p>1.23</p>
                      </div>
                      <div className="col-span-1 bg-orange-500/[0.1] flex justify-center items-center">
                        <p>1.23</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-10 bg-black mx-1 items-center p-2 rounded mb-2">
                  <div className="col-span-1">
                    <div className="flex flex-col border-r border-gray-900 pr-2">
                      <p className="text-[0.8rem]">25/01</p>
                      <p className="text-[0.8rem]">23:25</p>
                    </div>
                  </div>
                  <div className="col-span-5 flex flex-col border-l border-gray-900 px-1">
                    <p className="text-[0.8rem] font-bold">Brighton Albions</p>
                    <p className="text-[0.8rem] font-bold">Brighton Albions</p>
                  </div>
                  <div className="col-span-4 h-full">
                    <div className="grid grid-cols-3 h-full gap-1 rounded">
                      <div className="col-span-1 bg-green-500/[0.2] flex justify-center items-center">
                        <p>1.23</p>
                      </div>
                      <div className="col-span-1 bg-yellow-500/[0.2] flex justify-center items-center">
                        <p>1.23</p>
                      </div>
                      <div className="col-span-1 bg-orange-500/[0.1] flex justify-center items-center">
                        <p>1.23</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-10 bg-black mx-1 items-center p-2 rounded mb-2">
                  <div className="col-span-1">
                    <div className="flex flex-col border-r border-gray-900 pr-2">
                      <p className="text-[0.8rem]">25/01</p>
                      <p className="text-[0.8rem]">23:25</p>
                    </div>
                  </div>
                  <div className="col-span-5 flex flex-col border-l border-gray-900 px-1">
                    <p className="text-[0.8rem] font-bold">Brighton Albions</p>
                    <p className="text-[0.8rem] font-bold">Brighton Albions</p>
                  </div>
                  <div className="col-span-4 h-full">
                    <div className="grid grid-cols-3 h-full gap-1 rounded">
                      <div className="col-span-1 bg-green-500/[0.2] flex justify-center items-center">
                        <p>1.23</p>
                      </div>
                      <div className="col-span-1 bg-yellow-500/[0.2] flex justify-center items-center">
                        <p>1.23</p>
                      </div>
                      <div className="col-span-1 bg-orange-500/[0.1] flex justify-center items-center">
                        <p>1.23</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            }


            <div className="max_md:hidden">
              <Footer />
            </div>
          </div>

        </div>

      </div>



    </main>
  );
};

export default SportsBookHome;
