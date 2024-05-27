import React, { useEffect, useState } from 'react';

const SlidingText = () => {
    const [contentIndex, setContentIndex] = useState(0);
    const contents = [
        { id: 1, message: "UEFA CHAMPIONSHIP FINALS" },
        { id: 2, message: "Saturday 1 June 2024 22:00 EAT" },
        { id: 3, message: "DORTMUND VS REAL MADRID" },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setContentIndex((prevIndex) => (prevIndex + 1) % contents.length);
        }, 5000); // Change message every 5 seconds

        return () => clearInterval(interval);
    }, [contents.length]);

    return (
        <div className="relative my-10 rounded-lg sliding-text-container">
            <img src="/sliding_screen_bg.png" alt="" className="md:h-[10vh] h-[5vh] opacity-60 w-full object-cover" />
            <div className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden items-center flex to-orange-500/[0.1] h-[5vh] md:h-[10vh]">
                <div className="sliding-text text-gray-200 text-[1rem]  md:text-[3rem]">
                    {contents[contentIndex].message}
                </div>
            </div>
        </div>
    );
};

export default SlidingText;
