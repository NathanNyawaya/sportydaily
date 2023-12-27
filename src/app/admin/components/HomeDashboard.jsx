"use client";
import React from "react";

export default function HomeDashboard() {
  return (
    <div className="">
      <div className="min-h-[70vh] flex flex-col">
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-3 p-1 border flex  items-center">
            <p className="text-sm">Sales: 29</p>
          </div>
          <div className="col-span-3 p-1 border flex  items-center">
            <p className="text-sm">Blogs: 29</p>
          </div>
          <div className="col-span-3 p-1 border flex  items-center">
            <p className="text-sm">Products: 29</p>
          </div>
          <div className="col-span-3 p-1 border flex  items-center">
            <p className="text-sm">Users: 29</p>
          </div>
        </div>
      </div>
    </div>
  );
}

























