"use client";
import React, { useEffect, useState } from "react";
import BlogForm from "../BlogForm";
import AllBlogs from "../blogs/AllBlogs";
import AllLivestreams from "../livestreams/AllLivestreams";
import StreamsLayout from "../livestreams/StreamsLayout";

import HomeDashboard from "../HomeDashboard";
import AllBetTips from "../../predictions/AllTips";

const MainSectionDisplay = ({ active }) => {
  const [loading, setLoading] = useState(true);
  const [componentToRender, setComponentToRender] = useState(null);

  useEffect(() => {
    console.log(active);
    setLoading(true);
    let newComponentToRender = null;

    // open_edit
    switch (active) {
      case "add_blog":
        newComponentToRender = <BlogForm />;
        break;
      case "all_blogs":
        newComponentToRender = <AllBlogs />;
        break;
      case "all_livestreams":

        newComponentToRender = <StreamsLayout />;
        break;
      case "bets_tips":
        newComponentToRender = <AllBetTips />;
        break;
      case "home_dashboard":
        newComponentToRender = <HomeDashboard />;
        break;
      default:
        newComponentToRender = <p>Default</p>;
    }

    setComponentToRender(newComponentToRender);
    setLoading(false);
  }, [active]);

  return (
    <div className="text-black p-2">
      {loading ? (
        <div className="flex h-[40vh] items-center justify-center">
          <p>Loading ...</p>
        </div>
      ) : (
        componentToRender
      )}
    </div>
  );
};

export default MainSectionDisplay;
