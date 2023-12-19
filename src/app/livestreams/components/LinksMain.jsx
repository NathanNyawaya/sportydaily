"use client";
import axios from "axios";

import React, { useEffect, useState } from "react";
import LaunchIcon from "@mui/icons-material/Launch";

export const epl_fixture = [
  {
    match_status: "Match ended",
    home_team: "Aston Villa",
    away_team: "Fulham",
    home_flag: "https://l.ivesoccer.sx/teams/aston-villa.png",
    away_flag: "https://l.ivesoccer.sx/teams/fulham.png",
    starting_time: "05:00pm EAT",
    match_id: "02929",
    title: "English Premier League",
    scores: "3-1",
    stream_links: [
      {
        url: "https://top.worldcupglory.com/2-aston-villa-vs-fulham/",
        host_name: "WORLD STREAMS",
        reputation: "Platinum",
        stream_quality: "HD",
        stream_ads: "1",
        stream_channel: "Sky Sports",
        stream_language: "English",
      },
      {
        url: "https://headlines.reddit-soccerstreams.com/2-aston-villa-vs-fulham/",
        host_name: "TOP STREAMS",
        reputation: "Platinum",
        stream_quality: "HD",
        stream_ads: "1",
        stream_channel: "BT Sports",
        stream_language: "English",
      },
      {
        url: "https://headlines.reddit-soccerstreams.com/2-aston-villa-vs-fulham/",
        host_name: "Flsh Streams",
        reputation: "Platinum",
        stream_quality: "HD",
        stream_ads: "1",
        stream_channel: "Tnt Sports",
        stream_language: "English",
      },
    ],
  },

  {
    match_status: "Match ended",
    home_team: "Brighton",
    away_team: "Sheffield United",
    home_flag: "https://l.ivesoccer.sx/teams/brighton.png",
    away_flag: "https://l.ivesoccer.sx/teams/sheffield-united.png",
    starting_time: "05:00pm EAT",
    match_id: "02929",
    title: "English Premier League",
    scores: "1-1",
    stream_links: [
      {
        url: "https://headlines.reddit-soccerstreams.com/3-brighton-&-hove-albion-vs-sheffield-united/",
        host_name: "WEAK STREAMS",
        reputation: "Platinum",
        stream_quality: "HD",
        stream_ads: "1",
        stream_channel: "Sky Sports",
        stream_language: "English",
      },
      {
        url: "https://sports.worldcupglory.com/3-brighton-&-hove-albion-vs-sheffield-united/",
        host_name: "Footybite Streams",
        reputation: "Platinum",
        stream_quality: "HD",
        stream_ads: "1",
        stream_channel: "Sky Sports",
        stream_language: "English",
      },
    ],
  },

  {
    match_status: "Match ended",
    home_team: "West Ham",
    away_team: "Nottm Forest",
    home_flag: "https://l.ivesoccer.sx/teams/west-ham-united.png",
    away_flag: "https://l.ivesoccer.sx/teams/nottingham-forest.png",
    starting_time: "05:00pm EAT",
    match_id: "02929",
    title: "English Premier League",
    scores: "3-2",
    stream_links: [
      {
        url: "https://top.worldcupglory.com/5-west-ham-united-vs-nottingham-forest/",
        host_name: "WEAK STREAMS",
        reputation: "Platinum",
        stream_quality: "HD",
        stream_ads: "1",
        stream_channel: "Sky Sports",
        stream_language: "English",
      },
      {
        url: "https://headlines.footybite.to/5-west-ham-united-vs-nottingham-forest/",
        host_name: "Footybite Streams",
        reputation: "Platinum",
        stream_quality: "HD",
        stream_ads: "1",
        stream_channel: "Sky Sports",
        stream_language: "English",
      },
    ],
  },
  {
    match_status: "Match ended",
    home_team: "Liverpool",
    away_team: "Brentford",
    home_flag: "https://l.ivesoccer.sx/teams/liverpool.png",
    away_flag: "https://l.ivesoccer.sx/teams/brentford.png",
    starting_time: "05:00pm EAT",
    match_id: "02929",
    title: "English Premier League",
    scores: "3-0",
    stream_links: [
      {
        url: "https://top.worldcupglory.com/4-liverpool-vs-brentford/",
        host_name: "WEAK STREAMS",
        reputation: "Platinum",
        stream_quality: "HD",
        stream_ads: "1",
        stream_channel: "Sky Sports",
        stream_language: "English",
      },
      {
        url: "https://news.worldcupglory.com/4-liverpool-vs-brentford/",
        host_name: "Footybite Streams",
        reputation: "Platinum",
        stream_quality: "HD",
        stream_ads: "1",
        stream_channel: "Sky Sports",
        stream_language: "English",
      },
    ],
  },
  {
    match_status: "Live",
    home_team: "Chelsea",
    away_team: "Man City",
    home_flag: "https://1.ivesoccer.sx/teams/chelsea.png",
    away_flag: "https://l.ivesoccer.sx/teams/manchester-city.png",
    starting_time: "07:30pm EAT",
    match_id: "02929",
    title: "English Premier League",
    scores: "",
    stream_links: [
      {
        url: "https://top.worldcupglory.com/6-chelsea-vs-manchester-city/",
        host_name: "WEAK STREAMS",
        reputation: "Platinum",
        stream_quality: "HD",
        stream_ads: "1",
        stream_channel: "Sky Sports",
        stream_language: "English",
      },
      {
        url: "https://headlines.footybite.to/6-chelsea-vs-manchester-city/",
        host_name: "Footybite Streams",
        reputation: "Platinum",
        stream_quality: "HD",
        stream_ads: "1",
        stream_channel: "Sky Sports",
        stream_language: "English",
      },
    ],
  },
];

const LinksMain = () => {
  const [liveEvents, setLiveEvents] = useState([]);

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
              <p>No Livestreams currently, come back later.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LinksMain;
