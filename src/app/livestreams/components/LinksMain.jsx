import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const LinksMain = () => {
  const [liveEvents, setLiveEvents] = useState([]);

  useEffect(() => {
    const asyncRunner = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER}/api/livestreams`
        );
        console.log(res.data);
        if (res.data != "Empty streams") {
          setLiveEvents(res.data.livestream_res);
        } else {
          setLiveEvents([]);
        }
      } catch (error) {
        console.error(error);
      }
    };
    asyncRunner();
  }, []);

  return (
    <div className="grid  grid-cols-12 gap-x-2">
      {/* links */}

      <div className="col-span-12">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col justify-center">
            {liveEvents.length > 0 &&
              liveEvents.flatMap((liveEvent, index) =>
                liveEvent.live_events_data.map((stream, i) => {
                  let randomNumber = Math.floor(Math.random() * 10);
                  console.log(stream.time);
                  return (
                    <Link
                      href={`/livestreams/${stream.matchId}`}
                      onClick={() => {
                        localStorage.setItem("s_id", stream.matchId);
                      }}
                      key={(i + index) * randomNumber}
                    >
                      <div className="bg-white text-black rounded p-3 my-2 grid grid-cols-12 text-center">
                        <p className="text-black col-span-2 text-[.7rem]">
                          {stream.status === "Uncoming"
                            ? "Not Started"
                            : stream.status}
                        </p>
                        <p className="text-black col-span-1 text-[.7rem]">
                          {stream.time}
                        </p>
                        <p className="text-black col-span-2 text-[.7rem]">
                          {stream.league}
                        </p>
                        <p className="text-black col-span-5 text-[.7rem]">
                          {stream.home_name} vs {stream.away_name}
                        </p>
                        <p className="bg-black px-3 py-1 rounded text-white col-span-2 text-[.7rem]">
                          Watch Now
                        </p>
                      </div>
                    </Link>
                  );
                })
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinksMain;
