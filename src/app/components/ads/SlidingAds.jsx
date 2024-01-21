import React, { useEffect, useState } from "react";
import '@mantine/carousel/styles.css';
import { Carousel } from '@mantine/carousel'

const SlidingAds = ({ startstate }) => {
    const [contentIndex, setContentIndex] = useState(0);
    const contents = [
        {
            text: 'Bet365',
            gradient: 'from-green-900 to-black',
            p_styles: "font-bold text-white text-xl",
            imagePostition: 0,
            imageUrl: "/player1.png"
        },
        {
            text: '⚽️ ThePitchBasket™',
            gradient: 'from-[#FCD107] to-black',
            p_styles: "font-bold text-white text-xl md:text-3xl text-center",
            imagePostition: 0,
            imageUrl: "/player2.png"
        },
        {
            text: 'Follow us on Twitter ThePitchBasket',
            gradient: 'from-black to-blue-900',
            p_styles: "font-bold text-white text-xl",
            imagePostition: 1,
            imageUrl: "/player1.png"
        },
        {
            text: 'Some Free Bets ??',
            gradient: 'from-blue-900 to-black',
            p_styles: "font-bold text-white text-xl",
            imagePostition: 0,
            imageUrl: "/player2.png"
        },

        {
            text: 'Win Big With Our Free Bets.',
            gradient: 'from-black to-yellow-900',
            p_styles: "font-bold text-white text-xl",
            imagePostition: 1,
            imageUrl: "/player1.png"
            // <a href="https://www.flaticon.com/free-icons/bet" title="Bet icons">Bet icons created by Smashicons - Flaticon</a>
        },
        {
            text: 'ThePitchBasket Free tips',
            gradient: 'from-orange-900 to-black',
            p_styles: "font-bold text-white text-xl",
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
        <div className="overflow-hidden flex">
            <div className={`flex justify-between items-center h-[200px] md:h-[250px] overflow-hidden bg-gradient-to-r animate-slideRight w-full ${contents[contentIndex].gradient} p-1 text-white shadow-lg `}>
                {
                    contents[contentIndex].imagePostition === 1 && contents[contentIndex].imageUrl != "" &&
                    <div className="flex items-center pt- m-1 h-full">
                        <img src={contents[contentIndex].imageUrl} alt="thepicthbasket" className="w-[150px]" />
                    </div>
                }
                <p className={`${contents[contentIndex].p_styles} text-center tracking-wide  w-full`}>

                    {contents[contentIndex].text}
                </p>
                {
                    contents[contentIndex].imagePostition === 0 && contents[contentIndex].imageUrl != "" &&
                    <div className="flex items-center pt- m-1 h-full">
                        <img src={contents[contentIndex].imageUrl} alt="thepicthbasket" className="w-[150px]" />
                    </div>
                }

            </div>
        </div>
    );
};

export default SlidingAds;
