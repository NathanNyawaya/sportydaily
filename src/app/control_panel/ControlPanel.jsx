"use client"


import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Link from "next/link";
import ReactGA from "react-ga4";
import jwt_decode from "jwt-decode";
import { Helmet } from "react-helmet";

export default function ControlPanel() {
  useEffect(() => {
    // Send a custom event google-Analytics
    ReactGA.event({
      category: "dashboard_category",
      action: "dashboard_action",
      label: "dashboard_lable", // optional
      value: 101, // optional, must be a number
      nonInteraction: false, // optional, true/false
      transport: "xhr", // optional, beacon/xhr/image
    });
  }, [])




  return (
    <div className="">
      <div className="min-h-[70vh] flex flex-col">
        <div className="grid grid-cols-12 gap-2">

          <div className="col-span-3 p-1 border flex flex-col">
            <h3 className="text-[1rem]">Account Info</h3>
            <div className="fle items-center">
              <p className="text-sm">Username: Nate Mawaya</p>
              <p className="text-sm">Email: natemawaya@gmail.com</p>
            </div>
          </div>

          <div className="col-span-3 p-1 border flex flex-col">
            <h3 className="text-[1rem]">Capital</h3>
            <div className="flex items-center">
              <p className="text-sm">Balance: </p>
              <p className="text-sm">100</p>
            </div>

            <div className="flex justify-end items-center gap-x-2 mt-4">
              <p className="text-[0.8rem]  bg-yellow-500 px-2 py-1 cursor-pointer">Deposit</p>
              <p className="text-[0.8rem]  bg-green-900 px-2 py-1 cursor-pointer">Withdraw</p>
            </div>
          </div>

          <div className="col-span-3 p-1 border flex flex-col">
            <h3 className="text-[1rem]">Security</h3>
            <div className="flex items-center">
              <p className="text-sm">Change Password: </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
