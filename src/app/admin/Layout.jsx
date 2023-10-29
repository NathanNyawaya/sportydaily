import React from "react";

import Navbar from "@/app/components/navbars/Navbar";
import Footer from "@/app/components/Footer";
import Home from "./components/Home";

const Layout = () => {
  return (
    <div className="">
      <Navbar />
      <div className="mx-auto max-w-screen-xl my-10">
        <Home />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
