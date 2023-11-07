"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { uefa_fixture } from "../components/LinksMain";
import LaunchIcon from "@mui/icons-material/Launch";
import Link from "next/link";
import LiveStreamDisclaimer from "@/app/legal_documents/LiveStreamDisclaimer";

const MatchLinks = () => {
  const [linkIndex, setLinkIndex] = useState([]);
  const [loading, setLoading] = useState(false);
  const [eventD, setEventD] = useState([]);

  const getStreamLinks = async () => {
    // const stream_id = localStorage.getItem("s_id");
    const event_data = localStorage.getItem("e_data");
    if (event_data) {
      const to_use = JSON.parse(event_data);
      setEventD(to_use);
      console.log(to_use);
      setLoading(false);
    }
  };

  useEffect(() => {
    getStreamLinks();
  }, []);

  return (
    <div className="grid grid-cols-12 gap-x-2">
      <div className="col-span-12">
        <div className="flex flex-col justify-center">
          {loading ? (
            <p>Loading ...</p>
          ) : eventD ? (
            eventD.map((stream, index) => {
              return (
                <div key={index} target="_blank" rel="noopener noreferrer">
                  <div className="bg-gray-800 hover:bg-green-500/[0.1]  text-black p-3 my-2 flex justify-between items-center">
                    <div className="flex justify-between w-full px-3 py-1 rounded text-white col-span-2 text-[.9rem]">
                      <div className="flex gap-x-2">
                        <h2 className=" text-white">
                          
                          {stream.host_name}
                        </h2>
                        <p>{stream.stream_quality}</p>
                      </div>

                      <div className="">
                        <a href={stream.url} target="_blank">
                          
                          <LaunchIcon
                            size="small"
                            className="hover:text-green-400 text-green-700"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p>No data found</p>
          )}
        </div>
      </div>
      
    </div>
  );
};

export default MatchLinks;
