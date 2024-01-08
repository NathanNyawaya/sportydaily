import React from "react";
import Blog from "./Blog";
import Navbar from "@/app/components/navbars/Navbar";
import Footer from "@/app/components/Footer";

const Layout = () => {
  return (
    <main className="relative">
      <div className="mx-auto max-w-screen-xl">
        <div className="z-100 sticky top-0 z-40 ">
          {/* navigations */}
          <Navbar />
        </div>
        <div className="grid grid-rows-[auto_1fr_auto] h-screen">
          <div className=" flex min-h-screen flex-col text-black">
            {/* main content */}
            <Blog />
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default Layout;
