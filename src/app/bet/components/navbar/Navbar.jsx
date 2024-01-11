import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    function displayCurrentTime() {
      const currentTime = new Date();
      const hours = currentTime.getHours();
      const minutes = currentTime.getMinutes();

      const timeString = `${hours}:${minutes}`;
      setTime(timeString);
    }

    const intervalID = setInterval(displayCurrentTime, 1000);
    return () => {
      clearInterval(intervalID);
    };
  }, []);


  return (
    <div className="w-full bg-green-800 text-gray-800">
      <div className=" flex justify-between items-center">
        <div className="flex justify-between w-[40%] items-center">
          <p className="text-2xl md:text-3xl font-bold bg-gray-100 p-1 text-black tracking-wider">
            BetGreen
          </p>
        </div>
        <div className="flex w-[60%] justify-end items-center mr-2">
          {/* <p>Sign In</p> */}
          {time &&
            <h2 className="text-[0.7rem] font-bold text-white">
              Time: <span className="mr-1 text-wh">{time}</span>EAT
            </h2>
          }
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
