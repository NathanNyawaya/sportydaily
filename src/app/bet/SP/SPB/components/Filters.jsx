import React, { useState } from 'react'
import { Group, Collapse, Box, ScrollArea } from "@mantine/core";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";


const Filters = ({ leagueEvents, setFilter, setOpeneddd }) => {
    const [openedd, setOpenedd] = useState(false)
    const [opened, setOpened] = useState(false)
    const [selectedLeague, setSelectedLeague] = useState("Leagues")
    function formatDateInEAT(timestamp) {
        const dateObject = new Date(timestamp);

        // Set the timezone to East Africa Time (EAT)
        const options = { timeZone: 'Africa/Nairobi' };

        const formattedDate = dateObject.toLocaleString('en-GB', options);

        // Extract day, month, and year
        const [, day, month, year] = formattedDate.match(/(\d+)\/(\d+)\/(\d+),/);

        return `${day.padStart(2, '0')}${month.padStart(2, '0')}${year}`;
    }

    function getTodaysDate() {
        const today = new Date();

        // Extract day, month, and year
        const day = today.getDate().toString().padStart(2, '0');
        const month = (today.getMonth() + 1).toString().padStart(2, '0');
        const year = today.getFullYear();

        return `${day}${month}${year}`;
    }
    return (
        <div className=" flex flex-col w-full  sticky top-0 z-30 ">
            <div className="grid grid-cols-4 gap-x-1">
                <div className="col-span-2">
                    <div class="flex w-full">
                        <Box mx="auto" className="w-full"  >
                            <Group
                                // position="start"
                                mb={5}
                                onClick={() => setOpenedd(prev => !prev)}
                                className="">

                                <div className="flex justify-between text-gray-600 text-[0.9rem] mb-1 bg-gray-100 hover:bg-gray-200 p-1 col-span-6 items-center cursor-pointer">
                                    <h4 className='text-[0.7rem] truncate text-gray-600 font-bold tracking-wide'>{selectedLeague}</h4>
                                    <div className='col-span-1'>
                                        {openedd ? <ArrowDropUpIcon fontSize='small' className='' /> : <ArrowDropDownIcon fontSize='small' />}
                                    </div>

                                </div>
                            </Group>

                            <Collapse in={openedd} className="text-gray-800 text-sm z-30">

                                <ScrollArea
                                    h={40}
                                    type="always"
                                    offsetScrollbars
                                    scrollbarSize={40}
                                    className='bg-gray-200'>
                                    <div className='flex flex-col w-full p-1 max-h-[25vh]'>
                                        {
                                            leagueEvents.map((league, i) => {
                                                return (
                                                    <p
                                                        key={i}
                                                        className='border-b border-gray-300 mb-1 text-[0.7rem] text-gray-600 font-bold tracking-wide'
                                                        onClick={() => {
                                                            setSelectedLeague(league.leagueName)
                                                            setFilter(league.leagueName)
                                                            setOpenedd(false)
                                                            setOpeneddd(true)

                                                        }}
                                                    >
                                                        {league.leagueName}
                                                    </p>
                                                )
                                            })
                                        }
                                    </div>
                                </ScrollArea>
                            </Collapse>
                        </Box>

                    </div>
                </div>
                <div className="col-span-2 flex">
                    <div class="flex w-full">

                        <Box mx="auto" className="w-full"  >
                            <Group
                                position="start"
                                mb={5}
                                onClick={() => setOpened(prev => !prev)} className="bg-">

                                <div className="flex justify-between text-gray-600 text-[0.9rem] mb-1 bg-gray-100 hover:bg-gray-200 p-1 col-span-6 items-center cursor-pointer">
                                    <h1>Today</h1>
                                    <div className='col-span-1'>
                                        {openedd ? <ArrowDropUpIcon fontSize='small' className='' /> : <ArrowDropDownIcon fontSize='small' />}
                                    </div>

                                </div>
                            </Group>

                            <Collapse in={opened} className="text-gray-800 text-sm z-30">
                                <div className='flex flex-col p-1 bg-gray-100 '>

                                    <p selected>Today</p>
                                    <p value="CA">Next 24hrs</p>
                                    <p value="CA">Next 48hrs</p>
                                    <p value="CA">This Week</p>
                                </div>
                            </Collapse>
                        </Box>
                    </div>
                </div>

            </div>
            <div className="grid grid-cols-4 hidden">
                <div className="col-span-2 flex ">
                   
                </div>
                <div className="col-span-2">
                    <div class="flex w-full">
                        <select id="states"
                            class="bg-gray-200 border border-gray-400 text-gray-900 text-sm border-s-gray-100 dark:border-s-gray-700 border-s-2 focus:ring-green-500 focus:border-green-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 p-1">
                            <option selected>Today</option>
                            <option value="CA">Tomorrow</option>

                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filters