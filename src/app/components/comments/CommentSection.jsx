import React, { useState } from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleAddComment = () => {
    if (newComment) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };
  return (
    <div>
      {/* blog comments */}
      <div className="border rounded border-gray-200 mt-10 p-4">
        <div className="my-3">
          <p className="text-white text-2xl underline">Comment Section</p>
        </div>
        {comments.map((comment, index) => (
          <div key={index} className="flex items-center p-2">
            <img
              src="/noProfile.png"
              alt="profileImage"
              className="w-10 h-10 object-cover rounded-full"
            />
            <p className="ml-3 text-white">{comment}</p>
            <ThumbUpIcon color="white" size="medium" />
          </div>
        ))}
        <div className="flex items-center p-2">
          <img
            src="/noProfile.png"
            alt="profileImage"
            className="w-10 h-10 object-cover rounded-full"
          />
          <input
            type="text"
            placeholder="Add a comment"
            value={newComment}
            onChange={handleCommentChange}
            className="ml-3 p-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:text-black text-black focus:border-blue-500"
          />
          <button
            onClick={handleAddComment}
            className="ml-2 bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 focus:outline-none"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
