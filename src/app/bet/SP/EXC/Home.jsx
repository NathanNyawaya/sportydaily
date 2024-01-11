"use client";
import React, { useState } from "react";

import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import BottomNavBar from "../../components/navbar/Dropdown";


const ExchangeBookHome = () => {
  return (
    <main className="relative">
      <div className="flex min-h-screen flex-col text-black mx-auto max-w-screen-xl">
        <div className="z-100 sticky top-0 z-50">
          {/* navigations */}
          <Navbar />
          <div className="bg-black">
            <div className="mx-auto max-w-screen-xl">
              <BottomNavBar />
            </div>
          </div>
        </div>
        {/* main content */}
        <div className="grid grid-cols-12 gap-x-2">

          <p>Exchange is under maintainance</p>

        </div>

        <Footer />
      </div>
    </main>
  );
};

export default ExchangeBookHome;
