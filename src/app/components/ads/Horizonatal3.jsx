import React from "react";

const HorizontalAds3 = () => {
  const ads_list = [
    {
      host_name: "Jumia Kenya",
      category: "Alcohol",
      target_url:
        "https://kol.jumia.com/api/click/link/4201b90f-85c4-4382-ab66-569eeb67300b/96107955-60c1-4168-93df-fdcae403c398?s1=thepitchbasket_jumia",
      img_url:
        "https://kol.jumia.com/banners/hqeakSfCS3zi7i4hK67u1q7dHC09x060clNTJCVy.jpg",
      alt: "PRK",
    },
    {
      host_name: "Jumia Kenya",
      category: "Alcohol",
      target_url:
        "https://kol.jumia.com/api/click/link/4201b90f-85c4-4382-ab66-569eeb67300b/031bb099-6c5d-4793-a8b7-140c2bf4b556?s1=thepitchbasket_jumia",
      img_url:
        "https://kol.jumia.com/banners/YeWWItmJp4vxRO954UnIEvFqfM3UIALf4f05eeRU.jpg",
      alt: "PRK",
    },
    {
      host_name: "Jumia Kenya",
      category: "Alcohol",

      target_url:
        "https://kol.jumia.com/api/click/link/4201b90f-85c4-4382-ab66-569eeb67300b/b19c13fa-d4be-4580-bec1-ac8e7c8353a3?s1=thepitchbasket_jumia",
      img_url:
        "https://kol.jumia.com/banners/bClK6dH8FwzQbsb1JLJEE13isarF03HIFuKFLTTa.jpg",
      alt_text: "PRK",
    },
  ];
  return (
    <div className="hidden mx-auto h-auto w-full flex flex-col ">
      <div className="w-full text-white my-2">
        <p className="text-[0.6rem]">Ads</p>
      </div>
      <div className="flex gap-2 items-center">
        {ads_list.map((ads_obj, index) => (
          <div className="relative" key={index}>
            <h2 className="text-xl font-bold">ThePitchBasket</h2>
            {/* <a target="_blank" href={ads_obj.target_url}>
              <img
                className=" object-contain md:max-h-[20vh]"
                src={ads_obj.img_url}
                alt={ads_obj.alt}
              />
            </a> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalAds3;
