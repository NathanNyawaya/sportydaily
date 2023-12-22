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
          <div className="col-span-12 mt-4 mb-6">
            {/* <HorizontalAds /> */}
          </div>
          {/* side-bar */}

          <div className="flex flex-col min-h-[65vh] max_md:col-span-12 col-span-9 z-0">

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
