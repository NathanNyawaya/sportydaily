import React from "react";
import Navbar from "@/app/components/navbars/Navbar";
import Footer from "@/app/components/Footer";
import Register from "./Register";

export const Layout = () => {
  return (
    <div className="">
      <Navbar />
      <div className="mx-auto max-w-screen-xl my-10">
        {/* <Register /> */}
        <Register/>

      </div>
      <Footer />
    </div>
  );
};
