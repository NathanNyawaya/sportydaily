"use client"
import React, { useEffect, useState } from "react";
import QueueIcon from "@mui/icons-material/Queue";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { getBlog } from "@/app/funcStore/controllers/blogs/blog_controllers";

const EditBlog = () => {
  const [blogDoc, setBlogDoc] = useState({});
  const [images, setImages] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [imageFiles, setImageFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [progress, setProgress] = useState("none");
  const [editOk, setEditOk] = useState(false);
  const [blogData, setBlogData] = useState({
    title: "",
    club: "",
    author: "",
    imageFiles: [""],
    paragraphs: [""],
  });

  const populateFormWithBlogDoc = (blogDoc_) => {
    setBlogData({
      title: blogDoc_.title,
      club: blogDoc_.club,
      summaryText: blogDoc_.summaryText,
      author: blogDoc_.author,
      imageFiles: blogDoc_.imageFiles || [""],
      paragraphs: blogDoc_.paragraphs || [""],
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBlogData({ ...blogData, [name]: value });
  };

  const handleSummaryChange = (event) => {
    const { name, value } = event.target;
    setBlogData({ ...blogData, [name]: value });
  };

  const addParagraph = () => {
    setBlogData({ ...blogData, paragraphs: [...blogData.paragraphs, ""] });
  };

  const removeParagraph = (index) => {
    const updatedParagraphs = blogData.paragraphs.filter((_, i) => i !== index);
    setBlogData({ ...blogData, paragraphs: updatedParagraphs });
  };

  const handleParagraphChange = (event, index) => {
    const updatedParagraphs = [...blogData.paragraphs];
    updatedParagraphs[index] = event.target.value;
    setBlogData({ ...blogData, paragraphs: updatedParagraphs });
  };

  const storeFile = async (file) => {
    const cloud_name = "nathan-nyawaya";
    const api_key = 166418931459651;

    const data = new FormData();
    data.append("file", file);
    data.append("api_key", api_key);
    data.append("upload_preset", "spottyDaily");
    // data.append("signature", signatureResponse.data.signature);
    data.append("timestamp", Date.now() / 1000);

    // store image to cloudinarys
    const cloudinaryResponse = await axios.post(
      `https://api.cloudinary.com/v1_1/${cloud_name}/auto/upload`,
      data,
      {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: (progressEvent) => {
          const progress = (progressEvent.loaded / progressEvent.total) * 100;
          setUploadProgress(progress);
        },
      }
    );
    // cloudinaryResponse.data && console.log("image upload Status 200");
    return {
      publicId: cloudinaryResponse.data.public_id,
      url: cloudinaryResponse.data.secure_url,
    };
  };

  const handleImageSubmit = async (event) => {
    event.preventDefault();
    setUploadProgress(0);
    setProgress("show");

    try {
      let arr = [];
      for (let i = 0; i < images.length; i++) {
        const data = await storeFile(images[i]);
        arr.push(data);
        data && i != images.length - 1 && setUploadProgress(0);
        data && setSuccessMessage("Image upload Successfully");
      }
      setBlogData({ ...blogData, imageFiles: arr });

      console.log(arr);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(blogData);

    try {
      const token = localStorage.getItem("token");
      console.log(`${process.env.NEXT_PUBLIC_SERVER}/api/blogs/${blogDoc._id}`);
      if (token) {
        const res = await axios.put(
          `${process.env.NEXT_PUBLIC_SERVER}/api/blogs/${blogDoc._id}`,
          {
            blogData,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (res.status === 200) {
          console.log(res);
          setEditOk(true);
        }
      }
      console.log(blogData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => {
      const id_raw = localStorage.getItem("bcmt_id");
      if (id_raw) {
        const blog_id = JSON.parse(id_raw);
        const blog = await getBlog(blog_id);
        if (blog) {
          console.log(blog);
          setBlogDoc(blog.data.blog_doc);
          populateFormWithBlogDoc(blog.data.blog_doc); // Populate the form with blogDoc data
        }
      }
    })();
  }, []);

  return (
    <section className="">
      <div className="py-8 px-4 relative ">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-black">
          Edit Blog
        </h2>
        {/* visuals */}
        <div className="sm:col-span-2 hidden">
          <form onSubmit={handleImageSubmit}>
            <label
              className="block mb-2 text-sm font-medium text-gray-900 "
              htmlFor="file_input"
            >
              Upload Image
            </label>
            <div className="flex items-center rounded bg-gray-900">
              <input
                className="block w-full text-sm text-gray-100 rounded cursor-pointer bg-gray-900 focus:outline-none focus:ring-0 border-gray-600"
                id="file_input"
                type="file"
                multiple={true}
                onChange={(e) => setImages(e.target.files)}
              />
              <button
                type="submit"
                className="p-4 bg-yellow-600 rounded-r text-white"
              >
                Upload
              </button>
            </div>
          </form>
          <div className="">
            {uploadProgress > 0 && (
              <div className="flex flex-col mt-1">
                <div
                  className="w-full h-[8px] bg-gray-200 overflow-hidden"
                  style={{ display: `${progress}` }}
                >
                  <div
                    className="bg-green-500 h-[8px]"
                    style={{ width: `${uploadProgress}%` }}
                  />
                </div>
                {/* Success message */}
                {successMessage && uploadProgress == 100 && (
                  <div className="text-green-500 pl-3 py-3 bg-gray-50 shadow">
                    {successMessage}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Blog Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                value={blogData.title}
                onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type Blog Title"
                required
              />
            </div>

            <div>
              <label
                htmlFor="club"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Club
              </label>
              <select
                name="club"
                id="club"
                value={blogData.club}
                onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                <option value="">Select club</option>
                {[
                  "EPL Arsenal",
                  "EPL Aston Villa",
                  "EPL Brentford",
                  "EPL Brighton & Hove Albion",
                  "EPL Burnley",
                  "EPL Chelsea",
                  "EPL Crystal Palace",
                  "EPL Everton",
                  "EPL Leeds United",
                  "EPL Leicester City",
                  "EPL Liverpool",
                  "EPL Manchester City",
                  "EPL Manchester United",
                  "EPL Newcastle United",
                  "EPL Norwich City",
                  "EPL Southampton",
                  "EPL Tottenham Hotspur",
                  "EPL Watford",
                  "EPL West Ham United",
                  "EPL Wolverhampton Wanderers",
                ].map((team, index) => (
                  <option key={index} value={team}>
                    {team}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="author"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Creator
              </label>
              <input
                type="text"
                name="author"
                id="author"
                value={blogData.author}
                onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Creator"
                required
              />
            </div>

            {/* summary */}
            <div className="sm:col-span-2">
              <label
                htmlFor="summaryText"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Body Summary
              </label>
              <textarea
                id="blogSummary"
                name="summaryText" // Add a name to the textarea
                rows="8"
                value={blogData.summaryText}
                onChange={handleSummaryChange} // Use the function to handle changes
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Your blog summary here"
              ></textarea>
            </div>
            {/* add paragraphs */}
            {blogData.paragraphs.map((paragraph, index) => (
              <div key={index} className="sm:col-span-2">
                <label
                  htmlFor={`paragraph-${index}`}
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Body Paragraph - {index + 1}
                </label>
                <textarea
                  id={`paragraph-${index}`}
                  name={`paragraph-${index}`}
                  rows="8"
                  value={paragraph}
                  onChange={(event) => handleParagraphChange(event, index)}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Your description here"
                ></textarea>
                <div className="flex justify-end gap-4">
                  {index === blogData.paragraphs.length - 1 && (
                    <div>
                      {blogData.paragraphs.length > 1 && (
                        <DeleteIcon
                          onClick={() => removeParagraph(index)}
                          className="text-red-500 mt-2 cursor-pointer mx-4"
                        />
                      )}
                      <QueueIcon
                        onClick={addParagraph}
                        className="text-black mt-2 cursor-pointer mx-4"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <button
            type="submit"
            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900"
          >
            Edit Blog
          </button>
        </form>
        {/* successs modal */}
        {editOk && (
          <div className="absolute top-10 right-10 left-10 bg-white items-center z-50">
            <div className="flex items-center justify-center bg-green-400 p-5 relative">
              <p className="absolute top-3 right-3 cursor-pointer" onClick={()=>setEditOk(false)}>X</p>
              <p className="text-white">Blog update Successfully</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default EditBlog;
