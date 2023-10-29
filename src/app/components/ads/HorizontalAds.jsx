import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";

const HorizontalAds = () => {
  return (
    <Link href="https://betika.com">
      {" "}
      <div className="h-[30vh] flex rounded">
        <img
          src="https://cdn.betika.com/int_assets/ke/banners/scratch-to-win2000x436.png"
          alt="ads"
          className="w-full h-auto object-contain rounded"
        />
      </div>
    </Link>
  );
};

export default HorizontalAds;
