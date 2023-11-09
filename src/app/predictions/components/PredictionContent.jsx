import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const PredictionContent = () => {
  const [predictions, setPredictions] = useState([]);

  // useEffect(() => {
  //   const asyncRunner = async () => {
  //     try {
  //       const res = await axios.get(
  //         `${process.env.NEXT_PUBLIC_SERVER}/api/predictions`
  //       );
  //       if (res) {
  //         console.log(res);
  //         setPredictions(res.data);
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   asyncRunner();
  // }, []);

  return (
    <div className="text-white grid grid-cols-12 gap-x-2">
      {/* links */}

      <div className="col-span-12">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <div className="flex flex-col">
              {predictions.length === 0 ? (
                <div className="flex flex-col">
                  <h1 className="text-white">Predictions</h1>
                  <div className="flex justify-between items-center text-white bg-gray-900/[0.8] my-3 p-2">
                    <p>Team A</p>
                    <p>Team B</p>
                  </div>
                  <div className="flex flex-col text-white bg-yellow-800/[0.1] p-3">
                    <Link href={"#stats"}>- Stats</Link>
                    <Link href={"#prevMatches"}>- Previous Matches</Link>
                  </div>
                  <div className="bg-black p-3" id="stats">
                    <h2>STATS</h2>
                    <p>Following team A this is blalblablallala</p>
                  </div>
                  <div className="bg-black p-3 my-1" id="prevMatches">
                    <h2>PREVIOUS MATCHES</h2>
                    <p>Following team A this is blalblablallala</p>
                  </div>
                </div>
              ) : (
                "loading..."
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictionContent;
