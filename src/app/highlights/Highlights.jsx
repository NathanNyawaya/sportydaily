"use client";
import React, { useEffect, useState } from "react";
import SideBarAds from "../components/ads/SideBarAds";
import Footer from "../components/Footer";
import LinksMain from "./components/HighlightsMain";
import LiveStreamDisclaimer from "../legal_documents/LiveStreamDisclaimer";
import Navigations from "../components/navbars/Navigations";
import LoadingStatus from "../status/Loading";
import { checkIsAuthenticated } from "../funcStore/isAuthenticated";

const Highlights = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  useEffect(() => {
    const ksj = checkIsAuthenticated("1023")
    if (ksj) {
      setLoggedIn(true);
    }
  }, []);
  return (
    <main className="relative">
      {
        loggedIn && (
          <div className="flex min-h-screen flex-col text-black mx-auto max-w-screen-xl">
            <Navigations />
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
        )
      }
      {!loggedIn && (
        <div className="flex flex-col justify-center items-center h-screen w-screen">
          <p className="text-2xl md:text-3xl font-bold p-1 text-white tracking-wider">
            ThePitchBasket™
          </p>
          <LoadingStatus />
        </div>
      )}
    </main>
  );
};

export default Highlights;
