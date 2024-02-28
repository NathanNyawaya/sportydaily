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

  useEffect(() => {

  }, [])

  return (
    <div className="w-full bg-[#FCD107] py-4 text-gray-800">
      <div className=" flex justify-between items-center">
        <div className="flex justify-between w-[40%] items-center">
          <p className="text-2xl md:text-3xl font-bold bg-[#FCD107] rounded p-1 text-black tracking-wider">
            ThePitchBasket™
          </p>
        </div>
        <div className="flex w-[60%] justify-end items-center mr-2">
          {time &&
            <h2 className="text-[0.7rem] font-bold text-black">
              Time: <span className="mr-1 text-wh">{time}</span>EAT
            </h2>
          }
          <div className="flex grid grid-cols-2 gap-x-2 ml-3 rounded items-center">
            {/* <p
              className={`${high ? "bg-black" : "bg-white"} p-1 rounded-full`}
            ></p> */}
            <p className="bg-gray-900 text-white rounded m-1 py-1 px-2">Logout</p>
            {/* <p
              className={`${
                hight ? "bg-green-600" : "bg-red-500"
              } p-1 rounded-full`}
            ></p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
