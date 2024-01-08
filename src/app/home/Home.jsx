"use client";
import React, { useEffect, useState } from "react";
import Blogs from "../components/Blogs";
import Navbar from "../components/navbars/Navbar";
import BottomNav from "../components/navbars/Dropdown";
import SideBarAds from "../components/ads/SideBarAds";
import Footer from "../components/Footer";
import LoadingStatus from "../status/Loading";
import SlidingAds from "../components/ads/SlidingAds";


const Home = () => {
  const [showAds, setShowAds] = useState(false);
  const [activeLink, setActiveLink] = useState(false)

  useEffect(() => {
    const l_raw = localStorage.getItem("l_")
    if (l_raw) {
      localStorage.removeItem("l_")
    }
    setActiveLink(true)

    // setTimeout(() => {
    //   setShowAds(true);
    // }, 4000);
  }, []);


  return (
    <div className="">
      {
        activeLink ? (
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
              <div className="grid grid-cols-12 items-center my-10">
                <div className="col-span-4"></div>
                <div className="col-span-12 md:col-span-8 flex justify-center items-center">
                  <div className="items-center flex justify-center mb-40 relative  p-0 w-full">
                    <p className="text-sm text-gray-500/[0.9] tracking-wide">You are experiencing ThePitchBasket</p>
                    <div className="absolute top-0 bottom-0 right-0 left-0">
                      <SlidingAds />
                    </div>
                  </div>
                </div>
              </div>
              <div className=" flex flex-col text-black">
                {/* main content */}
                <div className="grid grid-cols-4 gap-x-2">
                  {showAds && (
                    <div className="col-span-4 mt-4 mb-6">
                      {/* <HorizontalAds3 /> */}
                    </div>
                  )}

                  <div className="col-span-4 flex flex-col md:col-span-3 z-0">
                    <Blogs />
                    {/* {showAds && (
                
              )} */}
                  </div>
                  <div className="max_md:hidden col-span-1 mb-10">
                    <div className="flex flex-col gap-y-2 sticky top-40">
                      <SideBarAds />
                      {/* <FeaturedBlogs /> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* <AdComponent/> */}

              <Footer />
            </div>
          </main>
        ) : (
          <div className="flex flex-col justify-center items-center h-screen w-screen">
            <p className="text-2xl md:text-3xl font-bold p-1 text-white tracking-wider">
              ThePitchBasket™
            </p>
            <LoadingStatus />
          </div>
        )
      }
    </div>
  );
};

export default Home;
