import React, { useRef, useState } from "react";
import axios from "axios";
import ReactGA from "react-ga4";
import jwt_decode from "jwt-decode";
import Footer from "../components/Footer";
import Navbar from "../components/navbars/Navbar";

export default function ConfirmEmail() {
  const code = useRef();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const deployed = false

  const handleClick = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    const token = localStorage.getItem("ksj");

    try {
      // Make the API request to confirm the email
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER}/api/auth/confirmemail`,
        {
          code: code.current.value,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.data) {
        // Send a custom event to Google Analytics
        if (deployed) {
          ReactGA.event({
            category: "login_category",
            action: "login_action",
            label: "login_label", // optional
            value: 101, // optional, must be a number
            nonInteraction: false, // optional, true/false
            transport: "xhr", // optional, beacon/xhr/image
          });

        }
        // Check email confirmation result
        if (res.data.message === "Email Confirmation Success") {
          // Redirect to the dashboard
          setLoggedIn(true);
          if (res.data.token) {
            // Store the token in localStorage
            localStorage.setItem("ksj", res.data.token);
            const decodedToken = jwt_decode(
              res.data.token,
              process.env.NEXT_PUBLIC_JWT_SECRET
            );
            if (decodedToken.role === "level_0") {
              window.location.replace("/admin")
            } else if (decodedToken.role === "level_200") {
              window.location.replace("/")
            }
          }
        } else {
          setError("Email Confirmation Failed");
        }
      }
    } catch (err) {
      setIsLoading(false);
      console.log(err)
      if (err.response.status === 401) {
        setError("Invalid email or password");
      } else if (err.response.status === 404) {
        setError("Email not found");
      }
      else if (err.response.status === 400) {
        setError(err.response.data.message);
      } else {
        setError("An error occurred. Please try again.");
      }
    }


    // Enable the button and reset loading state
    setIsLoading(false);
  };

  return (
    <div className="h-screen flex flex-col justify-between">
      <Navbar />
      <div className="flex flex-col justify-center">
        <div className="flex mx-auto flex-col gap-2 bg-gradient-to-r from-[#FCD107]/[0.2] to-[#FCD107]/[0.1] p-3 rounded">
          <p className="text-sm font-bold tracking-wide mb-3 font-bold text-gray-200">Confirm Email</p>
          {error && <p className="text-red-500">{error}</p>}{" "}
          <input
            type="text"
            placeholder="Confirmation code"
            className="border border-gray-900 text-sm font-bold text-black rounded px-3 focus:text-gray-800"
            ref={code}
          />
          <div className="flex items-center justify-end">
            {isLoading ? (
              <button
                type="button"
                className="bg-gray-800 px-3 py-1 flex justify-center rounded text-white font-medium cursor-pointer"
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
                  } px-3 py-1 rounded text-white font-medium cursor-pointer hover:bg-gray-900`}
                onClick={handleClick}
                disabled={isLoading} // Disable the button when loading
              >
                {loggedIn ? "Confirmation success" : "Confirm"}
              </button>
            )}
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}
