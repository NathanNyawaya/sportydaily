import React from "react";
import Blog from "./Blog";
import Navbar from "@/app/components/navbars/Navbar";
import Footer from "@/app/components/Footer";

const Layout = () => {
  return (
    <div className="">
      <main className="relative">
        <div className="mx-auto max-w-screen-xl">
          <div className="z-100 sticky top-0 z-50 ">
            {/* navigations */}
            <Navbar />
          </div>
          <div className=" flex min-h-screen flex-col text-black">
            {/* main content */}
            <Blog />
          </div>
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Layout;
