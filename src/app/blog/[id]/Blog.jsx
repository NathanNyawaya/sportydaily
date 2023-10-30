import React, { useEffect, useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import SideBarAds from "@/app/components/ads/SideBarAds";
import CommentSection from "@/app/components/comments/CommentSection";
import HorizontalAds from "@/app/components/ads/HorizontalAds";
import FeaturedBlogs from "@/app/components/featured/FeaturedBlogs";
import axios from "axios";

const Blog = () => {
  const [blogDoc, setBlogDoc] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const asyncRunner = async () => {
      try {
        const blog_id = localStorage.getItem("b_id");
        if (blog_id) {
          const res = await axios.get(
            `${process.env.NEXT_PUBLIC_SERVER}/api/blogs/single/${blog_id}`
          );
          if (res) {
            setBlogDoc(res.data.blog_doc);
            setLoading(false);
            // console.log(res.data.blog_doc);
          }
        }
      } catch (error) {
        console.error(error);
      }
    };
    asyncRunner();
  }, []);
  useEffect(() => {
    blogDoc && blogDoc.imageFiles && console.log(blogDoc.imageFiles[0].url);
  }, [blogDoc]);
  return (
    <div>
      {blogDoc && blogDoc.imageFiles ? (
        <div className="bg- rounded p-1">
          <p
            onClick={() => {
              location.replace(`/`);
              localStorage.removeItem("b_id");
            }}
            className="text-black "
          >
            <KeyboardBackspaceIcon
              className="text-white font-bold cursor-pointer "
              size="medium"
              color="white"
            />
          </p>
          {/* blog header */}
          <div className="my-10">
            <h1 className="leading-normal text-5xl font-bold  text-white">
              {blogDoc.title}
            </h1>
          </div>

          <div className="grid grid-cols-12 gap-x-2 items-start">
            <div className="col-span-9">
              {/* blog visuals */}
              <div className="flex gap-x-1 mb-2">
                <img
                  src={blogDoc.imageFiles[0].url}
                  alt="visuals"
                  className="w-full max-h-[80ch] object-cover rounded-lg"
                />
              </div>
              {/* blog body */}
              <div className="my-10">
                {blogDoc.paragraphs.map((p, index) => (
                  <p key={index} className="my-5 text-white">
                    {p}
                  </p>
                ))}
              </div>

              {/* ads section */}
              <HorizontalAds />
              {/* comments */}
              <CommentSection />
            </div>
            <div className="col-span-3 sticky top-0 flex flex-col gap-y-4 rounded">
              <SideBarAds />
              <FeaturedBlogs />
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-[70vh] text-white">
          {loading ? "Loading ..." : "No document found"}
        </div>
      )}
    </div>
  );
};

export default Blog;
