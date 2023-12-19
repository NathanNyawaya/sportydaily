import React, { useEffect, useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import SideBarAds from "@/app/components/ads/SideBarAds";
// import CommentSection from "@/app/components/comments/CommentSection";
import HorizontalAds3 from "@/app/components/ads/Horizonatal3";
// import FeaturedBlogs from "@/app/components/featured/FeaturedBlogs";
import axios from "axios";
import LoadingStatus from "@/app/status/Loading";
import { useParams } from "next/navigation";

const Blog = () => {
  const [blogDoc, setBlogDoc] = useState({});
  const [loading, setLoading] = useState(true);
  
  const document_id_raw = useParams() 
  const document_id = document_id_raw.id
  useEffect(() => {
    const asyncRunner = async () => {
      try {
        
        if (document_id) {
          const res = await axios.get(
            `${process.env.NEXT_PUBLIC_SERVER}/api/blogs/single/${document_id}`
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
    <div className="m-1">
      {
        loading ? <LoadingStatus/> :
        blogDoc && blogDoc.imageFiles && (
          <div className="rounded">
            <p
              onClick={() => {
                location.replace(`/`);
                localStorage.removeItem("b_id");
              }}
              className="my-4"
            >
              <KeyboardBackspaceIcon
                className="text-white font-bold cursor-pointer "
                size="medium"
                color="white"
              />
            </p>
            {/* blog header */}
            <div className="max_ss:mb-2 md:my-10">
              <h1 className="leading-normal text-xl md:text-3xl lg:text-4xl font-bold  text-white">
                {blogDoc.title}
              </h1>
            </div>
  
            <div className="grid grid-cols-12 gap-x-2 items-start">
              <div className="col-span-12 md:col-span-9">
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
                <HorizontalAds3 />
               
                {/* <CommentSection /> */}
              </div>
              <div className="max_md:hidden col-span-3 sticky top-[20%] bottom-0 right-0 flex flex-col gap-y-4 rounded">
                <SideBarAds />
                {/* <FeaturedBlogs /> */}
              </div>
            </div>
          </div>
        )
      }
      
    </div>
  );
};

export default Blog;
