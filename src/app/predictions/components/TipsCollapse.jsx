import React, { useEffect, useState } from 'react'
import { Group, Collapse, Box, TextInput, Button } from "@mantine/core";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LoadingStatus from '@/app/status/Loading';


const TipsCollapse = ({ opened }) => {
    const [openedd, setOpenedd] = useState(opened)
    const [userChecked, setUserChecked] = useState(false)
    const [inputCode, setInputCode] = useState('');
    const [isCodeCorrect, setIsCodeCorrect] = useState(true);

    const correctCode = '#231223W'; // Replace with your correct code



    const handleCodeSubmit = () => {
        if (inputCode === correctCode) {
            setIsCodeCorrect(true);
            setUserChecked(true)
            setOpenedd(true);
        } else {
            setUserChecked(false)
            setIsCodeCorrect(false);
            setTimeout(() => {
                setIsCodeCorrect(true);
            }, 4000)
        }
    };

    const freeBets = {
        offerName: "ThePitchBasket Free Bets",
        events_bets: [

            {
                home_team: "West Ham",
                away_team: "Man United",
                selection: "Home",
                odds: 2.60,
                status: "--",
                outcome: "--",
                start_time: { date_: "23/12", time_: "15:30" }
            },
        ]
    }

    const getTotals = (event_) => {
        let totalOdds = 1;

        event_.events_bets.forEach(element => {
            totalOdds *= element.odds;
        });

        return totalOdds.toFixed(2);
    }

    const totalOdds = getTotals(freeBets);

    return (
        <>
            {freeBets ? (
                <Box mx="auto" className="w-full"  >
                    <Group position="start" mb={5} onClick={() => setOpenedd(prev => !prev)} className="">

                        <div className="relative flex justify-between text-white bg-gradient-to-l from-orange-700 to-orange-900 min-h-[200px] mx-1  cursor-pointer h-full">
                            <div className='m-3'>
                                <div className="flex my-6 gap-x-4 items-center">
                                    <p className='shadow-lg bg-orange-700/[0.5] text-gray-50 tracking-widest py-1 px-2 uppercase font-bold text-sm line-through'>100% OFF</p>
                                    <div>
                                        <p className='border-l-[2px] border-gray-100/[1] shadow text-gray-100/[0.9] tracking-widest px-2 uppercase font-bold text-sm'>
                                            Football
                                        </p>
                                    </div>
                                </div>
                                {/* tip name */}
                                <div className="flex my-10">
                                    <p className='text-3xl font-bold text-yellow-300 tracking-widest z-50 uppercase'>
                                        {freeBets.offerName}
                                    </p>
                                </div>

                                <div className='flex my-6 flex-col'>
                                    <p className='text-[0.6rem] tracking-wide uppercase'>
                                        New customers only. Place your first bet on any sportsbook market; T&Cs apply.
                                       
                                    </p>
                                    <p className='text-[0.6rem] tracking-wide my-2'>
                                        ThePitchBasket T&Cs apply.
                                    </p>
                                </div>

                                <div className='absolute bottom-0 right-4 left-0 p-2 flex justify-end items-center w-full z-0'>
                                    <h1 className='tracking-widest text-gray-100/[0.9] text-[0.7rem] shadow-lg'>
                                        97% Winrate
                                    </h1>
                                </div>
                            </div>

                            <div className='flex justify-end items-center z-50'>
                                {openedd ? <ArrowDropUpIcon fontSize='small' className='text-white' /> : <ArrowDropDownIcon fontSize='small' className='text-white' />}
                            </div>
                        </div>
                    </Group>
                    <Collapse in={openedd} className="text-white">
                        <div className="relative flex flex-col text-white text-[0.9rem] mx-1 my-2 bg-gray-800/[0.9] hover:bg-yellow-400/[0.1] p-2 items-center rounded">

                            {/* header */}
                            <div className="grid grid-cols-6 gap-1 p-2 items-center text-white my-1 w-full">
                                {/* games */}
                                <div className="col-span-2">
                                    <div className='flex  flex-col'>
                                        <p className='text-[0.7rem]  text-orange-500/[0.8]'>Teams</p>
                                    </div>
                                </div>
                                {/* selection */}
                                <div className="col-span-2 ">
                                    <p className='text-[0.7rem]  text-orange-500/[0.8]'>Selection</p>
                                </div>
                                {/* odds */}
                                <div className="col-span-1 ">
                                    <p className='text-[0.7rem]  text-orange-500/[0.8]'>Odds</p>
                                </div>
                                <div className="col-span-1  ">
                                    <p className='text-[0.7rem]  text-orange-500/[0.8]'>Kickoff</p>
                                </div>
                            </div>

                            {/* events */}
                            {
                                freeBets.events_bets.length > 0 ? freeBets.events_bets.map((event_, index) => (
                                    <div key={index} className='flex flex-col w-full my-1'>
                                        <div className="grid grid-cols-6 gap-1 items-center text-white bg-gray-900/[0.8] w-full rounded py-3 px-1 ">
                                            {/* games */}
                                            <div className="col-span-2">
                                                <div className='flex flex-col border-r border-gray-700 '>
                                                    <p className='text-[0.8rem]'>{event_.home_team}</p>
                                                    <p className='text-[0.8rem]'>vs</p>
                                                    <p className='text-[0.8rem]'>{event_.away_team}</p>
                                                </div>
                                            </div>
                                            {/* selection */}
                                            <div className="col-span-2 border-r border-gray-700">
                                                <p className='text-[0.8rem] text-center'>{event_.selection}</p>
                                            </div>
                                            {/* odds */}
                                            <div className="col-span-1 border-r border-gray-700">
                                                <p className='text-[0.8rem] w-full text-center'>{event_.odds}</p>
                                            </div>
                                            <div className="col-span-1">
                                                <p className='text-[0.6rem] w-full text-center'>{event_.start_time.date_}</p>
                                                <p className='text-[0.6rem] w-full text-center'>{event_.start_time.time_}</p>
                                            </div>
                                        </div>
                                        {/* status */}
                                        <div className="flex justify-end gap-x-2 items-center text-white bg-gray-900/[0.8] w-full rounded py-3 mt-1">
                                            <div className='grid grid-cols-2'>
                                                <p className='text-[0.6rem] w-full text-center'>
                                                    Outcome:
                                                </p>
                                                <p className='text-[0.6rem] w-full text-center'>{event_.outcome}</p>
                                            </div>
                                            <div className='grid grid-cols-2'>
                                                <p className='text-[0.6rem] w-full text-center'>
                                                    Status:
                                                </p>
                                                <p className='text-[0.6rem] w-full text-center'>{event_.status}</p>
                                            </div>
                                        </div>
                                    </div>
                                )) : (
                                    <p>No events</p>
                                )
                            }

                            {/* More Infor */}
                            <div className="flex justify-end gap-x-2 items-center text-white bg-gray-900/[0.8] w-full rounded py-3 mt-8">
                                <div className='grid grid-cols-2'>
                                    <p className='text-[0.6rem] w-full text-center'>
                                        Total:
                                    </p>
                                    <p className='text-[0.6rem] w-full text-center'>{totalOdds}</p>
                                </div>
                                <div className='grid grid-cols-2'>
                                    <p className='text-[0.6rem] w-full text-center'>
                                        Status:
                                    </p>
                                    <p className='text-[0.6rem] w-full text-center'>ON</p>
                                </div>
                            </div>

                            {!userChecked && (
                                <div className="absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center bg-gray-900/[1]">
                                    <div className='flex flex-col'>
                                        <lable htmlFor="pass_code" className="text-[0.8rem]"> Pass Code</lable>

                                        <input
                                            id='pass_code'
                                            type='text'
                                            placeholder="Enter code"
                                            value={inputCode}
                                            onChange={(event) => setInputCode(event.target.value)}
                                            className="mt-1 rounded text-black "
                                        />
                                        <div className='flex'>
                                            <button type='button' onClick={handleCodeSubmit} className='bg-green-600 py-1 px-3  my-3 py-1 rounded'>Pass</button>
                                        </div>
                                        {!isCodeCorrect && <p className="text-red-500 text-[0.7rem]">Incorrect code. Please try again.</p>}
                                    </div>
                                </div>
                            )}
                        </div>
                    </Collapse>



                </Box>
            ) : (
                <>

                    <LoadingStatus />

                </>
            )}
        </>
    )
}

export default TipsCollapse
