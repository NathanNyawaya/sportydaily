import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import AdComponent from "./Adsterra";

const SideBarAds = () => {
  return (
    <div className="flex bg-black  rounded min-h-[50vh]">
      <div className="m-3 text-white">
        <p className="opacity-80 text-sm">Ads</p>
        <div className="relative pt-10">
          {/* <CloseIcon className="cursor-pointer text-white absolute top-0 right-0 w-[24px] h-[24px] rounded-full border p-1" /> */}
          

          <a target="_blank" href="https://beta.publishers.adsterra.com/referral/RRkKmkFg3T">
            <img
              alt="banner"
              src="https://landings-cdn.adsterratech.com/referralBanners/gif/300x425_adsterra_reff.gif"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideBarAds;
