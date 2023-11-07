import React, { useEffect, useState } from "react";

const SideBarAds = () => {
  const initialAdsList = [
    {
      host_name: "Jumia Kenya",
      category: "Alcohol",
      target_url:
        "https://kol.jumia.com/api/click/link/4201b90f-85c4-4382-ab66-569eeb67300b/119ddf3f-329b-44ec-9dde-95787e3a1063?s1=thepitchbasket_jumia&s2=thepitchbasket_jumia",
      img_url:
        "https://kol.jumia.com/banners/B325E8i8oPaYI8PKMeolv5CwsXyEtXRnZz8SYLd7.jpg",
      alt: "BLACK FRIDAY DEFACTO DEALS",
    },
    {
      host_name: "Jumia Kenya",
      category: "Alcohol",
      target_url:
        "https://kol.jumia.com/api/click/link/4201b90f-85c4-4382-ab66-569eeb67300b/6997e45d-9bcd-405c-b56e-5f601ee818bb?s1=thepitchbasket_jumia_phones",
      img_url:
        "https://kol.jumia.com/banners/wCb4ju5pK8qKy3itfi5LrUFtxz4UtgRahZ425CZO.jpg",
      alt: "BLACK FRIDAY PHONE DEALS",
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
        <p className="opacity-80 text-sm">Ads</p>
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