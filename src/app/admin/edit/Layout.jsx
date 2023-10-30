"use client"
import React from "react";
import Navbar from "@/app/components/navbars/Navbar";
import Footer from "@/app/components/Footer";
import EditBlog from "../components/blogs/EditBlog";
import Link from "next/link";

const Layout = () => {
  return (
    <div className="">
      <Navbar />
      <div className="mx-auto max-w-screen-xl my-10">
        <div className="grid grid-cols-10 gap-x-2">
          <div className="col-span-10 flex flex-col gap-3">
            <Link
              href="/admin"
              onClick={() => {
                localStorage.removeItem("bcmt_id");
              }}
            >
              Back
            </Link>
            <p className="text-xl font-bold my-5">Edit Blog</p>
          </div>
          {/* admin sidebar */}

          {/* main content */}
          <div className="col-span-10 bg-white w-full">
            <EditBlog />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
