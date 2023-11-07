"use client";
import React from "react";
// import Blogs from "../../components/Blogs";
import Navbar from "../../components/navbars/Navbar";
import BottomNav from "../../components/navbars/Dropdown";
import SideBarAds from "../../components/ads/SideBarAds";
// import HorizontalAds from "../../components/ads/HorizontalAds";
// import FeaturedBlogs from "../../components/featured/FeaturedBlogs";
import Footer from "../../components/Footer";
import MatchLinks from "./MatchLinks";
import Link from "next/link";
import LiveStreamDisclaimer from "@/app/legal_documents/LiveStreamDisclaimer";
import HorizontalAds3 from "@/app/components/ads/Horizonatal3";

const MatchLinkLayout = () => {
  return (
    <main className="relative">
      <div className="flex min-h-[30vh] flex-col text-black mx-auto max-w-screen-xl">
        <div className="z-100 sticky top-0 z-50">
          {/* navigations */}
          <Navbar />
          <div className="bg-black">
            <div className="mx-auto max-w-screen-xl">
              <BottomNav />
            </div>
          </div>
        </div>
        <div className="flex my-4">
          <Link href="/livestreams" className="text-white">
            Back
          </Link>
        </div>
        {/* main content */}
        <div className="grid grid-cols-4 gap-x-2">
          <div className="col-span-4 mt-4 mb-6">{/* <HorizontalAds /> */}</div>

          <div className="max_md:col-span-4 flex flex-col md:col-span-3 z-0 max_sm:mx-2">
            <MatchLinks />
            {/* ADS */}
            <div className="m-1">
              <HorizontalAds3 />
            </div>
            <div className="">
              <LiveStreamDisclaimer />
            </div>
          </div>

          <div className="max_md:hidden col-span-1">
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

export default MatchLinkLayout;
