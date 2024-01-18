import Footer from '@/app/bet/components/footer/Footer'
import React, { useEffect, useState } from 'react'
import Filters from './Filters'
import axios from 'axios'

const MainContent = () => {
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

    return (

        <div className="flex flex-col">

            <Filters />
            {
                toggleSidebar &&
                <div className="absolute bg-gray-700 min-md:hidden bg-gray-800 m-1">
                    <SideBar setTogglSidebar={setTogglSidebar} />
                </div>
            }
            {
                !toggleSidebar &&
                <div className="h-full  w-full mx-auto">
                    <div className="grid grid-cols-10  mx-1 items-center p-2 rounded">
                        <div className="col-span-1">
                            <div className="flex flex-col border-r border-gray-900 pr-2">

                            </div>
                        </div>
                        <div className="col-span-5 flex flex-col border-l border-gray-900 px-1">

                        </div>
                        <div className="col-span-4 h-full">
                            <div className="grid grid-cols-3 h-full gap-1 rounded">
                                <div className="col-span-1  flex justify-center items-center">
                                    <p className="text-[0.8rem] font-bold">1</p>
                                </div>
                                <div className="col-span-1   flex justify-center items-center">
                                    <p className="text-[0.8rem] font-bold">x</p>
                                </div>
                                <div className="col-span-1   flex justify-center items-center">
                                    <p className="text-[0.8rem] font-bold">2</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        matches.length > 0 ? matches.map((match, index) => {
                            if (match.periods.num_0.money_line) {
                                // console.log(match)
                                const { date, time } = formatDateTime(match.starts, timeZone)

                                return (
                                    <div key={index} className="grid grid-cols-10  mx-1 items-center p-2 border-gray-700 border-b">
                                        <div className="col-span-1">
                                            <div className="flex flex-col border-r border-gray-500 pr-2">
                                                <p className="text-[0.6rem]">{date}</p>
                                                <p className="text-[0.6rem]">{time}</p>
                                            </div>
                                        </div>
                                        <div className="col-span-5 flex flex-col  px-2">
                                            <p className="text-[0.7rem] font-bold">{match.home}</p>
                                            <p className="text-[0.7rem] font-bold">{match.away}</p>
                                        </div>
                                        <div className="col-span-4 h-full">
                                            <div className="grid grid-cols-3 h-full gap-1 rounded">
                                                <div className="col-span-1 bg-gray-500/[0.2] hover:bg-gray-500 flex justify-center items-center">
                                                    <p className="text-gray-100 text-[0.7rem] font-bold">{match.periods.num_0.money_line && (match.periods.num_0.money_line.home).toFixed(3)}</p>
                                                </div>
                                                <div className="col-span-1 bg-gray-500/[0.2] hover:bg-gray-500 flex justify-center items-center">
                                                    <p className="text-gray-100 text-[0.7rem] font-bold">{match.periods.num_0.money_line && (match.periods.num_0.money_line.draw).toFixed(3)}</p>
                                                </div>
                                                <div className="col-span-1 bg-gray-500/[0.2] hover:bg-gray-500 flex justify-center items-center">
                                                    <p className="text-gray-100 text-[0.7rem] font-bold">{match.periods.num_0.money_line && (match.periods.num_0.money_line.away).toFixed(3)}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }

                        }) : ""
                    }

                </div>
            }

           

        </div>

    )
}

export default MainContent