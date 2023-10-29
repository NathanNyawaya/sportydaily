"use client"


import React, { useRef, useState } from "react";
import axios from "axios";
import Link  from "next/link";
import ReactGA from "react-ga4";
import jwt_decode from "jwt-decode";
import { Helmet } from "react-helmet";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const [error, setError] = useState("");
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
        ReactGA.event({
          category: "login_category",
          action: "login_action",
          label: "login_lable", // optional
          value: 101, // optional, must be a number
          nonInteraction: false, // optional, true/false
          transport: "xhr", // optional, beacon/xhr/image
        });
        // Redirect to the dashboard
        setLoggedIn(true);
        if (res.data.token) {
          // Store the token in localStorage
          localStorage.setItem("token", res.data.token);
          const decodedToken = jwt_decode(
            res.data.token,
            process.env.NEXT_PUBLIC_JWT_SECTRET
          );
          const savedUrl = localStorage.getItem("currentUrl");

          if (savedUrl) {
            window.location.replace(savedUrl);
            localStorage.removeItem("currentUrl")
          } else {
            window.location.replace("/admin");
          }
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
    <div className="h-screen">
      <Helmet>
        <title>SpottyDaily Login</title>
        <meta
          name="description"
          content="Log in to your account."
        />
      </Helmet>
      <div className="min-h-[70vh] flex flex-col justify-center">
        <div className="flex mx-auto flex-col gap-2 bg-white p-3 rounded">
          <p className="text-lg mb-3">Login</p>
          {error && <p className="text-red-800">{error}</p>}{" "}
          {/* Display the error message */}
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-900 rounded p-3 focus:text-gray-800"
            ref={email}
          />
          <input
            placeholder="Password"
            type="password"
            className="border border-gray-900 rounded p-3 focus:text-gray-800"
            ref={password}
          />
          {isLoading ? (
            <button
              type="button"
              className="bg-gray-800 p-4 flex justify-center rounded text-white font-medium cursor-pointer"
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
              className={`${
                loggedIn ? `bg-green-700` : `bg-blue-800`
              } p-4 rounded text-white font-medium cursor-pointer hover:bg-gray-900`}
              onClick={handleClick}
              disabled={isLoading} // Disable the button when loading
            >
              {loggedIn ? "Login success" : "Log in"}
            </button>
          )}
          <span className="text-center my-1 text-red-800 hover:underline">
            Forgot Password?
          </span>
          <div className="flex flex-col">
            <Link
              href="/auth/register"
              className="text-center my-1 font-semibold hover:underline text-gray-900"
            >
              Register a New Account
            </Link>
            <Link
              href="/"
              className="text-center my-1 font-medium hover:underline hover:text-gray-800 text-gray-600"
            >
              Skip
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
