import React from "react";
import SideBar from "./sidebar/SideBar";
import MainSectionDisplay from "./main/MainSectionDisplay";

const Home = () => {
  return (
    <div className="grid grid-cols-10 gap-x-2">
      <div className="col-span-10">
        <p className="text-xl font-bold my-5">Admin</p>
      </div>
      {/* admin sidebar */}
      <div className="col-span-2 sticky top-0 min-h-[40vh] bg-white">
        <SideBar/>
      </div>
      {/* main content */}
      <div className="col-span-8 bg-white w-full">
        <MainSectionDisplay/>
      </div>
    </div>
  );
};

export default Home;
