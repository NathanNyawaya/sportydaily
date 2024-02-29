"use client";
import React, { useEffect, useState } from "react";
import Blogs from "../components/Blogs";
import Navbar from "../components/navbars/Navbar";
import BottomNav from "../components/navbars/Dropdown";
import SideBarAds from "../components/ads/SideBarAds";
import Footer from "../components/Footer";
import LoadingStatus from "../status/Loading";
import SlidingAds from "../components/ads/SlidingAds";
import UpcomingMatches from "../components/features/Upcoming";
import Navigations from "../components/navbars/Navigations";
import SubscribeNewsletter from "../components/SubscribeNewsletter";
import { checkIsAuthenticated } from "../funcStore/isAuthenticated";


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
  const [loggedIn, setLoggedIn] = useState(false)
  useEffect(() => {
    const ksj = checkIsAuthenticated("101")
    if (ksj) {
      setLoggedIn(true);
    }
  }, []);


  return (
    <main className="relative">
      {
        activeLink && loggedIn ? (
          <main>
            <div className="mx-auto  min-h-screen max-w-screen-xl">
              <Navigations />

              <div className="grid grid-cols-12 gap-x-1 mt-5 mx-1 md:my-20 h-[200px] md:h-[300px] hidden">

                <div className="relative col-span-12  flex justify-center items-center">
                  <div className="items-center flex justify-center   p-0 w-full">
                    {/* <p className="text-sm text-gray-500/[0.9] tracking-wide">You are experiencing ThePitchBasket</p> */}
                    <div className="absolute top-0 bottom-0 right-0 left-0">
                      {/* <SlidingAds /> */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col text-black ">
                {/* main content */}
                <div className="grid grid-cols-4 gap-x-2">
                  <div className="col-span-4 flex flex-col md:col-span-3">
                    <Blogs />
                  </div>
                  <div className="max_md:hidden col-span-1 ">
                    <div className="flex flex-col gap-y-2 sticky top-40">
                      <SubscribeNewsletter />
                      <SideBarAds />
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
    </main>
  );
};

export default Home;
