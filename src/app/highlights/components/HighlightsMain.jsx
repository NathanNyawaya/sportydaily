"use client";
import axios from "axios";

import React, { useEffect, useState } from "react";
import LaunchIcon from "@mui/icons-material/Launch";
import ReactPlayer from "react-player/lazy";

// Lazy load the YouTube player

export const uefa_fixture = [
  {
    match_status: "Match ended",
    home_team: "Wolves",
    away_team: "Tottenham Spurs",
    home_flag: "https://l.ivesoccer.sx/teams/default.png",
    away_flag: "https://l.ivesoccer.sx/teams/tottenham.png",
    starting_time: "03:30pm EAT",
    match_id: "02929",
    title: "English Premier League",
    scores: "2-1",
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

  const highlights = [
    {
      video_url: "https://youtu.be/_BJy3tVc6QE?si=6gfxDcy2bf8ovFny",
    },
    {
      video_url: "https://youtu.be/r5jniHNjcJ0?si=ijKbL1_uGzlo3phL",
    },
    {
      video_url: "https://youtu.be/sm2wXA1aTQ4?si=zkSm3EGc0GJvuLi-",
    },
    
  ];
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
                <div className="flex flex-col justify-start rounded my-1">
                  {/* video hhhhhhhhhhhhhhere */}
                  <div className="grid grid-cols-1 gap-x-2 items-center">
                    {highlights.length > 0
                      ? highlights.map((highlight, index) => (
                          <div
                            className="relative col-span-1 bg-blue-400 m-1 rounded"
                            key={index}
                          >
                            <ReactPlayer
                              url={highlight.video_url}
                              className=" rounded"
                              width=""
                              height=""
                            />
                          </div>
                        ))
                      : ""}
                  </div>
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
