import React from "react";
// import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";

const HorizontalAds = () => {
  return (
    <Link href="#" className="bg-gray-300">
      {" "}
      <div className="h-auto w-full flex">
        <img
          src="https://cdn.betika.com/int_assets/ke/banners/scratch-to-win2000x436.png"
          alt="ads"
          className="w-full h-auto object-contain"
        />
      </div>
    </Link>
  );
};

export default HorizontalAds;
