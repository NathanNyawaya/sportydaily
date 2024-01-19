"use client";
import React, { useState } from "react";
import Navbar from "../components/navbars/Navbar";
import BottomNav from "../components/navbars/Dropdown";
import Footer from "../components/Footer";

import LeaguesNavigation from "./components/LeaguesNavigation";
import LeaguesFixtures from "./components/Leagues";
import Filters from "../bet/SP/SPB/components/Filters";


const Fixtures = () => {
  const [activeLeague, setActiveLeague] = useState("Serie A")
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
        <div className=" sticky top-0 z-50">
          {/* navigations */}
          {/* <Navbar /> */}
          <div className="bg-black">
            <div className="mx-auto max-w-screen-xl">
              <BottomNav />
            </div>
          </div>
        </div>
        {/* main content */}
        <div className="grid grid-cols-12 gap-x-2">

          {/* side-bar */}
          <div className="md:col-span-3 col-span-12 hidden">
            <LeaguesNavigation
              activeLeague={activeLeague}
              setActiveLeague={setActiveLeague}
              
            />

          </div>

          <div className="min-h-[65vh] flex flex-col max_md:col-span-12 col-span-9 z-0">
            <LeaguesFixtures activeLeague={activeLeague} />
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
};

export default Fixtures;
