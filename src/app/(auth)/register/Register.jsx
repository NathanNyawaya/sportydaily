"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import ReactGA from "react-ga4";
import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';

const deployed = false
export const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();

    // Disable the button and set loading state
    setIsLoading(true);

    // Call the handleSubmit function
    await handleSubmit(e);

    // Enable the button and reset loading state
    setIsLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== passwordAgain) {
      setPassword("");
      setPasswordAgain("");
      return setError("Passwords do not match");
    }

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER}/api/auth/register`,
        {
          username,
          email,
          password,
        }
      );
      // console.log(username, email, password)
      if (res.data.token) {
        ReactGA.event({
          category: "register_category",
          action: "register_action",
          label: "register_lable", // optional
          value: 100, // optional, must be a number
          nonInteraction: false, // optional, true/false
          transport: "xhr", // optional, beacon/xhr/image
        });
        setIsRegistered(true);

        const tokenData = res.data.token;
        localStorage.setItem("ksj", tokenData);

        window.location.replace("/emailconfirm");
      }
    } catch (err) {
      setIsLoading(false);
      setError(err);
    }
  };

  // non interaction event analytic
  useEffect(() => {
    if (deployed) {
      ReactGA.send({
        hitType: "pageview",
        page: "/register",
        title: "Register-page",
      });
    }
  }, []);
  const soccerFacts = [
    "The first soccer game was played by the Romans and Greeks.",
    "Soccer is the most widely played and followed sport in the world.",
    "The FIFA World Cup is the most watched sporting event globally.",
    "The fastest goal in soccer history was scored in 2.8 seconds.",
    "The ball used in soccer matches has remained relatively unchanged for over 100 years.",
    "The World Cup has been won by Brazil the most number of times.",
    "The highest scoring game in soccer history was 149-0.",
    "Soccer players run an average of 9.5 miles per game.",
  ];

  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFactIndex((prevIndex) => (prevIndex + 1) % soccerFacts.length);
    }, 10000); // Change fact every 5 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex items-center justify-center md:justify-end">
      {/* <AuthNavbar /> */}
      <div className="min-h-[70vh] max-w-[90%] flex flex-col justify-center">
        <div className="px-7 py-4 mx-auto bg-gradient-to-r from-[#FCD107]/[0.2] to-[#FCD107]/[0.1]  rounded shadow-xl">
          <h2 className="text-[0.9rem] tracking-wide font-semibold mb-6">Get your account now.</h2>
          {/* <div className=" text-[0.9rem] font-semibold mb-6 overflow-hidden">
            <div className="">
              <span className="">{soccerFacts[currentFactIndex]}</span>
            </div>
          </div> */}
          <form onSubmit={handleSubmit} className="flex flex-col w-full">
            <div className="mb-4">
              <label className="text-sm font-medium tracking-wide text-gray-200 mb-1">
                Username
              </label>
              <input
                className="w-full tracking-wide px-3 text-sm border border-gray-800 text-black rounded focus:text-gray-800"
                type="text"
                placeholder="Enter your username..."
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </div>
            <div className="mb-4">
              <label className="text-sm font-medium tracking-wide text-gray-200 mb-1">
                Email
              </label>
              <input
                className="w-full tracking-wide px-3 text-sm border border-gray-800 rounded text-black focus:text-gray-800"
                type="email"
                placeholder="Enter your email..."
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="mb-4">
              <label className="text-sm font-medium tracking-wide text-gray-200 mb-1">
                Password
              </label>
              <input
                className="w-full tracking-wide px-3 text-sm border border-gray-800 rounded text-black focus:text-gray-800"
                type="password"
                placeholder="Enter your password..."
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <div className="mb-4">
              <label className="text-sm font-medium tracking-wide text-gray-200 mb-1">
                Password Again
              </label>
              <input
                className="w-full tracking-wide px-3 text-sm border border-gray-800 rounded text-black focus:text-gray-800"
                type="password"
                placeholder="Enter your password again..."
                onChange={(e) => setPasswordAgain(e.target.value)}
                value={passwordAgain}
              />
            </div>

            <div className="flex w-full justify-end">
              <button
                className={`${isRegistered ? `bg-green-800` : `bg-blue-800`
                  } tracking-wide text-gray-200 text-[0.8rem] px-4 py-2 rounded hover:bg-gray-900 transition duration-200 cursor-pointer`}
                type="submit"
                onClick={handleClick}
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span className="font-medium">Loading</span>
                  </div>
                ) : isRegistered ? (
                  "Registered successful"
                ) : (
                  "Register"
                )}
              </button>
            </div>
            {error && <div className="tracking-wide mt-4 text-red-500 text-[0.8rem]">{error}</div>}
          </form>
          <div className=" justify-end flex items-center text-gray-200 mt-6 text-[0.8rem]">
            <p className="tracking-wide">Already have an account?</p>
            <ArrowRightAltRoundedIcon fontSize="small" className="animate-bounce text-green-500" />
            <Link href="/login" className="tracking-wide font-bold text-blue-500 ml-2 hover:underline ">
              Login
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Register;
