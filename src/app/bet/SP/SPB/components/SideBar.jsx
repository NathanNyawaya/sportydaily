import React, { useState } from 'react'
import { Group, Collapse, Box } from "@mantine/core";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";




const SideBar = ({ setTogglSidebar }) => {
    const [openedd, setOpenedd] = useState(true)
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
                                <div className='flex justify-between items-center gap-x-2 bg-gray-500 p-1'>
                                    <p className='text-sm'>Premier League</p>
                                    <p className='text-sm'>(5)</p>
                                </div>
                                <div className='flex justify-between items-center gap-x-2 bg-gray-500 p-1'>
                                    <p className='text-sm'>UEFA Euro</p>
                                    <p className='text-sm'>(12)</p>
                                </div>
                            </div>
                        </div>
                    </Collapse>
                </Box>
            </div>
        </div>
    )
}

export default SideBar