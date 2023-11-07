"use client";
import axios from "axios";

import React, { useEffect, useState } from "react";
import LaunchIcon from "@mui/icons-material/Launch";

export const uefa_fixture = [
  // {
  //   match_status: "Live",
  //   home_team: "Borussia",
  //   away_team: "Newcastle United",
  //   home_flag: "https://l.ivesoccer.sx/teams/borussia-dortmund.png",
  //   away_flag: "https://l.ivesoccer.sx/teams/newcastle.png",
  //   starting_time: "21:45pm",
  //   match_id: "02929",
  //   title: "UEFA Champions League",
  //   stream_links: [
  //     {
  //       url: "https://top.score808.football/1-borussia-dortmund-vs-newcastle-united",
  //       host_name: "WEAK STREAMS",
  //       reputation: "Platinum",
  //       stream_quality: "HD",
  //       stream_ads: "1",
  //       stream_channel: "Sky Sports",
  //       stream_language: "English",
  //     },
  //     {
  //       url: "https://headlines.footybite.to/1-borussia-dortmund-vs-newcastle-united/",
  //       host_name: "Footybite Streams",
  //       reputation: "Platinum",
  //       stream_quality: "HD",
  //       stream_ads: "1",
  //       stream_channel: "Sky Sports",
  //       stream_language: "English",
  //     },
  //   ],
  // },
  // {
  //   match_status: "Live",
  //   home_team: "Shakhatar Donetsk",
  //   away_team: "Barcelona",
  //   home_flag: "https://l.ivesoccer.sx/teams/shakhtar-donetsk.png",
  //   away_flag: "https://l.ivesoccer.sx/teams/barcelona.png",
  //   starting_time: "21:45pm",
  //   match_id: "02929",
  //   title: "UEFA Champions League",
  //   stream_links: [
  //     {
  //       url: "https://top.score808.football/2-shakhtar-donetsk-vs-barcelona/",
  //       host_name: "WEAK STREAMS",
  //       reputation: "Platinum",
  //       stream_quality: "HD",
  //       stream_ads: "1",
  //       stream_channel: "Sky Sports",
  //       stream_language: "English",
  //     },
  //     {
  //       url: "https://sports.chelsealivestream.com/2-shakhtar-donetsk-vs-barcelona/",
  //       host_name: "Top Streams",
  //       reputation: "Platinum",
  //       stream_quality: "HD",
  //       stream_ads: "1",
  //       stream_channel: "Sky Sports",
  //       stream_language: "English",
  //     },
  //   ],
  // },
  {
    match_status: "Kickoff",
    home_team: "Atletico Madrid",
    away_team: "Celtic",
    home_flag: "https://l.ivesoccer.sx/teams/atletico-madrid.png",
    away_flag: "https://l.ivesoccer.sx/teams/newcastle.png",
    starting_time: "23:00pm",
    match_id: "02929",
    title: "UEFA Champions League",
    stream_links: [
      {
        url: "https://top.score808.football/3-atletico-madrid-vs-celtic/",
        host_name: "WEAK STREAMS",
        reputation: "Platinum",
        stream_quality: "HD",
        stream_ads: "1",
        stream_channel: "Sky Sports",
        stream_language: "English",
      },
      {
        url: "https://top.score808.football/3-atletico-madrid-vs-celtic/",
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
    home_team: "AC Milan",
    away_team: "PSG",
    home_flag: "https://l.ivesoccer.sx/teams/ac-milan.png",
    away_flag: "https://l.ivesoccer.sx/teams/psg.png",
    starting_time: "23:00pm",
    match_id: "02929",
    title: "UEFA Champions League",
    stream_links: [
      {
        url: "https://top.score808.football/5-milan-vs-psg/",
        host_name: "WEAK STREAMS",
        reputation: "Platinum",
        stream_quality: "HD",
        stream_ads: "1",
        stream_channel: "Sky Sports",
        stream_language: "English",
      },
      {
        url: "https://top.score808.football/5-milan-vs-psg/",
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
              UEFA Champions League
            </h2>
          </div>
          {uefa_fixture.length > 0 &&
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
            ))}
        </div>
      </div>
    </div>
  );
};

export default LinksMain;
