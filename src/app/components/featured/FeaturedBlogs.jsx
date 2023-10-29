"use client";
import React from "react";

const FeaturedBlogs = () => {
  const posts = [
    {
      title: "Finally Reece James..",
      image:
        "https://img.chelseafc.com/image/upload/f_auto,w_1400,q_90/editorial/news/2023/10/18/james-training-1810.jpg",
      description: "Enzo Fernandez and Moises Caicedo .....",
    },
    {
      title: "Finally Reece James ..",
      image:
        "https://img.chelseafc.com/image/upload/f_auto,w_1400,q_90/editorial/news/2023/10/18/james-training-1810.jpg",
      description: "Enzo Fernandez and Moises  ..",
    },
  ];
  return (
    <div className="mb-32 gap-x-4 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:text-left">
      {posts.map((post, index) => (
        <div
          key={index}
          className="h-[10vh] flex items-center justify-center text-white group mb-2 rounded bg-gray-800 relative"
          onClick={() => location.replace(`/blog/${index + 1}`)}
        >
          <img
            src={post.image}
            alt="visuals"
            className="w-[90px] h-full rounded-t"
          />
          <div className="flex flex-col w-full p-2">
            <h2 className={`mb-3 text-sm font-semibold`}>{post.title}</h2>
            <p
              className={`m-0 max-w-[80ch] text-sm opacity-50 overflow-ellipsis`}
            >
              {post.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedBlogs;
