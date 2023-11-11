"use client";
import axios from "axios";

import React, { useEffect, useState } from "react";
import LaunchIcon from "@mui/icons-material/Launch";

export const uefa_fixture = [
  {
    match_status: "Live",
    home_team: "Wolves",
    away_team: "Tottenham Spurs",
    home_flag: "https://l.ivesoccer.sx/teams/default.png",
    away_flag: "https://l.ivesoccer.sx/teams/tottenham.png",
    starting_time: "03:30pm EAT",
    match_id: "02929",
    title: "English Premier League",
    stream_links: [
      {
        url: "https://headlines.reddit-soccerstreams.com/2-wolverhampton-wanderers-vs-tottenham-hotspur/",
        host_name: "WORLD STREAMS",
        reputation: "Platinum",
        stream_quality: "HD",
        stream_ads: "1",
        stream_channel: "Sky Sports",
        stream_language: "English",
      },
      {
        url: "https://sports.chelsealivestream.com/2-wolverhampton-wanderers-vs-tottenham-hotspur/",
        host_name: "TOP STREAMS",
        reputation: "Platinum",
        stream_quality: "HD",
        stream_ads: "1",
        stream_channel: "BT Sports",
        stream_language: "English",
      },
      {
        url: "https://sports.chelsealivestream.com/2-wolverhampton-wanderers-vs-tottenham-hotspur/",
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
    match_status: "Kickoff",
    home_team: "Arsenal",
    away_team: "Burnley",
    home_flag: "https://l.ivesoccer.sx/teams/arsenal.png",
    away_flag: "https://l.ivesoccer.sx/teams/burnley.png",
    starting_time: "06:00pm EAT",
    match_id: "02929",
    title: "English Premier League",
    stream_links: [
      {
        url: "#",
        host_name: "WEAK STREAMS",
        reputation: "Platinum",
        stream_quality: "HD",
        stream_ads: "1",
        stream_channel: "Sky Sports",
        stream_language: "English",
      },
      {
        url: "#",
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
    match_status: "Kickoff",
    home_team: "Crystal Palace",
    away_team: "Everton",
    home_flag: "https://l.ivesoccer.sx/teams/crystal-palace.png",
    away_flag: "https://l.ivesoccer.sx/teams/everton.png",
    starting_time: "06:00pm EAT",
    match_id: "02929",
    title: "English Premier League",
    stream_links: [
      {
        url: "#",
        host_name: "WEAK STREAMS",
        reputation: "Platinum",
        stream_quality: "HD",
        stream_ads: "1",
        stream_channel: "Sky Sports",
        stream_language: "English",
      },
      {
        url: "#",
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
    match_status: "Kickoff",
    home_team: "Manchester United",
    away_team: "Luton Town",
    home_flag: "https://l.ivesoccer.sx/teams/manchester-united.png",
    away_flag: "https://l.ivesoccer.sx/teams/luton-town.png",
    starting_time: "06:00pm EAT",
    match_id: "02929",
    title: "English Premier League",
    stream_links: [
      {
        url: "#",
        host_name: "WEAK STREAMS",
        reputation: "Platinum",
        stream_quality: "HD",
        stream_ads: "1",
        stream_channel: "Sky Sports",
        stream_language: "English",
      },
      {
        url: "#",
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
    match_status: "Kickoff",
    home_team: "Bournemouth",
    away_team: "Newcastle United",
    home_flag: "https://1.ivesoccer.sx/teams/bournemouth.png",
    away_flag: "https://l.ivesoccer.sx/teams/newcastle.png",
    starting_time: "08:30pm EAT",
    match_id: "02929",
    title: "English Premier League",
    stream_links: [
      {
        url: "#",
        host_name: "WEAK STREAMS",
        reputation: "Platinum",
        stream_quality: "HD",
        stream_ads: "1",
        stream_channel: "Sky Sports",
        stream_language: "English",
      },
      {
        url: "#",
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
          <div className="flex mx-2 my-4">
            <h2 className="text-gray-400 font-bold text-[1rem]">
              English Premier League
            </h2>
          </div>
          {uefa_fixture.length > 0 ? (
            uefa_fixture.flatMap((stream, index) => (
              <div
                className="flex flex-col text-white cursor-pointer"
                key={index}
                onClick={() => {
                  if (stream.stream_links[0].url != "#") {
                    localStorage.setItem(
                      "e_data",
                      JSON.stringify(stream.stream_links)
                    );
                    window.location.replace(`/livestreams/${index}`);
                  } else {
                    alert("Match not yet started");
                  }
                }}
              >
                <div className="flex flex-col justify-start rounded my-1 mx-2">
                  {/* title / league */}
                  <div className="flex items-center my-1">
                    <h2 className="text-[0.7rem] text-gray-300">
                      {stream.match_status}{" "}
                      {stream.match_status === "Live"
                        ? ``
                        : `${stream.starting_time}`}
                    </h2>
                  </div>
                  <div className="flex justify-between text-white bg-gray-800 hover:bg-yellow-400/[0.1] p-3 col-span-6 items-center">
                    <div className="flex flex-col gap-y-2">
                      <div className="flex gap-3">
                        <img
                          src={stream.home_flag}
                          alt="home_team_img"
                          className="w-[20px] h-auto rounded"
                        />
                        <p className="text-[0.8rem] text-white">
                          {stream.home_team}
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <img
                          src={stream.away_flag}
                          alt="away_team_img"
                          className="w-[20px] h-auto rounded"
                        />
                        <p className="text-[0.8rem] text-white">
                          {stream.away_team}
                        </p>
                      </div>
                    </div>
                    <div className="">
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
              <p>
                Oops! .. ThePitchBasket Livestream corner is under Maintainance,
                please come back later.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LinksMain;
