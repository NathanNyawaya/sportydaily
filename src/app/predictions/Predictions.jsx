"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/navbars/Navbar";
import BottomNav from "../components/navbars/Dropdown";
import SideBarAds from "../components/ads/SideBarAds";
import HorizontalAds from "../components/ads/HorizontalAds";
import Footer from "../components/Footer";
import PredictionContent from "./components/PredictionContent";


{/* <a href='https://pngtree.com/freepng/18-icon_8632027.html'>png image from pngtree.com/</a> */ }
const Predictions = () => {

  return (
    <main className="relative">
      <div className="flex min-h-screen flex-col text-black mx-auto max-w-screen-xl">
        <div className="z-100 sticky top-0 z-50">
          {/* navigations */}
          <Navbar />
          <div className="bg-black">
            <div className="mx-auto max-w-screen-xl">
              <BottomNav />
            </div>
          </div>
        </div>
        {/* main content */}
        <div className="grid grid-cols-12 gap-x-2">
          <div className="flex flex-col justify-center min-h-[60vh] max_md:col-span-12 col-span-9 z-0">
            <div className="flex py-10">
              <p className="mx-1 text-xl text-gray-100/[0.9] font-bold tracking-widest uppercase shadow-lg">Today's Offers:</p>
            </div>
            <PredictionContent />
          </div>


          <div className="max_md:hidden col-span-3">
            <div className="flex flex-col gap-y-2 sticky top-40">
              <SideBarAds />
              {/* <FeaturedBlogs /> */}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
};

export default Predictions;
