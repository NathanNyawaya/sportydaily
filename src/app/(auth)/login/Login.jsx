"use client"


import React, { useRef, useState } from "react";
import axios from "axios";
import Link from "next/link";
import ReactGA from "react-ga4";
import jwt_decode from "jwt-decode";
const deployed = false
export default function Login() {
  const email = useRef();
  const password = useRef();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Make the API request
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER}/api/auth/login`,
        {
          email: email.current.value,
          password: password.current.value,
        }
      );

      if (res.data) {
        // Send a custom event google-Analytics
        if (res.data.statusCode === 400) {
          setError(res.data.message);
          setLoggedIn(false);
          setIsLoading(false);
          return
        }


        if (res.data.statusCode === 200) {
          if (res.data.token) {
            setSuccess(res.data.message);
            setLoggedIn(true);
            setIsLoading(false);
            localStorage.setItem("ksj", res.data.token);
            const decodedToken = jwt_decode(
              res.data.token,
              process.env.NEXT_PUBLIC_JWT_SECTRET
            );
            const level = decodedToken.role

            const savedUrl = localStorage.getItem("currentUrl");

            if (savedUrl) {
              localStorage.removeItem("currentUrl")
              window.location.replace(savedUrl);
            } else {
              if (level === "level_0") {
                window.location.replace("/admin");
              }
              if (level === "level_200") {
                window.location.replace("/");
              }
            }
          }
        }

        if (deployed) {
          ReactGA.event({
            category: "login_category",
            action: "login_action",
            label: "login_lable", // optional
            value: 101, // optional, must be a number
            nonInteraction: false, // optional, true/false
            transport: "xhr", // optional, beacon/xhr/image
          });
        }
      }
    } catch (err) {
      setIsLoading(false);
      if (err.response.status === 401) {
        setError("Invalid email or password");
      } else if (err.response.status === 404) {
        setError("Email not found");
      } else {
        setError("An error occurred. Please try again.");
      }
    }

    // Enable the button and reset loading state
    setIsLoading(false);
  };

  return (
    <div className="flex items-center justify-end min-h-[70vh]">

      <div className="flex flex-col">
        <div className="flex mx-auto flex-col gap-2 p-3 bg-gradient-to-r from-[#FCD107]/[0.2] to-[#FCD107]/[0.1] justify-center rounded">
          <p className="text-sm font-bold tracking-wide mb-3">Login</p>
          {error && <p className="text-red-800">{error}</p>}
          {success && <p className="text-green-800">{success}</p>}
          {/* Display the error message */}
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-900 rounded px-3 text-black focus:text-gray-800 text-black"
            ref={email}
          />
          <input
            placeholder="Password"
            type="password"
            className="border border-gray-900 rounded px-3 text-black focus:text-gray-800 text-black"
            ref={password}
          />
          <div className="flex items-center justify-end">
            {isLoading ? (
              <button
                type="button"
                className="bg-gray-800 px-4 py-1 flex justify-center rounded text-white font-medium cursor-pointer"
                disabled
              >
                <svg
                  className="mr-3 h-5 w-5 animate-spin text-white"
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
                <span className="font-medium"> Loading </span>
              </button>
            ) : (
              <button
                className={`${loggedIn ? `bg-green-700` : `bg-blue-800`
                  } px-4 py-1 rounded text-white font-medium cursor-pointer hover:bg-gray-900`}
                onClick={handleClick}
                disabled={isLoading} // Disable the button when loading
              >
                {loggedIn ? "Login success" : "Log in"}
              </button>
            )}
          </div>
          {/* <span className="text-center my-1 text-red-800 hover:underline ">
            Forgot Password?
          </span> */}
          <div className="flex flex-col items-end">
            <Link
              href="/register"
              className="text-center my-1 font-semibold hover:underline text-gray-200 text-sm"
            >
              Register a New Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
