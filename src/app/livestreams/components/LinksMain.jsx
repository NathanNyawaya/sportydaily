"use client";
import axios from "axios";

import React, { useEffect, useState } from "react";
import LaunchIcon from "@mui/icons-material/Launch";

export const uefa_fixture = [
  {
    match_status: "Kickoff",
    home_team: "Napoli",
    away_team: "Union Berlin",
    home_flag: "https://l.ivesoccer.sx/teams/napoli.png",
    away_flag: "https://l.ivesoccer.sx/teams/union-berlin.png",
    starting_time: "20:45pm EAT",
    match_id: "02929",
    title: "UEFA Champions League",
    stream_links: [
      {
        url: "https://news.score808.football/1-napoli-vs-union-berlin/",
        host_name: "WEAK STREAMS",
        reputation: "Platinum",
        stream_quality: "HD",
        stream_ads: "1",
        stream_channel: "Sky Sports",
        stream_language: "English",
      },
      {
        url: "https://coolrea.link/flash33",
        host_name: "Flsh Streams",
        reputation: "Platinum",
        stream_quality: "HD",
        stream_ads: "1",
        stream_channel: "Tnt Sports",
        stream_language: "English",
        
      },
      {
        url: "https://istorm.live/flash20",
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
    home_team: "Real Sociedad",
    away_team: "Benfica",
    home_flag: "https://l.ivesoccer.sx/teams/real-sociedad.png",
    away_flag: "https://l.ivesoccer.sx/teams/benfica.png",
    starting_time: "20:45pm EAT",
    match_id: "02929",
    title: "UEFA Champions League",
    stream_links: [
      {
        url: "https://news.score808.football/2-real-sociedad-vs-benfica/",
        host_name: "Stream Live" ,
        reputation: "Platinum",
        stream_quality: "HD",
        stream_ads: "1",
        stream_channel: "Sky Sports",
        stream_language: "English",
      },
      {
        url: "https://coolrea.link/flash4",
        host_name: "Top Streams",
        reputation: "Platinum",
        stream_quality: "HD",
        stream_ads: "1",
        stream_channel: "Sky Sports",
        stream_language: "English",
      },
      {
        url: "https://istorm.live/flash10",
        host_name: "Top Streams",
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
    home_team: "Bayerm Munchen",
    away_team: "Galatasaray",
    home_flag: "https://l.ivesoccer.sx/teams/bayern-munchen.png",
    away_flag: "https://l.ivesoccer.sx/teams/galatasaray.png",
    starting_time: "23:00pm EAT",
    match_id: "02929",
    title: "UEFA Champions League",
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
    home_team: "Arsenal",
    away_team: "Sevilla",
    home_flag: "https://l.ivesoccer.sx/teams/arsenal.png",
    away_flag: "https://l.ivesoccer.sx/teams/sevilla.png",
    starting_time: "23:00pm EAT",
    match_id: "02929",
    title: "UEFA Champions League",
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
    home_team: "Real Madrid",
    away_team: "Sporting Braga",
    home_flag: "https://l.ivesoccer.sx/teams/real-madrid.png",
    away_flag: "https://l.ivesoccer.sx/teams/sporting-braga.png",
    starting_time: "23:00pm EAT",
    match_id: "02929",
    title: "UEFA Champions League",
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
    home_team: "Salzburg",
    away_team: "Internazionale",
    home_flag: "https://1.ivesoccer.sx/teams/default.png",
    away_flag: "https://l.ivesoccer.sx/teams/default.png",
    starting_time: "23:00pm EAT",
    match_id: "02929",
    title: "UEFA Champions League",
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
    home_team: "Copenhagen",
    away_team: "Manchester United",
    home_flag: "https://l.ivesoccer.sx/teams/copenhagen.png",
    away_flag: "https://l.ivesoccer.sx/teams/manchester-united.png",
    starting_time: "23:00pm EAT",
    match_id: "02929",
    title: "UEFA Champions League",
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
