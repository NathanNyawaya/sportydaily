import React from "react";

const HorizontalAds3 = () => {
  const ads_list = [
    {
      host_name: "Jumia Kenya",
      category: "Alcohol",
      target_url:
        "https://kol.jumia.com/api/click/link/4201b90f-85c4-4382-ab66-569eeb67300b/96107955-60c1-4168-93df-fdcae403c398?s1=thepitchbasket_jumia",
      img_url:
        "https://www.thepunterspage.com/app/uploads/2019/01/Betfair-Bundle-1920x1080-1.jpg",
      alt: "PRK",
    },
    // {
    //   host_name: "Jumia Kenya",
    //   category: "Alcohol",
    //   target_url:
    //     "https://kol.jumia.com/api/click/link/4201b90f-85c4-4382-ab66-569eeb67300b/96107955-60c1-4168-93df-fdcae403c398?s1=thepitchbasket_jumia",
    //   img_url:
    //     "https://odds2win.bet/odds2win/images/promo/1xbet%20Kenya%20promo%20code.jpg",
    //   alt: "PRK",
    // },
    
   
  ];
  return (
    <div className=" mx-auto h-auto w-full flex flex-col ">
      <div className="w-full text-white my-2">
      <p className="opacity-80 text-[0.6rem] my-1 uppercase">Offers</p>
      </div>
      <div className="flex gap-2 items-center">
        {ads_list.map((ads_obj, index) => (
          <div className="relative" key={index}>
            {/* <h2 className="text-xl font-bold">ThePitchBasket</h2> */}
            <a target="_blank" href={ads_obj.target_url}>
              <img
                className=" object-contain md:max-h-[20vh]"
                src={ads_obj.img_url}
                alt={ads_obj.alt}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalAds3;
