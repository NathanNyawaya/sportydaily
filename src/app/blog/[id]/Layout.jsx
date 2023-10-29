import React from "react";
import Blog from "./Blog";
import Navbar from "@/app/components/navbars/Navbar";
import Footer from "@/app/components/Footer";

const Layout = () => {
  return (
    <div className="">
      <Navbar />
      <div className="mx-auto max-w-screen-xl my-10">
        <Blog />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
