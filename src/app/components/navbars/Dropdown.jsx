"use client";
import Link from "next/link";
import React, { useState } from "react";

const DropdownMenu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="py-3 max_md:mb-5 mb--10 mx-auto">
      <div className="flex items-center gap-x-2 px-1">
        <p className="bg-white px-2 text-black rounded cursor-pointer">News</p>
        {/* <Link href="/">
          <p className="px-2  cursor-pointer">Fixtures</p>
        </Link> */}
        {/* <Link href="/">
          <p className="px-2 flex flex-col justify-center items-center cursor-pointer">
            
            <span className="text-">In Play</span>
          </p>
        </Link> */}
        <Link href="/livestreams">
          <p className="px-2  cursor-pointer">Live Streams</p>
        </Link>
        {/* <Link href="/">
          <p className="px-2  cursor-pointer">Highlights</p>
        </Link> */}
        {/* <Link href="/predictions">
          <p className="px-2  cursor-pointer">Predictions</p>
        </Link> */}
      </div>
    </div>
  );
};

export default DropdownMenu;
