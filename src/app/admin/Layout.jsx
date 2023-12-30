import React from "react";

import Navbar from "@/app/components/navbars/Navbar";
import Footer from "@/app/components/Footer";
import Home from "./components/Home";

const Layout = () => {
  return (
    <div className="relative">
      <div className="mx-auto max-w-screen-xl">
        <div className="z-40">
          <Navbar />
        </div>
      </div>

      <div className="my-2 ">
        <Home />
      </div>
      <div className="mx-auto max-w-screen-xl">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
