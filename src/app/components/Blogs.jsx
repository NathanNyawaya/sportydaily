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
    <div className=" mb-32 gap-x-4  lg:max-w-5xl lg:w-full lg:mb-0  lg:text-left">
      {/* post.imageFiles[0].url */}
      {posts &&
        posts.map((post, index) => {
          // console.log(post._id)
          return (
            <div
              key={index}
              className="flex items-center justify-center text-white group mb-2 rounded bg-gray-800 relative cursor-pointer"
              onClick={() => {
                localStorage.setItem("b_id", post._id);
                location.replace(`/blog/${index + 1}`);
              }}
            >
              <div className="w-[40%]">
                <img
                  src={post.imageFiles[0].url}
                  alt="visuals"
                  className="w-[400px] h-auto rounded-t"
                />
              </div>
              <div className="w-[60%] flex flex-col w-full p-2">
                <h2 className={`mb-3 text-2xl font-semibold`}>
                  {post.title}
                  <span className="ml-3 inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    &gt;
                  </span>
                </h2>
                <p className={`m-0 text-sm text-gray-300`}>
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
