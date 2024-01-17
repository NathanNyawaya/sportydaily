import React, { useEffect, useState } from 'react'
import { Group, Collapse, Box } from "@mantine/core";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import axios from 'axios';




const SideBar = ({ setTogglSidebar }) => {
    const [openedd, setOpenedd] = useState(true)

    const [sportLeagues, setSportLeagues] = useState([])

    const fetcherMarkets = async (id) => {
        try {
          const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER}/api/betgreen/sp/markets`)
    
          if (res) {
            // console.log(res.data)
            const premierLeagueEvents = await res.data.filter(item => {
              if (item.id === id) {
                console.log(item)
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


    const fetcher = async () => {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER}/api/betgreen/sp/leagues`)

            if (res) {
                // console.log(res.data)
                if (res.data.leagues.length > 0) {
                    setSportLeagues(res.data.leagues)
                }
                const premierLeague = res.data.leagues.filter(item => {
                    // fetcherMarkets(item.id)
                    if (item.name === "England - Premier League") {
                        console.log(item.name)
                        return item
                    }
                })

                console.log(premierLeague)
            }

        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        fetcher()
    }, [])
    return (
        <div className="mx-1 my-4">
            <div className='flex justify-end'>
                <p
                    className='font-bold'
                    onClick={() => setTogglSidebar(prev => !prev)}
                >
                    Close
                </p>
            </div>
            Sports
            <div className='mt-4'>
                <Box mx="auto" className="w-full relative"  >
                    <Group position="start" mb={5} onClick={() => setOpenedd(prev => !prev)} className="">
                        <div className='flex justify-between bg-gray-900 py-2 px-1'>
                            <h1>Football</h1>
                            {
                                openedd ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />
                            }
                        </div>
                    </Group>

                    <Collapse in={openedd} className="text-white mt-5">
                        <div className='ml-2 bg-gray-700 p-1'>
                            <div className='flex flex-col justify-start gap-y-1'>
                                {
                                    sportLeagues.length > 0 ?
                                        sportLeagues.map((league, i) => {
                                            return (
                                                <div
                                                    key={i}
                                                    className='flex justify-between items-center gap-x-2 bg-gray-500 p-1'
                                                >
                                                    <p className='text-sm'>{league.name}</p>
                                                    <p className='text-sm'>(5)</p>
                                                </div>
                                            )
                                        })
                                        :
                                        ""
                                }

                            </div>
                        </div>
                    </Collapse>
                </Box>
            </div>
        </div>
    )
}

export default SideBar