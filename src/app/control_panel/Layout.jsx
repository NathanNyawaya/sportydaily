import React from "react";
import Navbar from "@/app/components/navbars/Navbar";
import Footer from "@/app/components/Footer";
import ControlPanel from "./ControlPanel";

const Layout = () => {
  return (
    <div className="">
      <div className="mx-auto max-w-screen-xl">
        <Navbar />
      </div>
      <div className="mx-auto max-w-screen-xl my-4 bg-green-500/[0.2] p-2">
        <ControlPanel />
      </div>
      <div className="mx-auto max-w-screen-xl">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
