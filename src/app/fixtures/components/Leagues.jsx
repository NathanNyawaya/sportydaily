"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { formatDateTimeEAT } from "@/app/funcStore/toReadableTime";


const LeaguesFixtures = ({ activeLeague }) => {
  const [leagues, setLeagues] = useState([])
  const [eventsData, setEventsData] = useState([])



  const fetcher = async () => {
    const options = {
      method: 'GET',
      url: 'https://football536.p.rapidapi.com/fixtures',
      params: {
        status: 'SCHEDULED',
        date_from: 'today'
      },
      headers: {
        'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_FREE_KEY,
        'X-RapidAPI-Host': 'football536.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options)
      if (response) {
        setLeagues(response.data.data)
      }
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetcher()
  }, [])

  const filterEvents = () => {
    const filteredData = leagues.filter(event_ => {
      return event_.league.name == activeLeague
    })
    console.log(filteredData)
    if (filteredData.length > 0) {
      setEventsData(filteredData)
    } else {
      setEventsData([])
    }
  }

  useEffect(() => {
    filterEvents()
  }, [leagues, activeLeague])

  return (
    <div className="grid  grid-cols-12 gap-x-2">
      {/* links */}
      <div className="col-span-12 flex items-center text-white m-2 text-[0.8rem] gap-x-1">
        <p className="bg-gray-500 p-1 rounded">All</p>
        <p className="bg-gray-700 p-1 rounded">Today</p>

      </div>

      <div className="col-span-12">
        <div className="flex flex-col justify-center">
          <div className="flex w-full flex-col justify-start rounded my-1">
            {/* fixtures */}


            {
              eventsData && eventsData.length > 0 ? eventsData.map((event_, index) => {
                const kickoff_time_obj = formatDateTimeEAT(event_.start_time)
                return (
                  <div key={index} className="grid grid-cols-12 text-white text-[0.9rem] mx-2 mb-1 bg-gray-800 hover:bg-yellow-400/[0.1] p-3 col-span-6 items-center rounded">
                    <div className="md:col-span-7 col-span-7 flex flex-col gap-y-2">
                      <div className="flex gap-3">
                        <p className="text-[0.8rem] text-white">
                          {event_.home_team.name}
                        </p>
                      </div>
                      <div className="flex gap-3">

                        <p className="text-[0.8rem] text-white">
                          {event_.away_team.name}
                        </p>
                      </div>
                    </div>
                    <div className="col-span-5 max_sm:col-span-5 md:col-span-3 flex gap-2 items-center max_sm:justify-between" >
                      <div className="flex flex-col">
                        <p className="text-[0.8rem] text-gray-200">Kickoff</p>
                        <p className="text-[0.7rem] text-gray-200">{kickoff_time_obj.date_}{" "}{kickoff_time_obj.time_}{" "}{kickoff_time_obj.timezone}
                        </p>

                      </div>
                      <div className="">
                        {/* <p className="rounded bg-gray-400 text-[0.8rem] p-1 text-center">{
                        stream.status === "Uncoming" ? "Not Started" : stream.status
                      }</p> */}
                      </div>
                    </div>
                  </div>
                )
              }) :

                <div className="flex justify-center items-center">
                  <p className="text-white">No events at the moment</p>
                </div>
            }

          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaguesFixtures;
