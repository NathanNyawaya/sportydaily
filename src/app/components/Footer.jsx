"use client"
import React, { useEffect, useState } from "react";


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
    { href: "/", text: "Blogs" },
    // { href: "/livestreams", text: "Livestreams" },
    { href: "/predictions", text: "Betting Tips" },
    // { href: "/bet/SP/SPB", text: "Betting" },
    { href: "/highlights", text: "Highlights" },
    {
      href: "https://twitter.com/ThePitchBasket",
      text: "Twitter",
      target: "_blank",
    },
    {
      href: "https://wa.me/254710379709",
      text: "Chat With Us",
      target: "_blank",
    },
  ]

  const generateNavItem = (href, text, target = "_self", index) => (
    <li key={text}>
      <a href={href} target={target} className={`hover:underline ${index === links.length - 1 ? "" : "border-r border-gray-500"} px-1 text-[0.7rem]`}>
        {text}
      </a>
    </li>
  );
  return (
    <footer id="footer" className="p-3 bg-gray-800 dark:bg-gray-800">


      <div className="bg-white my-10">
        <iframe src='https://www.scorebat.com/embed/v/659f74f81cb5d/?utm_source=api&utm_medium=video&utm_campaign=dflt' frameborder='0' width='100%' height='100%' allowfullscreen allow='autoplay; fullscreen' ></iframe>
      </div>

      <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between gap-y-4 items-center">
          <div className="md:flex md:justify-between md:mr-5 items-center gap-4 w-full">
            <div className="md:mb-0 w-full flex justify-center">
              <p className="text-[1.2rem] max-w-[200px] text-center font-bold bg-[#FCD107] rounded p-1 text-black">
                ThePitchBasket™
              </p>
            </div>
            <div className="md:mb-0 flex justify-center max_md:my-4">
              <p className="text-[0.7rem] max_md:max-w-[200px] text-center font-bold px-3 py-1 text-white rounded bg-green-500/[0.2]">
                Powered by GrenLyfe™
              </p>
            </div>
          </div>


          <div className="flex w-full">


            <div className="flex justify-center items-center w-full">
              <ul className="flex flex-wrap justify-center text-gray-400 dark:text-gray-400">
                {links.map(({ href, text, target }, index) => generateNavItem(href, text, target, index))}
              </ul>

            </div>

            <div className="col-span-1 flex justify-center items-center">
              <img src="/18+.png" className={`${!eighteenPlus && "hidden"} h-[50px] w-[50px]`} />
            </div>
          </div>
        </div>



        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <div className="flex items-center justify-center">
          <p className="text-[0.8rem] text-gray-500 sm:text-center dark:text-gray-400 my-2 text-center">
            © Since 2023-2024 {" "}
            <a href="#" className="hover:underline">
              ThePitchBasket™
            </a>
          </p>
          {/* <p className="text-[0.7rem] text-gray-500">v2</p> */}

        </div>
      </div>
    </footer >
  );
};

export default Footer;
