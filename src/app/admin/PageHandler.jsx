"use client";
import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import jwt_decode from "jwt-decode";
export default function PageHandler() {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const ksj = localStorage.getItem("ksj");
    if (ksj) {
      const decodedToken = jwt_decode(ksj, process.env.NEXT_PUBLIC_JWT_SECRET);
      console.log(decodedToken)
      if (decodedToken.emailConfirm === false) {
        window.location.replace("/emailconfirm")
      }
      if (decodedToken.role === "level_0") {
        setLoggedIn(true)
      } else if (decodedToken === "level_200") {
        window.location.replace("/")
      }
    } else {
      setLoggedIn(false);
      // router.push("/login")

    }
  }, []);

  return (
    <div>
      {loggedIn ? (
        <Layout />
      ) : (
        <div className="text-white bg-black flex justify-center items-center">
          <p>Loading</p>
        </div>
      )}
    </div>
  );
}
