import React, { useEffect, useState } from "react";

const SlidingAds = ({ startstate }) => {
    const [contentIndex, setContentIndex] = useState(0);
    const contents = [
        // {
        //     text: 'Win Big With Our Free Bets.',
        //     gradient: 'from-black to-yellow-900',
        //     p_styles: "font-bold text-white text-sm",
        //     imagePostition: 1,
        //     imageUrl: "/player1.png"
           
        // },
        {
            text: 'PLACE A KSH.100 BET and Get upto KSH.200 FREE BETS',
            gradient: 'from-yellow-900 to-black',
            p_styles: "font-bold text-white text-sm min-w-[600px]",
            imagePostition: 0,
            imageUrl: "/player2.png"
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
        <div className="overflow-hidden flex bg-gradient-to-r from-green-900 to-black">
            <div className={`bg-gradient-to-l ${contents[contentIndex].gradient} flex justify-end items-center overflow-hidden  animate-slidindAds min-w-[500px]  text-white shadow-lg `}>
                <p className={`${contents[contentIndex].p_styles} text-end pr-1 pl-0 tracking-wide  w-full py-1 uppercase`}>
                    {contents[contentIndex].text}
                </p>
            </div>
        </div>
    );
};

export default SlidingAds;
