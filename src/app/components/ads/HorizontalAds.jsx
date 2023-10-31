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
      href={`${
        ads
          ? "https://www.toprevenuegate.com/vjthn3dg98?key=586db3d8b6f61e3ebaddaf55aa08e461"
          : "https://betika.com"
      }`}
      className="bg-gray-300"
    >
      {" "}
      <div className="h-auto w-full flex">
        <img
          src="https://cdn.betika.com/int_assets/ke/banners/scratch-to-win2000x436.png"
          alt="ads"
          className="w-full h-auto object-contain"
        />
      </div>
    </a>
  );
};

export default HorizontalAds;
