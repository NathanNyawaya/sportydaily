import SlidingAds from '@/app/components/ads/SlidingAds'
import React, { useEffect, useState } from 'react'

import axios from 'axios'
import MainContent from './MainContent'
import SideBarNavigation from './SideBarNavigation'
import Footer from '@/app/bet/components/footer/Footer'

const CenterMain = () => {
    const [toggleSidebar, setTogglSidebar] = useState(false)
    const [matches, setMatches] = useState([])



    const fetcherMarkets = async () => {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER}/api/betgreen/sp/markets`)

            if (res) {
                console.log(res.data)
                const premierLeagueEvents = await res.data.filter(item => {
                    if (item.league_name === "England - Premier League") {
                        // console.log(item)
                        return item
                    }
                })
                if (premierLeagueEvents.length > 0) {
                    // console.log(premierLeagueEvents.length)
                    setMatches(premierLeagueEvents)
                }

            }

        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        // fetcher()
        fetcherMarkets()
    }, [])

    function formatDateTime(dateTimeString, timeZone) {
        const optionsDate = {
            day: 'numeric',
            month: 'numeric',
        };

        const optionsTime = {
            hour: 'numeric',
            minute: 'numeric',
            hour12: false,
            timeZone: timeZone,
        };

        const date = new Date(dateTimeString);

        // Hardcode adding 3 hours
        date.setHours(date.getHours() + 3);

        const formattedDate = date.toLocaleString('en-GB', optionsDate);
        const formattedTime = date.toLocaleString('en-GB', optionsTime);

        return { date: formattedDate, time: formattedTime };
    }
    const timeZone = 'Africa/Nairobi'; // EAT timezone

    // const formattedDateTime = formatDateTime(dateTimeString, timeZone);

    return (
        <div className="mx-auto max-w-screen-xl mb-10">
            

            <div className="min-h-[90vh] grid grid-cols-12 w-full mx-auto">
                <div className="col-span-12 md:col-span-9 grid grid-cols-12">
                    <div className="flex flex-col col-span-3">
                        <SideBarNavigation />
                    </div>
                    <div className=" col-span-12 md:col-span-9 flex flex-col">
                        <MainContent />
                    </div>
                    <div className="col-span-12 min_md:my-10 mt-10 w-full">
                        <Footer />
                    </div>
                </div>
                
                {/* betslip */}
                <div className='col-span-3 bg-gray-700'></div>
            </div>

        </div>

    )
}

export default CenterMain