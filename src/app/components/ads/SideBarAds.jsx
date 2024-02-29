import React, { useEffect, useState } from "react";

const SideBarAds = () => {
  const initialAdsList = [
    
    {
      host_name: "#",
      category: "#",
      target_url:
        "#",
      img_url:
        "https://photo-cdn2.icons8.com/x3wOEylhNz5btIOh8a2nvXufHnrAtW0iSXK9LvEbFDg/rs:fit:288:432/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvNjM3L2M1Zjcz/NGNmLWVlNjEtNDJl/Mi1iOThhLTJmNzgw/ZGZiZjAxNy5qcGc.webp",
      alt: "REGISTER TPB",
    },
    {
      host_name: "#",
      category: "#",
      target_url:
        "#",
      img_url:
        "https://photo-cdn2.icons8.com/pwoP-PSGHKJUKUmN5mlf8KvTws3Y3DDc3-3qp_wW_2U/rs:fit:288:432/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvMTcwLzc1NTgw/YjcyLWZkNzQtNGM0/NS1hMGVlLTIxMjVk/YjM0ZDZkOC5qcGc.webp",
      alt: "REGISTER TPB",
    },
    {
      host_name: "#",
      category: "#",
      target_url:
        "#",
      img_url:
        "https://photo-cdn2.icons8.com/1WnSFOSuZ5IVN0CxfVhzP9GbTInCeyT11-Jq4hgBJ0w/rs:fit:288:432/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvMjcwLzg5YTNl/NmUxLTJhNjAtNDNi/Mi05ZmYxLTkyNDM2/OTBjOTYzNi5qcGc.webp",
      alt: "REGISTER TPB",
    },
    
    
 
    
  ];
  const [adsList, setAdsList] = useState(initialAdsList);
  const [currentAdIndex, setCurrentAdIndex] = useState(0);

  // Function to switch to the next ad
  const showNextAd = () => {
    setCurrentAdIndex((currentAdIndex + 1) % adsList.length);
  };

  useEffect(() => {
    // Rotate to the next ad every 5 seconds (adjust as needed)
    const rotationInterval = setInterval(showNextAd, 5000);

    return () => {
      // Clean up the interval when the component unmounts
      clearInterval(rotationInterval);
    };
  }, [currentAdIndex]);

  return (
    <div className="flex rounded min-h-[10vh]">
      <div className="m-3 text-white">
        {/* <p className="opacity-80 text-[0.6rem] my-1 uppercase">Offers</p> */}
        <div className="relative">
          <div className="h-auto w-full flex flex-col">
            <div className="flex gap-2 items-center">
              <div className="">
                <a target="_blank" href={adsList[currentAdIndex].target_url}>
                  <img
                    className=""
                    src={adsList[currentAdIndex].img_url}
                    alt={adsList[currentAdIndex].alt}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBarAds;