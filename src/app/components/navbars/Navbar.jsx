import { clock } from "@/app/assets";
import jwt_decode from "jwt-decode";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Navbar = ({ theme }) => {
  const [time, setTime] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [greeting, setGreeting] = useState("");

  const router = useRouter()
  useEffect(() => {
    const ksj = localStorage.getItem("ksj");
    if (ksj) {
      const decodedToken = jwt_decode(ksj, process.env.NEXT_PUBLIC_JWT_SECRET);
      setUserName(decodedToken.userName);
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
      // router.push("/login")

    }
  }, []);

  useEffect(() => {
    function displayCurrentTime() {
      const currentTime = new Date();
      const hours = currentTime.getHours();
      const minutes = currentTime.getMinutes();
      const timeString = `${hours}:${minutes}`;
      setTime(timeString);

      // Determine the greeting based on the time
      if (hours < 12) {
        setGreeting("Good morning");
      } else if (hours < 18) {
        setGreeting("Good afternoon");
      } else {
        setGreeting("Good evening");
      }
    }

    const intervalID = setInterval(displayCurrentTime, 1000);
    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return (
    <div className={`w-full ${theme ? theme.bg : "bg-gradient-to-r from-black to-[#FCD107]"} pr-1 rounded text-gray-800`}>
      <div className="flex justify-between gap-x-1 items-center">
        <div className="flex justify-between items-center">
          <Link href={`/`}>
            <p className={`md:text-[2.4rem] text-[1.1rem] cursor-pointer text-center font-bold  rounded p-1 text-gray-50`}>
              ThePitchBasket™
            </p>
          </Link>
        </div>
        <div className="flex justify-end items-center text-white">
          {time && (
            <div className="flex gap-x-1 bg-green-500/[0.5] p-2 items-center max_md:max-w-[60px]">
              <img src="/clock.gif" alt="Time" className="h-[15px] w-[15px] rounded-full" />
              <h2 className="md:text-[0.962rem] text-[0.7rem]  font-bold text-white mr-1">
                {time} EAT
              </h2>
            </div>
          )}
          <div className="flex rounded items-center">
            {!loggedIn && (
              <Link href={`/login`}>
                <p className="text-[0.7rem] font-medium cursor-pointer hover:bg-gray-700 text-center bg-gray-800 rounded-r m-1 px-2 text-gray-50">
                  Member Login
                </p>
              </Link>
            )}
            {userName != "" && userName != undefined && loggedIn && (
              <p className="flex items-center md:text-[0.962rem] text-[0.7rem] font-bold px-1">
                {`${greeting}, ${userName}`}
              </p>
            )}
            {loggedIn && (
              <p
                onClick={() => {
                  localStorage.clear();
                  window.location.replace("/");
                }}
                className="text-[0.7rem] font-bold cursor-pointer hover:bg-gray-700 text-center bg_1 rounded p-2 text-gray-50"
              >
                Logout
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
