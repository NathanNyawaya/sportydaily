"use client";
import React from "react";
import Navbar from "../components/navbars/Navbar";
import BottomNav from "../components/navbars/Dropdown";
import SideBarAds from "../components/ads/SideBarAds";
import Footer from "../components/Footer";
import PredictionContent from "./components/PredictionContent";

const Predictions = () => {
  return (
    <main className="relative">
      <div className="flex min-h-screen flex-col text-black mx-auto max-w-screen-xl">
        <div className="sticky top-0">
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
          <div className="z-0 flex flex-col justify-center min-h-[60vh] mb-4 max_md:col-span-12 col-span-9">
            <div className="flex pb-10">
              <p className="mx-1 text-xl text-gray-100/[0.9] font-bold tracking-widest uppercase shadow-lg">Todays Offers {":"}</p>
            </div>
            <PredictionContent />
          </div>

          <div className="max_md:hidden col-span-3">
            <div className="flex flex-col gap-y-2 sticky top-40">
              <SideBarAds />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
};

export default Predictions;
