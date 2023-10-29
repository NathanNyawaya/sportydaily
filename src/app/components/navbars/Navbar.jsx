import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [time, setTime] = useState("");
  const [high, setHigh] = useState(false);
  const [hight, setHight] = useState(false);

  useEffect(() => {
    function displayCurrentTime() {
      const currentTime = new Date().toLocaleString();
      setTime(currentTime);
    }

    function activeLights() {
      setHigh((prev) => !prev);
    }
    function activeLights2() {
      setHight((prev) => !prev);
    }
    const intervalID = setInterval(displayCurrentTime, 1000);
    const intervalid = setInterval(activeLights, 100);
    const intervalid2 = setInterval(activeLights2, 1500);
    return () => {
      clearInterval(intervalID);
      clearInterval(intervalid);
      clearInterval(intervalid2);
    };
  }, []);

  return (
    <div className="w-full bg-[#FCD107] py-4 text-gray-800">
      <div className="mx-auto max-w-screen-xl flex justify-between items-center">
        <div className="flex justify-between w-[40%] items-center">
          <p className="text-2xl font-bold italic">
            <span className="text-yellow-800">Grenlyfe</span>
            <span className="text-white">-</span>
            <span className="bg-white p-2 text-green-800 rounded">Sports</span>
          </p>
        </div>
        <div className="flex w-[60%] justify-end items-center">
          {/* <p>Sign In</p> */}
          {"Current time: " + time}
          <div className="flex grid grid-cols-2 gap-x-2 ml-3 rounded items-center">
            <p className={`${high ? "bg-black" : "bg-white"} p-1 rounded-full`}></p>
            
            <p className={`${hight ? "bg-green-600" : "bg-red-500"} p-1 rounded-full`}></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
