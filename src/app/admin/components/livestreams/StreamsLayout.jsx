import React from "react";
import AllLivestreams from "./AllLivestreams";
import AddLivestream from "./AddLivestream";

const StreamsLayout = () => {
  return (
    <div className="">
      <h2>Livestreams</h2>
      <div className="">
        <p>Add Stream</p>
        <AddLivestream />
        {/*  */}

        {/* all streams */}
        {/* <AllLivestreams /> */}
      </div>
    </div>
  );
};

export default StreamsLayout;
