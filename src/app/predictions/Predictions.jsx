"use client";
import React, { useEffect, useState } from "react";
import SideBarAds from "../components/ads/SideBarAds";
import Footer from "../components/Footer";
import PredictionContent from "./components/PredictionContent";
import HorizontalAds3 from "../components/ads/Horizonatal3";
import Navigations from "../components/navbars/Navigations";
import { useRouter } from "next/navigation";
import jwt_decode from "jwt-decode";
import { LoadingOverlay } from "@mantine/core";
import { checkIsAuthenticated } from "../funcStore/isAuthenticated";
import LoadingStatus from "../status/Loading";

const Predictions = () => {

  const [loggedIn, setLoggedIn] = useState(false)
  useEffect(() => {
    const ksj = checkIsAuthenticated("1111")
    if (ksj) {
      setLoggedIn(true);
    }
  }, []);
  return (
    <main className="">
      {
        loggedIn && <div className="relative flex min-h-screen flex-col text-black mx-auto max-w-screen-xl">
          <Navigations />
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

export default Predictions;
