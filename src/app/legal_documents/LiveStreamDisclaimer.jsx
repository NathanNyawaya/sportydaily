import React from "react";

const LiveStreamDisclaimer = () => {
  return (
    <div className="bg-yellow-500/[0.1] p-2" >
      <h2 className="text-sm font-bold text-red-500">Disclaimer!</h2>
      <p className="text-[0.7rem] text-gray-300">
        None of the videos is hosted by this site. Streams hosted on external
        sites like Youtube etc are provided with links here. This site is not
        responsible for the legality of the content. For legal issues, please
        contact appropriate media file owners/hosters.
      </p>
    </div>
  );
};

export default LiveStreamDisclaimer;
