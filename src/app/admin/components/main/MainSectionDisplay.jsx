"use client";
import React, { useState } from "react";
import BlogForm from "../BlogForm";

const MainSectionDisplay = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="text-black p-2">
      MainSectionDisplay
      <p
        className="border p-2 rounded cursor-pointer max-w-[20%]"
        onClick={() => setToggle((prev) => !prev)}
      >
        Add Blog
      </p>
      {toggle && (
        <div>
          <BlogForm />
        </div>
      )}
    </div>
  );
};

export default MainSectionDisplay;
