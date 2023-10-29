"use client";

import React, { useEffect, useState } from "react";
import Link  from "next/link";
import axios from "axios";
import ReactGA from "react-ga4";
// import jwt_decode from "jwt-decode";
import { Helmet } from "react-helmet";

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
        // Send a custom event google-Analytics
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
        localStorage.setItem("token", tokenData);

        window.location.replace("/admin");
      }
    } catch (err) {
      setIsLoading(false);
      setError(err);
    }
  };

  // non interaction event analytic
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: "/register",
      title: "Register-page",
    });
  }, []);

  return (
    <div className=" h-screen">
      <Helmet>
        <title>Mynyumba Rental Properties - Register</title>
        <meta
          name="description"
          content="Create a new account with Mynyumba Rental Properties."
        />
      </Helmet>
      {/* <AuthNavbar /> */}
      <div className="min-h-[70vh] flex flex-col justify-center">
        <div className="p-7 mx-auto bg-white rounded shadow-xl">
          <h2 className="text-2xl font-semibold mb-6">Create an Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block font-bold text-gray-700 mb-2">
                Username
              </label>
              <input
                className="w-full p-3 border border-gray-800 text-black rounded focus:text-gray-800"
                type="text"
                placeholder="Enter your username..."
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold text-gray-700 mb-2">
                Email
              </label>
              <input
                className="w-full p-3 border border-gray-800 rounded focus:text-gray-800"
                type="email"
                placeholder="Enter your email..."
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold text-gray-700 mb-2">
                Password
              </label>
              <input
                className="w-full p-3 border border-gray-800 rounded focus:text-gray-800"
                type="password"
                placeholder="Enter your password..."
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold text-gray-700 mb-2">
                Password Again
              </label>
              <input
                className="w-full p-3 border border-gray-800 rounded focus:text-gray-800"
                type="password"
                placeholder="Enter your password again..."
                onChange={(e) => setPasswordAgain(e.target.value)}
                value={passwordAgain}
              />
            </div>

            <button
              className={`w-full ${
                isRegistered ? `bg-green-800` : `bg-blue-800`
              } text-white p-4 rounded hover:bg-gray-900 transition duration-200 cursor-pointer`}
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
            {error && <div className="mt-4 text-red-500 text-sm">{error}</div>}
          </form>
          <div className="mt-6 text-sm">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-blue-500 hover:underline" to="/login">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
