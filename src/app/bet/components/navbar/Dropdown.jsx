"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const links = [
  // { id: "exchange", label: "Exchange", href: "/bet/SP/EXC" },
  { id: "sportsbook", label: "Sportbook", href: "/bet/SP/SPB" },
  // Add more links as needed
];

const BottomNavBar = () => {
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
    <div className="flex justify-between items-center py-3  mx-auto">
      <div className="flex items-center gap-x-2 px-1">
        {links.map((link) => (
          <Link key={link.id} href={link.href}>
            <p
              onClick={() => linkShot(link.href)}
              className={` ${activeView === link.href ? "bg-white text-black" : "text-white"
                } px-2  cursor-pointer text-[0.9rem]`}
            >
              {link.label}
            </p>
          </Link>
        ))}
      </div>
      <div className="flex mx-1">
        <p>Bal: 5000</p>
      </div>
    </div>
  );
};

export default BottomNavBar;
