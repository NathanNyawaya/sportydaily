"use client"
import axios from "axios";

import React, { useEffect, useState } from "react";

const LinksMain = () => {
  const [liveEvents, setLiveEvents] = useState([]);

  useEffect(() => {
    const asyncRunner = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER}/api/livestreams`
        );
        console.log(res.data[0].live_events_data);
        if (res.data != "Empty streams") {
          setLiveEvents(res.data[0].live_events_data);
        } else {
          setLiveEvents([]);
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
          <div className="flex flex-col justify-center">
            {liveEvents.length > 0 &&
              liveEvents.flatMap((stream, index) => (
                <div className="flex flex-col text-white" key={index}>
                  <div className="bg-white rounded p-3 my-2 grid grid-cols-12 items-center text-center">
                    <div className="flex flex-col col-span-2">
                      <p className="text-black  text-[.7rem]">
                        {stream.status === "Uncoming"
                          ? "Not Started"
                          : stream.status}
                      </p>
                      <p className="text-black text-[.7rem]">{stream.time}</p>
                    </div>
                    <p className="text-black col-span-2 text-[.7rem]">
                      {stream.league}
                    </p>

                    {/* teams */}
                    <div className="text-black col-span-6 text-[.7rem] items-center grid grid-cols-5">
                      <div className="flex justify-center items-center col-span-2">
                        <div className="grid grid-cols-3">
                          <p className="col-span-2">{stream.home_name}</p>
                          <div className="col-span-1">
                            <img
                              src={correctImageLink(stream.home_flag)}
                              alt="home_team_img"
                              className="w-[20px] h-auto rounded"
                            />
                          </div>
                        </div>
                      </div>
                      <p className="col-span-1">vs</p>
                      <div className="flex justify-center items-center col-span-2">
                        <div className="grid grid-cols-3">
                          <div className="col-span-1">
                            <img
                              src={correctImageLink(stream.away_flag)}
                              alt="away_team_img"
                              className="w-[20px] h-auto rounded"
                            />
                          </div>
                          <p className="col-span-2"> {stream.away_name}</p>
                        </div>
                      </div>
                    </div>
                    <p className="bg-black px-3 py-1 rounded text-white col-span-2 text-[.7rem]">
                      Watch Now
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinksMain;
