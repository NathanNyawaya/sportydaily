"use client";
import React, { useEffect, useState } from "react";
import { Select } from '@mantine/core';
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import BottomNavBar from "../../components/navbar/Dropdown";
import SlidingAds from "../../components/ads/SlidingAds";
import SideBar from "./components/SideBar";
import axios from "axios";
import WidgetsIcon from '@mui/icons-material/Widgets';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';


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
        <div className=" fixed left-0 right-0 bottom-0">
          <MobileFixed setTogglSidebar={setTogglSidebar} />
        </div>
      </div>



      <div className="flex w-full p-1">
        <div className="flex flex-col justify-center items-center bg-gray-200 border border-gray-800 p-1 shadow-l">
          <SportsSoccerIcon size="small" color="black" className="bg-black rounded-full" />
          <p className="text-[0.8rem] font-medium hover text-gray-500 ">Soccer</p>
        </div>
      </div>

      <div className=" flex flex-col w-full  sticky top-0 z-30 ">
        <div className="grid grid-cols-4">
          <div className="col-span-2">
            <div class="flex w-full">
              <select id="states"
                class="bg-gray-200 border border-gray-400 text-gray-900 text-sm border-s-gray-100 dark:border-s-gray-700 border-s-2 focus:ring-green-500 focus:border-green-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 p-1">
                <option selected>Premier League</option>
                <option value="CA">Premier League</option>
                <option value="CA">UEFA</option>
                <option value="CA">Siria</option>
              </select>
            </div>
          </div>
          <div className="col-span-2 flex ">
            <div class="flex w-full">
              <select id="states"
                class="bg-gray-200 border border-gray-400 text-gray-900 text-sm border-s-gray-100 dark:border-s-gray-700 border-s-2 focus:ring-green-500 focus:border-green-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 p-1">
                <option selected>Today</option>
                <option value="CA">Next 24hrs</option>
                <option value="CA">Next 48hrs</option>
                <option value="CA">This Week</option>
              </select>
            </div>
          </div>

        </div>
        <div className="grid grid-cols-4 hidden">
          <div className="col-span-2 flex ">
            {/* <div class="flex w-full">
              <select id="states"
                class="bg-gray-200 border border-gray-400 text-gray-900 text-sm border-s-gray-100 dark:border-s-gray-700 border-s-2 focus:ring-green-500 focus:border-green-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 p-1">
                <option selected>League</option>
                <option value="CA">California</option>
                <option value="TX">Texas</option>
                <option value="WH">Washinghton</option>
                <option value="FL">Florida</option>
                <option value="VG">Virginia</option>
                <option value="GE">Georgia</option>
                <option value="MI">Michigan</option>
              </select>
            </div> */}
          </div>
          <div className="col-span-2">
            <div class="flex w-full">
              <select id="states"
                class="bg-gray-200 border border-gray-400 text-gray-900 text-sm border-s-gray-100 dark:border-s-gray-700 border-s-2 focus:ring-green-500 focus:border-green-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 p-1">
                <option selected>Today</option>
                <option value="CA">Tomorrow</option>

              </select>
            </div>
          </div>
        </div>
      </div>

      {/* main content */}
      <div className="mx-auto max-w-screen-xl mb-10">
        <div className="min-h-[90vh] grid grid-cols-11 w-full mx-auto">

          <div className=" max_md:hidden col-span-2 bg-gray-800">
            <SideBar />
          </div>



          <div className=" col-span-12 md:col-span-9 flex flex-col">
            <div className="hidden">
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
              <div className="h-full  w-full mx-auto">
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
                      // console.log(match)
                      const { date, time } = formatDateTime(match.starts, timeZone)

                      return (
                        <div key={index} className="grid grid-cols-10  mx-1 items-center p-2 border-gray-700 border-b">
                          <div className="col-span-1">
                            <div className="flex flex-col border-r border-gray-500 pr-2">
                              <p className="text-[0.6rem]">{date}</p>
                              <p className="text-[0.6rem]">{time}</p>
                            </div>
                          </div>
                          <div className="col-span-5 flex flex-col  px-2">
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

      {/* betslip */}
    </main>
  );
};

export default SportsBookHome;
