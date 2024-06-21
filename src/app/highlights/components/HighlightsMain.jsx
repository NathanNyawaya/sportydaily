"use client";
import React from "react";
import ReactPlayer from "react-player/lazy";

const LinksMain = () => {
  const highlights = [
    {
      video_url: "https://youtu.be/Nu59inXKT1A?si=qCtBIYTqTlo_5wp3",
    },
    {
      video_url: "https://youtu.be/4JfugsI9fYU?si=1QxXDVE1RqAMA49M",
    },
    {
      video_url: "https://youtu.be/zTIl9xxOMgM?si=vaM1mVBaFAkhJdaf",
    },
    {
      video_url: "https://youtu.be/_BJy3tVc6QE?si=6gfxDcy2bf8ovFny",
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
          <div className="flex flex-col justify-start rounded my-1">
            {/* video hhhhhhhhhhhhhhere */}
            <div className="grid grid-cols-1 gap-x-2 items-center">
              {highlights.length > 0 ? (
                highlights.map((highlight, index) => (
                  <div
                    className="relative col-span-1 bg-blue-400 m-1 rounded"
                    key={index}
                  >
                    <div className="md:hidden" key={index + 2}>
                      <ReactPlayer
                        url={highlight.video_url}
                        className=" rounded"
                        width=""
                        height={300}
                      />
                    </div>
                    <div className="max_md:hidden" key={index + 1}>
                      <ReactPlayer
                        url={highlight.video_url}
                        className=" rounded"
                        width=""
                        height={400}
                      />
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex text-white">
                  <p>No livestream currently, come back later</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinksMain;
