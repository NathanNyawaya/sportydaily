import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const PredictionContent = () => {
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    const asyncRunner = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER}/api/predictions`
        );
        if (res) {
          console.log(res);
          setPredictions(res.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    asyncRunner();
  }, []);

  const extractPercentage = (percentage_text) => {
    // const text = "Tip Probability: 57%";
    const regex = /(\d+)%/; // This regular expression matches one or more digits followed by a percentage sign.
    const match = percentage_text.match(regex);

    if (match) {
      const percentage = parseInt(match[1], 10);
      return percentage;
      // console.log(`Extracted percentage: ${percentage}%`);
    } else {
      return "No%";
      // console.log("No percentage found in the text.");
    }
  };
  return (
    <div className="grid  grid-cols-12 gap-x-2">
      {/* links */}

      <div className="col-span-12">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <div className="flex flex-col">
              {predictions.length > 0
                ? predictions.map((league, index) => {
                    // console.log(league);
                    return (
                      <div
                        key={index}
                        className="rounded bg-white text-black mb-2"
                      >
                        <div className="flex items-center gap-x-3 bg-black py-3 px-1">
                          <p className="text-white">League:</p>
                          <p className="text-white font-bold">
                            {league.league}
                          </p>
                        </div>
                        <div className="text-black rounded m-2">
                          {league.prediction_data.map((event_, i) => {
                            return (
                              <div key={i} className="bg-gray-200 p-2 mb-2">
                                <p className="text-xl">
                                  {event_.match || "No match info"}
                                </p>
                                <div className="flex flex-col gap-y-3">
                                  <p className="text-sm">Tip</p>
                                  <p className="text-black ">
                                    {event_.Prediction.Tip || "No tip info"}
                                  </p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })
                : "loading..."}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictionContent;
