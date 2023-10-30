"use client";
import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { checkIsAuthenticated } from "../../funcStore/isAuthenticated";

export default function page() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const run = async () => {
      const logged = await checkIsAuthenticated();
      console.log(logged);
      setLoggedIn(logged);
    };
    run();
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
