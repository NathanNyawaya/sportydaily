import React, { useState } from 'react'
import { Group, Collapse, Box } from "@mantine/core";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";



const FixtureCollapse = ({ event_, opened, kickoff_time_obj }) => {
  const [openedd, setOpenedd] = useState(opened)

  return (
    <Box mx="auto" className="w-full"  >
      <Group position="start" mb={5} onClick={() => setOpenedd(prev => !prev)} className="">

        <div className="grid grid-cols-12 text-white text-[0.9rem] mx-2 mb-1 bg-gray-800 hover:bg-yellow-400/[0.1] p-3 col-span-6 items-center rounded">
          <div className="md:col-span-6 col-span-6 flex flex-col gap-y-2">
            <div className="flex gap-3">
              <p className="text-[0.8rem] text-white">
                {event_.home_team.name}
              </p>
            </div>
            <div className="flex gap-3">

              <p className="text-[0.8rem] text-white">
                {event_.away_team.name}
              </p>
            </div>
          </div>
          <div className="col-span-5 max_sm:col-span-5 md:col-span-3 flex gap-2 items-center max_sm:justify-between" >
            <div className="flex flex-col">
              <p className="text-[0.8rem] text-gray-200">Kickoff</p>
              <p className="text-[0.7rem] text-gray-300 text-gray-200">{kickoff_time_obj.date_}{" "}{kickoff_time_obj.time_}{" "}{kickoff_time_obj.timezone}
              </p>

            </div>
            <div className="">

            </div>
          </div>
          <div className='col-span-1'>
            {openedd ? <ArrowDropUpIcon fontSize='small' className='' /> : <ArrowDropDownIcon fontSize='small' />}</div>

        </div>
      </Group>

      <Collapse in={openedd} className="text-white">
        <div className="flex flex-col text-white text-[0.9rem] mx-2 mb-1 bg-gray-800/[0.2] hover:bg-yellow-400/[0.1] p-3 col-span-6 items-center rounded">
          <div className='flex  gap-4 items-center w-full'>
            <p className='text-[0.7rem] text-gray-300'>Venue</p>
            <p className="text-[0.7rem] text-gray-300">{event_.venue && event_.venue.name || "--"}</p>
          </div>
          <div className='flex gap-x-4 items-center w-full'>
            <p className='text-[0.7rem] text-gray-300'>Round</p>
            <p className='text-[0.7rem] text-gray-300'>{ event_.round.id}</p>
          </div>
          <div className='flex gap-4 items-center w-full'>
              <div className='flex items-center'>
                <p className='text-[0.7rem] text-gray-300'>Goals</p>
              </div>
            <div className='grid grid-cols-2 w-full '>
              <div className='flex flex-col  bg-green-500/[0.2] items-center border-r  border-gray-400/[0.4]'>
                <p className='text-[0.7rem] text-gray-300'>Home</p>
                <p className='text-[0.7rem] text-gray-300'> {event_.home_goals}</p>
              </div>
              <div className='flex flex-col bg-yellow-500/[0.2] items-center'>
                <p className='text-[0.7rem] text-gray-300'>Away</p>
                <p className='text-[0.7rem] text-gray-300'>{event_.home_goals}</p>
              </div>
            </div>
          </div>

        </div>
      </Collapse>
    </Box>
  )
}

export default FixtureCollapse
