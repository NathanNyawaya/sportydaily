import React from "react";
import CloseIcon from "@mui/icons-material/Close";

const SideBarAds = () => {
  return (
    <div className="flex bg-black  rounded min-h-[50vh]">
      <div className="m-3 text-white">
        <p className="opacity-80 text-sm">Ads</p>
        <div className="relative pt-10">
          <CloseIcon className="cursor-pointer text-white absolute top-0 right-0 w-[24px] h-[24px] rounded-full border p-1" />
          <img
            src="https://images.unsplash.com/photo-1517747614396-d21a78b850e8?auto=format&fit=crop&q=80&w=2127&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="ads"
            className="rounded border"
          />
        </div>
      </div>
    </div>
  );
};

export default SideBarAds;
