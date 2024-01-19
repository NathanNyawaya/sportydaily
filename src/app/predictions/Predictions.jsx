"use client";
import React from "react";
import Navbar from "../components/navbars/Navbar";
import BottomNav from "../components/navbars/Dropdown";
import SideBarAds from "../components/ads/SideBarAds";
import Footer from "../components/Footer";
import PredictionContent from "./components/PredictionContent";
import HorizontalAds from "../components/ads/HorizontalAds";
import HorizontalAds3 from "../components/ads/Horizonatal3";
import FeaturedMatches from "../components/features/FeaturedMatches";
import FeaturedBlogs from "../components/featured/FeaturedBlogs";

const Predictions = () => {
  return (
    <main className="">
      <div className="relative flex min-h-screen flex-col text-black mx-auto max-w-screen-xl">
        <div className="sticky top-0 z-40">
          {/* navigations */}
          <Navbar />
          <div className="bg-black">
            <div className="mx-auto max-w-screen-xl">
              <BottomNav />
            </div>
          </div>
        </div>
        {/* main content */}
        <div className="grid grid-cols-12 gap-x-2 mb-4">
          <div className="col-span-12 my-10">
            {/* <HorizontalAds /> */}
          </div>
          <div className="flex flex-col justify-center min-h-[60vh] mb-4 max_md:col-span-12 col-span-9 z-0">
            <div className="flex pb-10">
              <p className="mx-1 text-xl text-gray-100/[0.9] font-bold tracking-widest uppercase shadow-lg">Todays Offers {":"}</p>
            </div>
            <PredictionContent />
            <HorizontalAds3 />
          </div>

          <div className="max_md:hidden col-span-3">
            <div className="flex flex-col gap-y-2 sticky top-40">
              <SideBarAds />
              {/* <FeaturedBlogs/> */}
              {/* <FeaturedMatches /> */}
            </div>

          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
};

export default Predictions;
