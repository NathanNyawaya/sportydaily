"use client";
import React, { useEffect, useState } from "react";
import { Select } from '@mantine/core';
import Navbar from "../../components/navbar/Navbar";
// import Footer from "../../components/footer/Footer";
import BottomNavBar from "../../components/navbar/Dropdown";
// import SideBar from "./components/SideBar";
import axios from "axios";
// import WidgetsIcon from '@mui/icons-material/Widgets';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import CenterMain from "./components/CenterMain";
import '@mantine/carousel/styles.css';
import SlidingAds from "../../components/ads/SlidingAds";

const MobileFixed = ({ setTogglSidebar }) => {
  return (
    <div className="bg-green-900/[0.9] max-h-screen max-w-screen">
      <div className="grid grid-cols-3 gap-x-2">
        <div className="col-span-1  flex justify-center items-center p-3" onClick={() => setTogglSidebar(prev => !prev)}>
          <p className="font-bold text-sm">
            <WidgetsOutlinedIcon color="" />
          </p>
        </div>
        <div className="col-span-1  flex justify-center items-center p-3">
          <p className="font-bold text-sm">
            <SportsSoccerIcon color="" />
          </p>
        </div>
        <div className="col-span-1  flex justify-center items-center p-3" onClick={() => setTogglSidebar(prev => !prev)}>
          <p className="font-bold text-sm">Betlsip (5)</p>
        </div>
      </div>
    </div >
  )
}


const SportsBookHome = () => {
  const [toggleSidebar, setTogglSidebar] = useState(false)
  const [matches, setMatches] = useState([])



  const fetcherMarkets = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER}/api/betgreen/sp/markets`)

      if (res) {
        console.log(res.data)
        const premierLeagueEvents = await res.data.filter(item => {
          if (item.league_name === "England - Premier League") {
            // console.log(item)
            return item
          }
        })
        if (premierLeagueEvents.length > 0) {
          // console.log(premierLeagueEvents.length)
          setMatches(premierLeagueEvents)
        }

      }

    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    // fetcher()
    fetcherMarkets()
  }, [])

  function formatDateTime(dateTimeString, timeZone) {
    const optionsDate = {
      day: 'numeric',
      month: 'numeric',
    };

    const optionsTime = {
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
      timeZone: timeZone,
    };

    const date = new Date(dateTimeString);

    // Hardcode adding 3 hours
    date.setHours(date.getHours() + 3);

    const formattedDate = date.toLocaleString('en-GB', optionsDate);
    const formattedTime = date.toLocaleString('en-GB', optionsTime);

    return { date: formattedDate, time: formattedTime };
  }
  const timeZone = 'Africa/Nairobi'; // EAT timezone

  // const formattedDateTime = formatDateTime(dateTimeString, timeZone);



  return (
    <main className="relative">
      <div className="z-50 sticky top- z-50 mx-auto max-w-screen-xl">
        {/* navigations */}
        <Navbar />
        <div className="bg-black ">
          <div className="mx-auto max-w-screen-xl">
            <BottomNavBar />
          </div>
        </div>



        {/* mobile navigations */}
        <div className="md:hidden fixed left-0 right-0 bottom-0">
          <MobileFixed setTogglSidebar={setTogglSidebar} />
        </div>
      </div>

      <div className="mx-auto max-w-screen-xl flex flex-col">
        <div className="">
          <SlidingAds setTogglSidebar={setTogglSidebar} />
        </div>
        <div className="flex w-full p-1 md:hidden">
          <div className="flex flex-col justify-center items-center bg-gray-200 border border-gray-800 p-1 shadow-l">
            <SportsSoccerIcon size="small" color="black" className="bg-black rounded-full" />
            <p className="text-[0.8rem] font-medium hover text-gray-500 ">Soccer</p>
          </div>
        </div>

      </div>
      {/* main content */}
      <CenterMain />

      {/* betslip */}
    </main>
  );
};

export default SportsBookHome;
