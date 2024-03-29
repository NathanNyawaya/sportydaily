import React, { useEffect, useState } from 'react'
import { Group, Collapse, Box, TextInput, Button } from "@mantine/core";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LoadingStatus from '@/app/status/Loading';
import axios from 'axios';


const freeBets = [
    {
        betOfferName: "ThePitchBasket Free Bets",
        events: [
            {
                club_home: "West Ham",
                club_away: "Man United",
                selection: "Home",
                odds: 2.60,
                status: "--",
                outcome: "--",
                kickoff_date: "23/12",
                kickoff_time: "15:30",
            },
        ]
    }
]

const TipsCollapse = ({ opened }) => {
    const [openedd, setOpenedd] = useState(opened)
    const [userChecked, setUserChecked] = useState(false)
    const [inputCode, setInputCode] = useState('');
    const [isCodeCorrect, setIsCodeCorrect] = useState(true);
    const [emptyTips, setEmptyTips] = useState("");
    const [tipsOffers, setTipsOffers] = useState([])
    const [totalOdds, setTotalOdds] = useState()


    useEffect(() => {
        fetcher()
        const pushForward = localStorage.getItem("ps")
        if (pushForward && pushForward) {
            setUserChecked(true)
        }

    }, [])

    useEffect(() => {
        const totalOdds_ = getTotals(tipsOffers);
        // console.log(totalOdds_)
        setTotalOdds(totalOdds_)
    }, [tipsOffers])



    const handleCodeSubmit = (correct_passcode) => {
        if (inputCode === correct_passcode) {
            setIsCodeCorrect(true);
            setUserChecked(true)
            setOpenedd(true);
            localStorage.setItem("ps", true)
        } else {
            setUserChecked(false)
            setIsCodeCorrect(false);
            setTimeout(() => {
                setIsCodeCorrect(true);
            }, 4000)
        }
    };

    const fetcher = async () => {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER}/api/betting/tips/all_tips`)
            if (res) {
                if (res.data === "Empty tips") {
                    setEmptyTips("No tips available at the moment")
                } else {
                    setTipsOffers(res.data)
                    // console.log(res.data)
                }
            }
        } catch (error) {
            console.error(error)
        }
    }

    const getTotals = (event_) => {
        if (event_) {
            // console.log(event_)
            let totalOdd = 1;

            event_.forEach(offer__ => {
                offer__.events.forEach(element => {
                    totalOdd *= (element.odds);
                });
            })
            return totalOdd.toFixed(2);
        } else {
            alert("Error: #E1CRT");
        }
    }



    return (
        <>
            {tipsOffers && tipsOffers.length > 0 ? tipsOffers.map((offer_, index) => {

                return (
                    <Box mx="auto" className="w-full z-0 mb-16 md:mb-20" key={index}>
                        <Group position="start" mb={5} onClick={() => setOpenedd(prev => !prev)} className="">

                            <div className={`z-0 relative  flex justify-between text-white
                            bg-gradient-to-r ${index === 1 ? "to-yellow-200/[0.3] shadow-yellow-500/[0.3]" : "to-green-200/[0.3] shadow-gray-500/[0.5]"} from-black   min-h-[200px] mx-1  cursor-pointer h-full shadow-lg `}>
                                <div className='m-3'>
                                    <div className="flex my-6 gap-x-4 items-center">
                                        <p className='shadow-lg bg-orange-700/[0.5] text-gray-50 tracking-widest py-1 px-2 uppercase font-bold text-sm'>Bet</p>
                                        <div>
                                            <p className='border-l-[2px] border-gray-100/[1] shadow text-gray-100/[0.9] tracking-widest px-2 uppercase font-bold text-sm'>
                                                Soccer
                                            </p>
                                        </div>
                                    </div>
                                    {/* tip name */}
                                    <div className="flex my-10">
                                        <p className='text-3xl font-bold text-yellow-300 tracking-widest z-50 uppercase'>
                                            {offer_.betOfferName}
                                        </p>
                                    </div>
                                    <div className="flex my-4">
                                        <p className='text-[0.9rem] tracking-wide uppercase'>Price: £{offer_.price}</p>
                                    </div>

                                    <div className='flex my-6 flex-col'>
                                        <p className='text-[0.6rem] tracking-wide uppercase'>
                                            New customers only. Place your first bet on <a target='blank_' href='https://www.bet365.com/#/ME/X2200' className='text-gray-100 rounded p-1 underline'>Bet365</a>; T&Cs apply.
                                        </p>

                                        <p className='text-[0.6rem] tracking-wide my-2'>
                                            ThePitchBasket T&Cs apply.
                                        </p>
                                    </div>

                                    <div className='absolute bottom-0 right-4 left-0 p-2 flex justify-end items-center w-full z-0'>
                                        <h1 className='tracking-widest font-bold text-gray-800 text-[0.6rem] shadow-lg shadow-gray-900'>
                                            TPB
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
                                    offer_.events.length > 0 ? offer_.events.map((event_, index) => (
                                        <div key={index} className='flex flex-col w-full my-1'>
                                            <div className="grid grid-cols-6 gap-1 items-center text-white bg-gray-900/[0.8] w-full rounded py-3 px-1 ">
                                                {/* games */}
                                                <div className="col-span-2">
                                                    <div className='flex flex-col border-r border-gray-700 '>
                                                        <p className='text-[0.8rem]'>{event_.club_home}</p>
                                                        <p className='text-[0.8rem]'>vs</p>
                                                        <p className='text-[0.8rem]'>{event_.club_away}</p>
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
                                                    <p className='text-[0.6rem] w-full text-center'>{event_.kickoff_date}</p>
                                                    <p className='text-[0.6rem] w-full text-center'>{event_.kickoff_time}</p>
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
                                            <label htmlFor="pass_code" className="text-[0.8rem]"> Pass Code</label>

                                            <input
                                                id='pass_code'
                                                type='text'
                                                placeholder="Enter code"
                                                value={inputCode}
                                                onChange={(event) => setInputCode(event.target.value)}
                                                className="mt-1 rounded text-black "
                                            />
                                            <div className='flex'>
                                                <button type='button' onClick={() => handleCodeSubmit(offer_.passcode)} className='bg-green-600 py-1 px-3  my-3 py-1 rounded'>Pass</button>
                                            </div>
                                            {!isCodeCorrect && <p className="text-red-500 text-[0.7rem]">Incorrect code. Please try again.</p>}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </Collapse>
                    </Box>
                )
            }) : (
                <>

                    {
                        emptyTips ? <p className=''>{emptyTips}</p> : <LoadingStatus />
                    }

                </>
            )}
        </>
    )
}

export default TipsCollapse
