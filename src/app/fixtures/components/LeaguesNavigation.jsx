import React, { useEffect, useState } from 'react'

const LeaguesNavigation = ({ setActiveLeague, activeLeague }) => {
    const [leagues, setLeagues] = useState([])

    const fetcher = async () => {
        const url = 'https://football536.p.rapidapi.com/leagues';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_FREE_KEY,
                'X-RapidAPI-Host': 'football536.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setLeagues(result)
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetcher()

    }, [])

    const shortTitle = (league_title) => {
        switch (league_title) {
            case "Seria A":
                return league_title;
            case "Premier League":
                return "EPL";
            case "UEFA Europa League":
                return "Europa"
            case "UEFA Champions League":
                return "UEFA"
            case "UEFA EURO":
                return "EURO"
            default:
                return league_title
        }
    }
    return (
        <div className="md:sticky top-40 bg-gray-900 flex w-full md:flex-col gap-y-4 md:min-h-[30vh] p-1 rounded ">

            {
                leagues && leagues.length > 0 && leagues.map((league, index) => (
                    <div
                        className={`league.name
                        flex flex-col w-full hover:bg-yellow-500/[0.2] cursor-pointer
                        ${league.name == activeLeague && `bg-yellow-700/[0.5] rounded`}
                        `}
                        key={index}
                        onClick={() => setActiveLeague(league.name)}
                    >
                        <p
                            className="p-1 cursor-pointer font-bold text-[0.8rem] text-gray-100"
                        >
                            {shortTitle(league.name)}
                        </p>
                    </div>
                ))

            }


        </div>
    )
}

export default LeaguesNavigation