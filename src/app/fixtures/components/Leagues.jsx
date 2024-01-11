"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { formatDateTimeEAT } from "@/app/funcStore/toReadableTime";
import { Group, Collapse, Box } from "@mantine/core";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FixtureCollapse from "./Collapse";

const LeaguesFixtures = ({ activeLeague }) => {
  const [leagues, setLeagues] = useState([])
  const [eventsData, setEventsData] = useState([])
  const [loading, setLoading] = useState(true)



  const fetcher = async () => {
    setLoading(true)
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
      if (response && response.data) {
        if (response.data.data.length > 0) {
          setLeagues(response.data.data)
        }
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
      setLoading(false)
    } else {
      setEventsData([])
      setLoading(false)

    }
    setLoading(false)
  }

  useEffect(() => {
    filterEvents()
  }, [leagues, activeLeague])



  return (
    <div className="grid  grid-cols-12 gap-x-2">
      {/* links */}
      <div className="col-span-12 flex items-center text-white m-2 text-[0.8rem] gap-x-1">
        <p className="bg-gray-500 p-1 rounded">All</p>

      </div>

      <div className="col-span-12">
        <div className="flex flex-col justify-center">
          <div className="flex w-full flex-col justify-start rounded my-1">
            {/* fixtures */}


            {
              loading ? (
                <div className="flex justify-center items-center">
                  <p className="text-white">
                    {"Loading..."}
                  </p>
                </div>
              ) :
                (
                  eventsData && eventsData.length > 0 ? eventsData.map((event_, index) => {
                    const kickoff_time_obj = formatDateTimeEAT(event_.start_time)
                    return (

                      <FixtureCollapse opened={false} event_={event_} kickoff_time_obj={kickoff_time_obj} key={index} />
                    )
                  }) :
                    <div className="flex justify-center items-center">
                      <p className="text-white">
                        Loading...
                      </p>
                    </div>
                )
            }

          </div>
        </div>
      </div>
    </div >
  );
};

export default LeaguesFixtures;
