"use client";
import React, { useEffect } from "react";

const AdComponent = () => {
  useEffect(() => {
    const loadScript = () => {
      const script = document.createElement("script");
      script.src =
        "//www.highcpmcreativeformat.com/e00432cd040f5518499410ed4aa7da79/invoke.js";
      script.type = "text/javascript";
      script.async = true;
      document.body.appendChild(script);
    };

    document.addEventListener("DOMContentLoaded", loadScript);

    return () => {
      document.removeEventListener("DOMContentLoaded", loadScript);
    };
  }, []);

  //   useEffect(() => {
  //     // This script will be executed when the component is mounted
  //     const atOptions = {
  //       key: "e00432cd040f5518499410ed4aa7da79",
  //       format: "iframe",
  //       height: 600,
  //       width: 160,
  //       params: {},
  //     };
  //     document.write(
  //       "<scr" +
  //         'ipt type="text/javascript" src="//www.highcpmcreativeformat.com/e00432cd040f5518499410ed4aa7da79/invoke.js"></scr' +
  //         "ipt>"
  //     );
  //   }, []);

  return (
    <div className="ad-container">
      {/* You can style this container if needed */}
      {/* The ad content will be inserted by the script */}
    </div>
  );
};

export default AdComponent;
