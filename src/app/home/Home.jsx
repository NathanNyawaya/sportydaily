"use client";
import React, { useEffect, useState } from "react";
import Blogs from "../components/Blogs";
import Navbar from "../components/navbars/Navbar";
import BottomNav from "../components/navbars/Dropdown";
import SideBarAds from "../components/ads/SideBarAds";
import HorizontalAds from "../components/ads/HorizontalAds";
// import FeaturedBlogs from "../components/featured/FeaturedBlogs";
import Footer from "../components/Footer";

const Home = () => {
  const [showAds, setShowAds] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowAds(true);
    }, 4000);
  }, []);
  return (
    <main className="relative">
      <div className="mx-auto max-w-screen-xl">
        <div className="sticky top-0 z-50 ">
          {/* navigations */}
          <Navbar />
          <div className="bg-black">
            <div className="">
              <BottomNav />
            </div>
          </div>
        </div>
        <div className=" flex flex-col text-black">
          {/* main content */}
          <div className="grid grid-cols-4 gap-x-2">
            {showAds && (
              <div className="col-span-4 mt-4 mb-6">
                <HorizontalAds />
              </div>
            )}
            <div className="col-span-4 md:col-span-3 z-0">
              <Blogs />
            </div>
            <div className="max_md:hidden col-span-1 mb-20">
              <div className="flex flex-col gap-y-2 sticky top-40">
                <SideBarAds />
                {/* <FeaturedBlogs /> */}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default Home;
