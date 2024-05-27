"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const links = [
  // { id: "home", label: "Home", href: "/" },
  // { id: "livestreams", label: "Live Streams", href: "/livestreams" },
  { id: "fixtures", label: "Fixture", href: "/fixtures" },
  { id: "highlights", label: "Highlights", href: "/highlights" },
  { id: "predictions", label: "Prediction", href: "/predictions" },
  // Add more links as needed
];

const BottomNav = () => {
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
    <div className="flex items-center justiry-end text-end p_2 font-bold">
      {links.map((link) => (
        <Link key={link.id} href={link.href}>
          <p
            onClick={() => linkShot(link.href)}
            className={` ${activeView === link.href ? "bg-white text-black" : "text-white"
              } px-2 rounded-r cursor-pointer text-[0.8rem]`}
          >
            {link.label}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default BottomNav;
