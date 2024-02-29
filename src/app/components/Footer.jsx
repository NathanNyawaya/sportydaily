"use client"
import React, { useEffect, useState } from "react";
import { blogIconGIF } from "../assets";

const Footer = () => {
  const [eighteenPlus, setEighteenPlus] = useState(false)

  useEffect(() => {
    const li_raw = localStorage.getItem("l_")
    if (li_raw) {
      const li__ = JSON.parse(li_raw)
      if (li__ === "/predictions") {
        setEighteenPlus(true)
      }
    }
  }, [])


  const links = [
    {
      href: "/",
      text: "Blogs",
      icon: "https://img.icons8.com/fluency/48/blog.png"
    },
    // { href: "/livestreams", text: "Livestreams" },
    {
      href: "/predictions",
      text: "Betting Tips",
      icon: "https://img.icons8.com/external-others-pike-picture/50/external-Gambling-currency-others-pike-picture.png"
    },
    // { href: "/bet/SP/SPB", text: "Betting" },
    {
      href: "/highlights",
      text: "Highlights",
      icon: "https://img.icons8.com/external-smashingstocks-outline-color-smashing-stocks/66/external-video-stream-party-and-celebrations-smashingstocks-outline-color-smashing-stocks.png"
    },
    {
      href: "https://twitter.com/ThePitchBasket",
      text: "Twitter",
      target: "_blank",
      icon: "https://img.icons8.com/papercut/60/twitter.png"
    },
    {
      href: "https://wa.me/254710379709",
      text: "Chat With Us",
      target: "_blank",
      icon: "https://img.icons8.com/arcade/64/chat.png"
    },
  ]

  const generateNavItem = (href, text, icon, target = "_self", index) => (
    <li key={text} className="flex items-center pb-2">
      <img src={icon} alt="icons" className="h-[14px] w-[14px] animate-bounce\" />
      <a href={href} target={target} className={`hover:underline ${index === links.length - 1 ? "" : ""} pr-4 pl-1 text-[0.7rem] tracking-wide font-medium`}>
        {text}
      </a>
    </li>
  );
  const showThirdPartiesLinks = () => {

    alert("Icons By: icons8.com")
  }
  return (
    <footer id="footer" className="bg-gradient-to-r from-black to-black px-1 py-3 rounded">
      <div className="mx-auto max-w-screen-xl">
        <div className="flex max_sm:flex-col items-center justify-center mb-16">
          <p className="text-[1rem] max-w-[200px] text-center font-bold bg-[#FCD107] rounded p-1 text-black">
            ThePitchBasket™
          </p>
          <div className="flex justify-center items-center">
            <img src="/18+.png" className={`${!eighteenPlus && "hidden"} h-[50px] w-[50px]`} />
          </div>
        </div>

        <div className="flex shadow-lg shadow-[#FCD107]/[0.1] mb-2 max_sm:flex-col items-center justify-between border-top border-gray-200 gap-y-4">
          <div className="flex justify-center items-center w-40%">
            <ul className="flex flex-wrap justify-center text-gray-400 dark:text-gray-400">
              {links.map(({ href, text, icon, target }, index) => generateNavItem(href, text, icon, target, index))}
            </ul>
          </div>

          <div className="">
            <p className=" text-gray-200 tracking-wide text-[0.7rem] text-slide text-gray-400 sm:text-center dark:text-gray-400 text-center">
              © Since 2023 <a href="#" className="hover:underline">ThePitchBasket™</a>
            </p>
          </div>
        </div>
      </div>
    </footer>

  );
};

export default Footer;
