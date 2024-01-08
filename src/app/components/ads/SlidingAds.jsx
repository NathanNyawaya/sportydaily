import React, { useEffect, useState } from "react";

const SlidingAds = () => {
    const [contentIndex, setContentIndex] = useState(0);
    const contents = [
        {
            text: '🏀🎾⚽️ ThePitchBasket™',
            gradient: 'from-[#FCD107] to-black',
            p_styles: "font-bold text-white text-xl md:text-3xl text-center"
        },
        {
            text: 'Follow us on Twitter ThePitchBasket',
            gradient: 'from-black to-blue-900',
            p_styles: "font-bold text-white text-xl"
        },
        {
            text: 'Some Free Bets ??',
            gradient: 'from-blue-900 to-black',
            p_styles: "font-bold text-white text-xl"
        },

        {
            text: 'Win Big With Our Free Bets.',
            gradient: 'to-yellow-900 from-black',
            p_styles: "font-bold text-white text-xl"
        },
        {
            text: 'ThePitchBasket Free tips',
            gradient: 'from-orange-900 to-black',
            p_styles: "font-bold text-white text-xl"
        },

    ];

    useEffect(() => {
        const handleAnimationIteration = () => {
            setContentIndex((prevIndex) => (prevIndex + 1) % contents.length);
        };

        const animatedElements = document.querySelectorAll('.animate-slideRight');

        animatedElements.forEach((element) => {
            element.addEventListener('animationiteration', handleAnimationIteration);
        });

        return () => {
            animatedElements.forEach((element) => {
                element.removeEventListener('animationiteration', handleAnimationIteration);
            });
        };
    }, []);

    return (
        <div className="overflow-hidden flex">
            <div className={`flex justify-center  items-center min-h-[5vh] overflow-hidden bg-gradient-to-r animate-slideRight w-full ${contents[contentIndex].gradient} p-1 text-white shadow-lg `}>
                <p className={`${contents[contentIndex].p_styles} text-center tracking-wide  w-full`}>
                    {contents[contentIndex].text}
                </p>
            </div>
        </div>
    );
};

export default SlidingAds;
