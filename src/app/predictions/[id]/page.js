"use client";

import React, { useState } from "react";
import MatchLinkLayout from "./Layout";

export default function page() {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <div>
      {loggedIn ? (
        <MatchLinkLayout />
      ) : (
        <div className="text-white bg-black flex justify-center items-center">
          <p>Loading</p>
        </div>
      )}
    </div>
  );
}
