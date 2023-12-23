"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const links = [
  { id: "news", label: "News", href: "/" },
  // { id: "livestreams", label: "Live Streams", href: "/livestreams" },
  { id: "fixtures", label: "Fixture", href: "/fixtures" },
  { id: "highlights", label: "Highlights", href: "/highlights" },
  { id: "predictions", label: "Betting", href: "/predictions" },
  // Add more links as needed
];

const DropdownMenu = () => {
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
    <div className="py-3 max_md..:mb-5 mb--10 mx-auto">
      <div className="flex items-center gap-x-2 px-1">
        {links.map((link) => (
          <Link key={link.id} href={link.href}>
            <p
              onClick={() => linkShot(link.href)}
              className={` ${activeView === link.href ? "bg-white text-black" : "text-white"
                } px-2 rounded cursor-pointer text-[0.9rem]`}
            >
              {link.label}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DropdownMenu;
