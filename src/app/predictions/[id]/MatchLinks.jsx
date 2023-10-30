"use client"
import axios from "axios";
import React, { useEffect, useState } from "react";

const MatchLinks = () => {
  const [streamLinks, setStreamLinks] = useState([]);
  const getStreamLinks = async () => {
    const stream_id = localStorage.getItem("s_id");
    if (stream_id) {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER}/api/livestreams/${stream_id}`
        );
        if (res) {
          console.log(res.data);
          setStreamLinks(res.data);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    getStreamLinks();
  }, []);
  return (
    <div className="grid  grid-cols-12 gap-x-2">
      {/* links */}

      <div className="col-span-12">
        <div className="flex flex-col justify-center">
          {streamLinks.length > 0 &&
            streamLinks.map((stream, index) => (
              <div
                key={index}
                className="bg-white text-black p-3 my-2 flex justify-between items-center"
              >
                <p className="text-black">{stream.name}</p>
                <p className="text-black">{"> > > >"}</p>

                <p className="bg-black px-3 py-1 rounded text-white col-span-2 text-[.9rem]">
                  <a href={stream.link} target="_blank">Watch Now</a>
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MatchLinks;
