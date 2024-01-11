"use client";
import React, { useEffect, useState } from "react";

import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import BottomNavBar from "../../components/navbar/Dropdown";
import SlidingAds from "../../components/ads/SlidingAds";
import SideBar from "./components/SideBar";
import axios from "axios";
import { formatDateTimeEAT } from "@/app/funcStore/toReadableTime";


const MobileFixed = ({ setTogglSidebar }) => {
  return (
    <div className="bg-black max-h-screen max-w-screen">
      <div className="grid grid-cols-3 gap-x-2">
        <div className="col-span-1 bg-gray-800 flex justify-center items-center p-3" onClick={() => setTogglSidebar(prev => !prev)}>
          <p className="font-bold text-sm">Menu</p>
        </div>
        <div className="col-span-1 bg-gray-800 flex justify-center items-center p-3">
          <p className="font-bold text-sm">Home</p>
        </div>
        <div className="col-span-1 bg-gray-800 flex justify-center items-center p-3">
          <p className="font-bold text-sm">Betlsip</p>
        </div>
      </div>
    </div>
  )
}


const SportsBookHome = () => {
  const [toggleSidebar, setTogglSidebar] = useState(false)

  const [matches, setMatches] = useState([])

  const fetcher = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER}/api/betgreen/sp/leagues`)

      if (res) {
        // console.log(res.data)
        const premierLeague = res.data.leagues.filter(item => {
          if (item.name === "England - Premier League") {
            // console.log(item.name)
            return item
          }
        })
      }

    } catch (error) {
      console.error(error)
    }
  }



  const fetcherMarkets = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER}/api/betgreen/sp/markets`)

      if (res) {
        // console.log(res.data)
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
    fetcher()
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
      <div className="z-50 sticky top-0 z-50 mx-auto max-w-screen-xl">
        {/* navigations */}
        <Navbar />
        <div className="bg-black">
          <div className="mx-auto max-w-screen-xl">
            <BottomNavBar />
          </div>
        </div>

        {/* mobile navigations */}
        <div className=" fixed left-0 right-0 bottom-0">
          <MobileFixed setTogglSidebar={setTogglSidebar} />
        </div>
      </div>

      {/* main content */}
      <div className="mx-auto max-w-screen-xl mb-10">
        <div className="min-h-[90vh] grid grid-cols-11 w-full mx-auto">

          <div className="max_md:hidden col-span-2 bg-gray-800">
            <SideBar />
          </div>



          <div className="col-span-12 md:col-span-9 flex flex-col">
            <div className="">
              <SlidingAds setTogglSidebar={setTogglSidebar} />
            </div>
            {
              toggleSidebar &&
              <div className="bg-gray-700 min-md:hidden bg-gray-800 m-1">
                <SideBar setTogglSidebar={setTogglSidebar} />
              </div>
            }
            {
              !toggleSidebar &&
              <div className="h-full mt-5 w-full mx-auto">
                <div className="grid grid-cols-10  mx-1 items-center p-2 rounded">
                  <div className="col-span-1">
                    <div className="flex flex-col border-r border-gray-900 pr-2">

                    </div>
                  </div>
                  <div className="col-span-5 flex flex-col border-l border-gray-900 px-1">

                  </div>
                  <div className="col-span-4 h-full">
                    <div className="grid grid-cols-3 h-full gap-1 rounded">
                      <div className="col-span-1  flex justify-center items-center">
                        <p className="text-[0.8rem] font-bold">1</p>
                      </div>
                      <div className="col-span-1   flex justify-center items-center">
                        <p className="text-[0.8rem] font-bold">x</p>
                      </div>
                      <div className="col-span-1   flex justify-center items-center">
                        <p className="text-[0.8rem] font-bold">2</p>
                      </div>
                    </div>
                  </div>
                </div>
                {
                  matches.length > 0 ? matches.map((match, index) => {
                    if (match.periods.num_0.money_line) {
                      console.log(match)
                      const { date, time } = formatDateTime(match.starts, timeZone)

                      return (
                        <div key={index} className="grid grid-cols-10 bg-black mx-1 items-center p-2 border-gray-700 border-b">
                          <div className="col-span-1">
                            <div className="flex flex-col border-r border-gray-900 pr-2">
                              <p className="text-[0.6rem]">{date}</p>
                              <p className="text-[0.6rem]">{time}</p>
                            </div>
                          </div>
                          <div className="col-span-5 flex flex-col border-l border-gray-900 px-1">
                            <p className="text-[0.7rem] font-bold">{match.home}</p>
                            <p className="text-[0.7rem] font-bold">{match.away}</p>
                          </div>
                          <div className="col-span-4 h-full">
                            <div className="grid grid-cols-3 h-full gap-1 rounded">
                              <div className="col-span-1 bg-gray-500/[0.2] hover:bg-gray-500 flex justify-center items-center">
                                <p className="text-gray-100 text-[0.7rem] font-bold">{match.periods.num_0.money_line && (match.periods.num_0.money_line.home).toFixed(3)}</p>
                              </div>
                              <div className="col-span-1 bg-gray-500/[0.2] hover:bg-gray-500 flex justify-center items-center">
                                <p className="text-gray-100 text-[0.7rem] font-bold">{match.periods.num_0.money_line && (match.periods.num_0.money_line.draw).toFixed(3)}</p>
                              </div>
                              <div className="col-span-1 bg-gray-500/[0.2] hover:bg-gray-500 flex justify-center items-center">
                                <p className="text-gray-100 text-[0.7rem] font-bold">{match.periods.num_0.money_line && (match.periods.num_0.money_line.away).toFixed(3)}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    }

                  }) : ""
                }

              </div>
            }


            <div className="min_md:my-10 mt-10 w-full">
              <Footer />
            </div>
            
          </div>
        </div>

      </div>



    </main>
  );
};

export default SportsBookHome;
