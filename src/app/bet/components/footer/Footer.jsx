
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
  return (
    <footer id="footer" className="p-3 bg-gray-900 dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between gap-y-4 items-center">
          <div className="md:flex md:justify-between md:mr-5 items-center gap-4 w-full">
            <div className="md:mb-0 w-full flex justify-center">
              <p className="text-[1.2rem] max-w-[200px] text-center font-bold bg-[#FCD107] rounded p-1 text-black">
                BetGreen
              </p>
            </div>
            <div className="md:mb-0 flex justify-center max_md:my-4">
              <p className="text-[0.7rem] max_md:max-w-[200px] text-center font-bold px-3 py-1 text-white rounded bg-green-500/[0.2]">
                Powered by GrenLyfe™
              </p>
            </div>
          </div>


          <div className="grid grid-cols-3 items-center gap-8 sm:gap-6 sm:grid-cols-3 w-full">

            <div className="col-span-1 flex justify-center items-center">
              <img src="/18+.png" className={`h-[50px] w-[50px]`} />
            </div>
            <div className="">
              <a
                target="_blank"
                href="https://wa.me/254710379709"
                className="text-white hover:underline"
              >
                Chat With Us
              </a>
            </div>

          </div>
        </div>



        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <div className="flex items-center justify-center">
          <p className="text-sm text-gray-500 sm:text-center dark:text-gray-400 my-2 text-center">
            2024 © {" "}
            <a href="#" className="hover:underline">
              BetGreen
            </a>
            {" "}
            All Rights Reserved
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
