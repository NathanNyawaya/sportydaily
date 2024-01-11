import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import TipsCollapse from "./TipsCollapse";

const PredictionContent = () => {
  const [opened, setOpened] = useState(false)
  const [predictions, setPredictions] = useState([]);


  return (
    <div className="z-0 text-white grid grid-cols-12 gap-x-2">
      {/* links */}

      <div className="col-span-12">
        {predictions.length === 0 ? (
          <div className="flex flex-col z-0">

           <TipsCollapse opened={opened}/>

          </div>
        ) : (
          "loading..."
        )}
      </div>
    </div>
  );
};

export default PredictionContent;
