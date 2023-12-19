"use client";
import axios from "axios";

import React, { useEffect, useState } from "react";
import LaunchIcon from "@mui/icons-material/Launch";
import LoadingStatus from "@/app/status/Loading";


const LinksMain = () => {
  const [liveEvents, setLiveEvents] = useState([]);
  const [empty, setEmpty] = useState(false);

  useEffect(() => {
    const asyncRunner = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER}/api/livestreams`
        );
        // console.log(res.data[0].live_events_data[0]);
        if (res.data != "Empty streams") {
          setLiveEvents(res.data[0].live_events_data);
        } else {
          setLiveEvents([]);
          setEmpty(true)
        }
      } catch (error) {
        console.error(error);
      }
    };
    asyncRunner();
  }, []);

  function correctImageLink(incorrectLink) {
    // Check if the link starts with "https://1.livesoccer.sx/https://".
    if (incorrectLink.startsWith("https://1.livesoccer.sx/https://")) {
      // Remove the incorrect prefix and return the corrected link.
      const correctedLink = incorrectLink.replace(
        "https://1.livesoccer.sx/https://",
        "https://"
      );
      return correctedLink;
    } else {
      // If the link is already correct, return it as-is.
      return incorrectLink;
    }
  }
  return (
    <div className="grid  grid-cols-12 gap-x-2">
      {/* links */}

      <div className="col-span-12">
        <div className="flex flex-col justify-center">
          <div className="flex mx-2 my-4">
            <h2 className="text-gray-400 font-bold text-[1rem]">
              {/* English Premier League */}
            </h2>
          </div>
          {liveEvents.length > 0 ? (
            liveEvents.map((stream, index) => (
              <div
                className="flex flex-col text-white cursor-pointer"
                key={index}
                onClick={() => {
                  alert("Service is under maintainance come back later!");
                  // if (stream.stream_links[0].url != "#") {
                  //   localStorage.setItem(
                  //     "e_data",
                  //     JSON.stringify(stream.stream_links)
                  //   );
                  //   window.location.replace(`/livestreams/${index}`);
                  // } else {
                  //   alert("Match not yet started");
                  // }
                }}
              >
                <div className="flex flex-col justify-start rounded my-1">
                  {/* title / league */}
                  <div className="flex items-center my-1">
                    <h2 className="text-[0.7rem] text-gray-300">

                    </h2>
                  </div>
                  <div className="grid grid-cols-12 text-white text-[0.9rem] mx-2 bg-gray-800 hover:bg-yellow-400/[0.1] p-3 col-span-6 items-center rounded">
                    <div className="md:col-span-7 col-span-5 flex flex-col gap-y-2">
                      <div className="flex gap-3">
                        <img
                          src={correctImageLink(stream.home_flag)}
                          alt="home_team_img"
                          className="w-[20px] h-auto rounded"
                        />
                        <p className="text-[0.8rem] text-white">
                          {stream.home_name}
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <img
                          src={correctImageLink(stream.away_flag)}
                          alt="away_team_img"
                          className="w-[20px] h-auto rounded"
                        />
                        <p className="text-[0.8rem] text-white">
                          {stream.away_name}
                        </p>
                      </div>
                    </div>
                    <div className="col-span-6 md:col-span-3 flex items-center gap-1" >
                      <div className="flex flex-col">
                        <p className="text-[0.8rem] text-gray-200">Kickoff</p>
                        <p className="text-[0.7rem] text-gray-200">{stream.time}
                        </p>

                      </div>
                      <div className="">
                        <p className="rounded bg-gray-400 text-[0.8rem] p-1 text-center">{
                          stream.status === "Uncoming" ? "Not Started" : stream.status
                        }</p>
                      </div>
                    </div>
                    <div className="col-span-1 md:col-span-2 flex justify-center">
                      <LaunchIcon
                        size="small"
                        className="hover:text-green-400 text-green-700"
                      />
                    </div>
                  </div>
                  {/*  */}
                </div>
              </div>
            ))
          ) : (
            <div className="flex text-white">
              {
                liveEvents.length === 0 && empty ?
                  <p>No Livestreams currently, come back later.</p> :
                  <div className="flex justify-center items-center w-full">
                    <LoadingStatus />
                  </div>
              }
            </div>
          )}
        </div>
      </div>
    </div>

  );
};

export default LinksMain;
