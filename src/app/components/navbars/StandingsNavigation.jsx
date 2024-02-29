"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const links = [
  { id: "home", label: "# Top 10 Table" },
];

const StandingsNavigation = () => {
  const [activeView, setActiveView] = useState("/")


  useEffect(() => {
    const l_raw = localStorage.getItem("l_")
    if (l_raw) {
      const activeView_ = JSON.parse(l_raw)
      setActiveView(activeView_)
    }
  }, [])

  const linkShot = (link_) => {
    localStorage.setItem("l_", JSON.stringify(link_))
  }



  return (
    <div className="flex w-full items-center gap-x-2  py-3 mt-1 rounded bg-gradient-to-l to-[#FCD107]/[0.8] from-black">
      
      {links.map((link) => (
        <div key={link.id} >
          <p
            // onClick={() => linkShot(link.href)}
            className={`px-2 font-bold text-gray-50 cursor-pointer text-[0.8rem]`}
          >
            {link.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StandingsNavigation;
