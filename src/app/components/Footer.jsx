"use client"
import React, { useEffect, useState } from "react";
import { blogIconGIF } from "../assets";

const Footer = ({ theme }) => {
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
      href: "/fixtures",
      text: "Fixtures",
      icon: "https://img.icons8.com/external-icongeek26-flat-icongeek26/64/external-trophy-football-icongeek26-flat-icongeek26.png"
    },
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
      href: "https://twitter.com/ThePitchBasket",
      text: "Chat With Us",
      target: "_blank",
      icon: "https://img.icons8.com/arcade/64/chat.png"
    },
  ]

  const generateNavItem = (href, text, icon, target = "_self", index) => (
    <li key={text} className="flex flex-col justify-center  items-center gap-1">
      <img src={icon} alt="icons" className="md:h-[50px] h-[30px] md:w-[50px] w-[30px] animate-bounce\" />
      <a href={href} target={target} className={`hover:underline ${index === links.length - 1 ? "" : ""}  md:text-[1rem] text-[0.6rem] tracking-wider font-bold`}>
        {text}
      </a>
    </li>
  );
  const showThirdPartiesLinks = () => {

    alert("Icons By: icons8.com")
  }
  return (
    <footer id="footer" className={`${theme ? theme.bg : "bg-gray-600"}   px-1 py-20 gap-y-20 m-1 rounded-lg flex flex-col items-center mb-5 min-h-[30vh]`}>
      <div className="flex max_sm:flex-col items-center justify-center">
        <p className="md:text-[2.5rem] text-[1.9rem] text-center font-bold  rounded p-1 text-gray-50">
          ThePitchBasket™
        </p>
        <div className="flex justify-center items-center">
          <img src="/18+.png" className={`${!eighteenPlus && "hidden"} h-[50px] w-[50px]`} />
        </div>
      </div>

      <div className="flex w-full items-center">
        <ul className="flex justify-around  items-center text-gray-50 w-full">
          {links.map(({ href, text, icon, target }, index) => generateNavItem(href, text, icon, target, index))}
        </ul>
      </div>
      <div className="">
        <p className=" text-gray-50 tracking-wider font-bold text-[0.9rem] text-center">
          © Since 2023 <a href="#" className="hover:underline">ThePitchBasket™</a>
        </p>
      </div>
    </footer>

  );
};

export default Footer;
