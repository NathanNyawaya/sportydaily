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
          console.log(res);
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
    <div className="mb-20 gap-y-4  max_lg:max-w-5xl lg:w-full lg:mb-0  lg:text-left">
      {loading ? (
        <LoadingStatus />
      ) : (
        posts &&
        posts.map((post, index) => {
          // console.log(post._id)
          return (
            <div
              key={index}
              className="flex max_lg:flex-col justify-center text-white group mb-2 rounded bg-gray-800 relative cursor-pointer max_sm:m-2"

            >
              <div className="lg:w-[30%] "
                onClick={() => {
                  setLoading(true);
                  location.replace(`/blog/${post._id}`);
                }}>
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
                <div className="flex items-center justify-between mt-4">
                  <button
                    className="text-blue-500 cursor-pointer"
                    onClick={() => handleShare(post._id)}
                  >
                    <ShareIcon size="smaller" className="  w-[30px] text-gray-300" />
                  </button>
                  <div className="flex justify-end  gap-x-3 text-[0.8rem]">
                    <p className="italic text-gray-400">{post.author}</p>
                    <p className="text-gray-400">{getTimeAgo(post.createdAt)}</p>

                  </div>
                </div>
              </div>
            </div>
          );
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
  );
};

export default Blogs;
