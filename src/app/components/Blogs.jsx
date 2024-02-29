"use client";
import React, { useEffect, useState } from "react";
import { getBlogs } from "../funcStore/controllers/blogs/blog_controllers";
import { getTimeAgo } from "../funcStore/momentTimeProcess";
import LoadingStatus from "../status/Loading";
import HorizontalAds3 from "./ads/Horizonatal3";

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

import ShareIcon from '@mui/icons-material/Share';
import SlidingAds from "./ads/SlidingAds";
import Image from "next/image";
import { Upcoming } from "@mui/icons-material";
import UpcomingMatches from "./features/Upcoming";

import KeyboardDoubleArrowRightSharpIcon from '@mui/icons-material/KeyboardDoubleArrowRightSharp';

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [shareModalOpen, setShareModalOpen] = useState(false);

  useEffect(() => {
    const asyncRunner = async () => {
      setLoading(true);
      try {
        const res = await getBlogs();
        if (res) {
          // console.log(res);
          // console.log(res.data[0].imageFiles[0].url);
          setPosts(res.data);
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
    asyncRunner();
  }, []);

  const handleShare = (postId) => {
    setSelectedPostId(postId);
    setShareModalOpen(true);
  };

  const handleCloseShareModal = () => {
    setShareModalOpen(false);
  };

  const handleSharePlatform = (platform) => {
    const shareUrl = `${window.location.origin}/blog/${selectedPostId}`;
    let shareLink = '';

    switch (platform) {
      case 'whatsapp':
        shareLink = `https://wa.me/?text=${encodeURIComponent(shareUrl)}`;
        break;
      case 'facebook':
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case 'twitter':
        shareLink = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`;
        break;
      default:
        break;
    }

    window.open(shareLink, '_blank');
    setShareModalOpen(false);
  };
  return (
    <>
      <div className="grid grid-cols-12 gap-2 mb-10 items-center">
        <div className="col-span-12 md:col-span-6 w-full " >
          <UpcomingMatches />
        </div>
        {
          posts &&
          posts.map((post, index) => {
            if (index === 0) {
              return (
                <div key={index} className="m-1 col-span-12 md:col-span-6">
                  <div
                    className="flex flex-col justify-center items-center text-white   relative cursor-pointer mb-10 h-full"
                  >
                    <div className="w-full"
                      onClick={() => {
                        setLoading(true);
                        location.replace(`/blog/${post._id}`);
                      }}>
                      <img
                        src={post.imageFiles[0].url}
                        loading="lazy"
                        alt="visuals"
                        className="w-full h-[40vh] object-cover rounded-t"
                      />
                    </div>
                    <div className="bg-gray-800 flex flex-col min-h-[20vh]  w-full p-2">
                      <h2 className={`mb-3 text-[0.9rem] font-semibold tracking-wide`}>
                        {post.title}
                        <span className="ml-3 inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                          {/* &gt; */}
                        </span>
                      </h2>
                      <p className={`m-0 text-[0.7rem] tracking-wide font-medium text-gray-300 w-50 truncate`}>
                        {post.summaryText}
                      </p>
                      <div className="flex justify-center items-center my-6">
                        <p className={`m-0 text-[0.7rem] text-gray-300 shadow shadow-orange-600/[0.2] px-20 py-1 cursor-pointer items-center flex uppercase tracking-wide font-bold`}
                          onClick={() => {
                            setLoading(true);
                            location.replace(`/blog/${post._id}`);
                          }}
                        >
                          Read More
                          <KeyboardDoubleArrowRightSharpIcon size="small"
                            className="" color="warning" />
                        </p>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <button
                          className="text-blue-500 cursor-pointer"
                          onClick={() => handleShare(post._id)}
                        >
                          <ShareIcon size="smaller" className="w-[8px] text-gray-200 opacity-40" />
                        </button>
                        <div className="flex justify-end  gap-x-3 text-[0.7rem] tracking-wide">
                          <p className="font-bold text-gray-400">{post.author}</p>
                          <p className="text-gray-400">{getTimeAgo(post.createdAt)}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              )
            }
          })
        }
      </div>

      {/* STORIES HEADING */}
      <div className="flex mx-1">
        <h2 className="text-white font-bold tracking-wide uppercase text-[0.9rem] shadow shadow-gray-200/[0.1]">Stories</h2>
      </div>



      <div className="max_md:mt-5 mb-20 gap-y-4  max_lg:max-w-5xl lg:w-full lg:mb-0  lg:text-left">
        {loading ? (
          <LoadingStatus />
        ) : (
          posts &&
          posts.map((post, index) => {

            if (index === 0) {
              return
            } else {
              return (
                <div
                  key={index}
                  className="flex max_lg:flex-col justify-center items-center text-white group rounded relative cursor-pointer max_sm:mx-2 my-10"

                >
                  <div className="lg:w-[30%] "
                    onClick={() => {
                      setLoading(true);
                      location.replace(`/blog/${post._id}`);
                    }}>
                    <img
                      src={post.imageFiles[0].url}
                      loading="lazy"
                      alt="visuals"
                      className="w-full h-[20vh] object-cover rounded-t"
                    />
                  </div>
                  <div className="bg-gray-800 lg:w-[70%] flex flex-col w-full h-[20vh] p-2">
                    <h2 className={`mb-3 text-[0.9rem] font-semibold tracking-wide`}>
                      {post.title}
                      <span className="ml-3 inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        {/* &gt; */}
                      </span>
                    </h2>
                    <p className={`m-0 text-[0.7rem] tracking-wide font-medium text-gray-300 w-50 truncate`}>
                      {post.summaryText}
                    </p>
                    <div className="flex items-center justify-between mt-4">
                      <button
                        className="text-blue-500 cursor-pointer"
                        onClick={() => handleShare(post._id)}
                      >
                        <ShareIcon size="small" className="w-[10px] text-gray-300 opacity-20" />
                      </button>
                      <div className="flex justify-end  gap-x-3 text-[0.6rem]">
                        <p className="font-bold text-[0.6rem] text-gray-400  tracking-wide">{post.author}</p>
                        <p className="text-gray-400 font-bold tracking-wide">{getTimeAgo(post.createdAt)}</p>

                      </div>
                    </div>
                  </div>
                </div>
              )
            }

          })
        )}



        {/* Share Modal */}
        {shareModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className="bg-white p-4 rounded shadow-lg">
              <p className="text-lg font-semibold mb-2">Choose a platform to share:</p>
              <div className="flex justify-between">
                <button onClick={() => handleSharePlatform('whatsapp')} className="bg-green-500 text-white px-4 py-2 rounded mr-2">
                  <WhatsAppIcon size="small" />
                </button>
                <button onClick={() => handleSharePlatform('facebook')} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
                  <FacebookIcon size="small" />
                </button>
                <button onClick={() => handleSharePlatform('twitter')} className="bg-black text-white px-4 py-2 rounded">
                  <TwitterIcon size="small" />
                </button>
              </div>
              <button onClick={handleCloseShareModal} className="mt-4 text-gray-500 hover:text-gray-700">
                Cancel
              </button>
            </div>
          </div>
        )}

        <div className="mx-2">{!loading && <HorizontalAds3 />}</div>
      </div>
    </>
  );
};

export default Blogs;
