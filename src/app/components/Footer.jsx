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
            {/* <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-50 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-400 dark:text-gray-400">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <p className="text-sm text-gray-500 sm:text-center dark:text-gray-400 my-2 text-center">
            © 2023{" "}
            <a href="#" className="hover:underline">
              ThePitchBasket™
            </a>
            . All Rights Reserved.
          </p>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a
              target="_blank"
              href="https://twitter.com/NNyawaya"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-5 h-5 rounded text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
