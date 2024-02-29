import React from "react";
import Navbar from "@/app/components/navbars/Navbar";
import Footer from "@/app/components/Footer";
import Register from "./Register";

export const Layout = () => {
  return (
    <div className="mx-auto max-w-screen-xl">
      <Navbar />
      <div className="my-4">
        {/* <Register /> */}
        <Register />
      </div>
      <Footer />
    </div>
  );
};
