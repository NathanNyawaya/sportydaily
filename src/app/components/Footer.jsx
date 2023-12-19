import React from "react";
// import Link from "next/link";
const Footer = () => {
  return (
    <footer id="footer" className="p-3 bg-gray-800 dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between items-center">
          <div className="md:mb-0">
            <p className="text-[1.2rem] max-w-[200px] text-center font-bold bg-[#FCD107] rounded p-1 text-black">
              ThePitchBasket
            </p>
          </div>
          <div className="my-3 md:mb-0">
            <p className="text-[0.7rem] max_md:max-w-[200px] text-center font-bold px-3 py-1 text-white rounded bg-green-500/[0.2]">
              Powered by Grenlyfe
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-50 uppercase dark:text-white">
                Links
              </h2>
              <ul className="text-gray-400 dark:text-gray-400">
                <li>
                  <a href="/" className="hover:underline">
                    Blogs
                  </a>
                </li>
                <li>
                  <a href="/livestreams" className="hover:underline">
                    Livestreams
                  </a>
                </li>
                <li>
                  <a href="/highlights" className="hover:underline">
                    {/* Highlights */}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-50 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-400 dark:text-gray-400">
                <li>
                  <a
                    target="_blank"
                    href="https://twitter.com/NNyawaya"
                    className="hover:underline"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>



        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500 sm:text-center dark:text-gray-400 my-2 text-center">
            © 2023{" "}
            <a href="#" className="hover:underline">
              ThePitchBasket™
            </a>
            . All Rights Reserved.
          </p>
          <p className="text-[0.7rem] text-gray-500">v2</p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
