"use client";
import React from "react";
// import Blogs from "../components/Blogs";
import Navbar from "../components/navbars/Navbar";
import BottomNav from "../components/navbars/Dropdown";
import SideBarAds from "../components/ads/SideBarAds";
import HorizontalAds from "../components/ads/HorizontalAds";
// import FeaturedBlogs from "../components/featured/FeaturedBlogs";
import Footer from "../components/Footer";
import LinksMain from "./components/HighlightsMain";
import LiveStreamDisclaimer from "../legal_documents/LiveStreamDisclaimer";
import HorizontalAds3 from "../components/ads/Horizonatal3";

const Highlights = () => {
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

          <div className="flex flex-col max_md:col-span-12 col-span-9 z-0">
            <LinksMain />
            <div className="flex flex-col mt-4 gap-y-3">
              {/* <HorizontalAds3 /> */}
              <LiveStreamDisclaimer />
            </div>
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

export default Highlights;
