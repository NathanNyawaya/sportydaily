"use client";
import React from "react";
import Blogs from "../../components/Blogs";
import Navbar from "../../components/navbars/Navbar";
import BottomNav from "../../components/navbars/Dropdown";
import SideBarAds from "../../components/ads/SideBarAds";
import HorizontalAds from "../../components/ads/HorizontalAds";
import FeaturedBlogs from "../../components/featured/FeaturedBlogs";
import Footer from "../../components/Footer";
import MatchLinks from "./MatchLinks";
import Link from "next/link";

const MatchLinkLayout = () => {
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

        <div className="mx-auto max-w-screen-xl">
          <Link href="/livestreams">Back</Link>
        </div>
      </div>
      <div className="flex min-h-screen flex-col text-black mx-auto max-w-screen-xl">
        {/* main content */}
        <div className="grid grid-cols-4 gap-x-2">
          <div className="col-span-4 mt-4 mb-6">
            {/* <HorizontalAds /> */}
          </div>
          <div className="col-span-3 z-0">
            <MatchLinks />
          </div>
          <div className="col-span-1 mb-20">
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

export default MatchLinkLayout;
