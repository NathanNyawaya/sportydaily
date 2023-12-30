"use client"
import React from "react";
import Navbar from "@/app/components/navbars/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import EditBetTips from "./EditBetTips";

const Layout = () => {
    return (
        <div className="">
            <Navbar />
            <div className="mx-auto max-w-screen-xl my-10">
                <div className="grid grid-cols-10 gap-x-2">
                    <div className="col-span-10 flex flex-col px-2 gap-3">
                        <Link
                            href="/admin"
                        >
                            {"<< "}Back
                        </Link>
                        <p className="text-xl font-bold my-5">Edit Offer</p>
                    </div>
                    {/* admin sidebar */}

                    {/* main content */}
                    <div className="col-span-10 bg-white w-full">
                        <EditBetTips />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
