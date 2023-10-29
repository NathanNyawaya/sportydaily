import React from "react";
import Navbar from "@/app/components/navbars/Navbar";
import Footer from "@/app/components/Footer";
import Login from "./Login";

const Layout = () => {
  return (
    <div className="">
      <Navbar />
      <div className="mx-auto max-w-screen-xl my-10">
        <Login/>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
