"use client";
import React from "react";
import Blogs from "../components/Blogs";
import Navbar from "../components/navbars/Navbar";
import BottomNav from "../components/navbars/Dropdown";
import SideBarAds from "../components/ads/SideBarAds";
import HorizontalAds from "../components/ads/HorizontalAds";
import FeaturedBlogs from "../components/featured/FeaturedBlogs";
import Footer from "../components/Footer";
import LinksMain from "./components/LinksMain";

const LiveStream = () => {
  return (
    <main className="relative">
      <div className="z-100 sticky top-0 z-50">
        {/* navigations */}
        <Navbar />
        <div className="bg-black">
          <div className="mx-auto max-w-screen-xl">
            <BottomNav />
          </div>
        </div>
      </div>
      <div className="flex min-h-screen flex-col text-black mx-auto max-w-screen-xl">
        {/* main content */}
        <div className="grid grid-cols-12 gap-x-2">
          <div className="col-span-12 mt-4 mb-6">
            <HorizontalAds />
          </div>
          {/* side-bar */}
          <div className="col-span-1">
            <div className="sticky top-40 bg-white flex flex-col gap-y-4 min-h-[30vh] p-1">
              <p className="px-2 rounded bg-gray-300 cursor-pointer font-bold text m-1">
                EPL
              </p>
              <p className="px-2 rounded bg-gray-300 cursor-pointer font-bold text m-1">
                UEFA
              </p>
              <p className="px-2 rounded bg-gray-300 cursor-pointer font-bold text m-1">
                EUROPA
              </p>
              <p className="px-2 rounded bg-gray-300 cursor-pointer font-bold text m-1">
                LALIGA
              </p>
              <p className="px-2 rounded bg-gray-300 cursor-pointer font-bold text m-1">
                SERIA
              </p>
            </div>
          </div>
          <div className="col-span-8 z-0">
            <LinksMain />
          </div>
          <div className="col-span-2 mb-20">
            <div className="flex flex-col gap-y-2 sticky top-40">
              <SideBarAds />
              {/* <FeaturedBlogs /> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default LiveStream;
