"use client";
import React, { useState } from "react";
import Navbar from "../components/navbars/Navbar";
import BottomNav from "../components/navbars/Dropdown";
import Footer from "../components/Footer";

import LeaguesNavigation from "./components/LeaguesNavigation";
import LeaguesFixtures from "./components/Leagues";
import Filters from "../bet/SP/SPB/components/Filters";
import Standings from "../components/stats/Standings";
import Navigations from "../components/navbars/Navigations";




const Fixtures = () => {
  const [activeLeague, setActiveLeague] = useState("Serie A")
  return (
    <main className="relative">
      <div className="flex mx-1 min-h-screen flex-col mx-auto max-w-screen-xl">
        <Navigations/>
       
        {/* main content */}
        <div className="grid grid-cols-12 gap-x-2 mt-10">

          {/* side-bar */}
          {/* <div className="md:col-span-3 col-span-12">
            <LeaguesNavigation
              activeLeague={activeLeague}
              setActiveLeague={setActiveLeague}
            />
          </div> */}

          <div className="flex flex-col max_md:col-span-12 col-span-9 z-0 mx-1">
            <LeaguesFixtures activeLeague={activeLeague} />
          </div>
          <div className="flex flex-col max_md:col-span-12 col-span-9 z-0">
            <Standings/>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
};

export default Fixtures;
