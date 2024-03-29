"use client";
import React, { useEffect, useState } from "react";
import {
  deleteBlog,
  getBlogs,
} from "@/app/funcStore/controllers/blogs/blog_controllers";
import Link from "next/link";
import axios from "axios";

const AllBlogs = () => {
  const [blogDocs, setBlogDocs] = useState([]);

  const [loading, setLoading] = useState(false);
  const [disable, setDisable] = useState(false);
  const [indexing, setIndexing] = useState(0);

  useEffect(() => {
    setLoading(true);
    // self invocking func
    (async () => {
      const blogs = await getBlogs();
      if (blogs) {
        setBlogDocs(blogs.data);
      }
    })();
  }, []);

  const deleteBlogs = async (id) => {
    try {
      setDisable(true);
      const res = await deleteBlog(id);
      if (res) {
        if (res.status === 200) {
          alert(res.data.message);
          setDisable(false);

          // refresh data
          const blogs = await getBlogs();
          if (blogs) {
            setBlogDocs(blogs.data);
          }
        } else if (res.status === 404) {
          setDisable(false);
          alert(res.data.message);
        }
      }
    } catch (error) {
      console.error(error);
      setDisable(false);
    }
  };

  const handleDeleteBlog = (blog_obj_id, i) => {
    setIndexing(i);
    // console.log(blog_obj_id);
    deleteBlogs(blog_obj_id);
  };
  const handleEditLink = (blog_obj_id) => {
    localStorage.setItem("bcmt_id", JSON.stringify(blog_obj_id));
    window.location.replace("/admin/edit");
  };
  return (
    <div>
      {/* table--section */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg sm:rounded-b-none bg-white ">
        <table className="w-full text-sm text-left text-gray-500 text-gray-400">
          <caption className="p-1 md:p-5 text-lg font-semibold text-left text-gray-900 bg-white bg-gray-100">
            Blogs
          </caption>
          <thead className="text-xs text-gray-800 uppercase bg-gray-200 bg-gray-100 text-gray-400">
            <tr>
              <th scope="col" className="md:px-6 px-1 py-3">
                Image Preview
              </th>
              <th scope="col" className="md:px-6 px-1 py-3">
                Blog Id
              </th>
              <th scope="col" className="md:px-6 px-1 py-3">
                Headline Summary
              </th>
              <th scope="col" className="md:px-6 px-1 py-3">
                Club
              </th>

              <th scope="col" className="md:px-6 px-1 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody id="blogDocs">
            {blogDocs.length > 0 ? (
              blogDocs.map((blog_doc, index) => (
                <tr
                  key={index}
                  className="bg-white border-b text-gray-700 border-gray-700"
                >
                  <td className="md:px-6 px-1 py-4">
                    <img
                      src={blog_doc.imageFiles[0].url}
                      alt="blog_image"
                      className="w-[100px] h-auto rounded"
                    />
                  </td>

                  <th
                    scope="row"
                    className="md:px-6 px-1 py-4 font-medium text-gray-500 whitespace-nowrap"
                  >
                    <p
                      onClick={() => alert("Opening Property page")}
                      className="hover:underline"
                    >
                      {blog_doc._id}
                    </p>
                  </th>
                  <td className="md:px-6 px-1 py-4">{blog_doc.title}</td>
                  <td className="md:px-6 px-1 py-4">{blog_doc.club}</td>
                  <td className="md:px-6 px-1 py-4">
                    <div className="flex items-center text-white gap-2">
                      <p
                        className="bg-blue-500 rounded px-2 py-1 cursor-pointer"
                        onClick={() => handleEditLink(blog_doc._id)}
                      >
                        Edit
                      </p>
                      <p
                        className={`${
                          disable && indexing === index
                            ? "bg-green-500"
                            : "bg-red-500"
                        } rounded px-2 py-1 cursor-pointer`}
                        onClick={() => handleDeleteBlog(blog_doc._id, index)}
                      >
                        Delete
                      </p>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="md:px-6 px-1 py-4">Loading...</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBlogs;
