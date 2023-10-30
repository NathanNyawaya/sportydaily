"use client";
import React, { useEffect, useState } from "react";
import { getBlogs } from "../funcStore/controllers/blogs/blog_controllers";
import { getTimeAgo } from "../funcStore/momentTimeProcess";

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const asyncRunner = async () => {
      try {
        const res = await getBlogs();
        if (res) {
          console.log(res);
          // console.log(res.data[0].imageFiles[0].url);
          setPosts(res.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    asyncRunner();
  }, []);

  return (
    <div className="mb-32 gap-y-4  max_lg:max-w-5xl lg:w-full lg:mb-0  lg:text-left">
      {/* post.imageFiles[0].url */}
      {posts &&
        posts.map((post, index) => {
          // console.log(post._id)
          return (
            <div
              key={index}
              className="flex max_lg:flex-col justify-center text-white group mb-2 rounded bg-gray-800 relative cursor-pointer max_sm:m-2"
              onClick={() => {
                localStorage.setItem("b_id", post._id);
                location.replace(`/blog/${index + 1}`);
              }}
            >
              <div className="lg:w-[30%]">
                <img
                  src={post.imageFiles[0].url}
                  alt="visuals"
                  className="w-full h-full rounded-t"
                />
              </div>
              <div className="lg:w-[70%] flex flex-col w-full p-2">
                <h2 className={`mb-3 text-xl font-semibold`}>
                  {post.title}
                  <span className="ml-3 inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    &gt;
                  </span>
                </h2>
                <p className={`m-0 text-sm text-gray-300 w-50 truncate`}>
                  {post.summaryText}
                </p>
                <div className="flex justify-end mt-4 gap-x-3 text-[0.8rem]">
                  <p className="italic text-gray-400">{post.author}</p>
                  <p className="text-gray-400">{getTimeAgo(post.createdAt)}</p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Blogs;
