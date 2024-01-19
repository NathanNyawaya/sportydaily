"use client";
import React, { useState, useEffect } from "react";
// import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";

const HorizontalAds = () => {
  const [ads, setAds] = useState(false);

  useEffect(() => {
    function activeLights2() {
      setAds((prev) => !prev);
    }

    const intervalid2 = setInterval(activeLights2, 3000);
    return () => {
      clearInterval(intervalid2);
    };
  }, []);
  return (
    <a
      target="_blank"
      href="#"
      // href={`${
      //   ads
      //     ? "https://www.toprevenuegate.com/u3g9q0sjfg?key=de2748288e81ffa289896731332d5e45"
      //     : "https://betika.com"
      // }`}
      className="bg-gray-300"
    >
      {" "}
      <div className="h-auto w-full max-h-[25vh] flex">
        {/* <h2 className="text-xl font-bold">ThePitchBasket</h2> */}
        <img
          src="https://odds2win.bet/odds2win/images/promo/1xbet%20Kenya%20promo%20code.jpg"
          alt="ads"
          className="w-full h-auto object-contain"
        />
      </div>
    </a>
  );
};

export default HorizontalAds;
