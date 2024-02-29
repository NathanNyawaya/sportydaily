import React, { useState } from 'react'
import { Group, Collapse, Box } from "@mantine/core";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";



const FixtureCollapse = ({ event_, opened, kickoff_time_obj }) => {
  const [openedd, setOpenedd] = useState(opened)
  if (event_.periods.num_0.money_line === null) {
    // console.log(event_)
  }


  function formatDateTimeEAT(utcDateTimeString) {
    const utcDateTime = new Date(utcDateTimeString);

    // Convert to EAT (East Africa Time)
    const eatDateTime = new Date(utcDateTime.toLocaleString('en-US', { timeZone: 'Africa/Nairobi' }));

    // Add 3 hours
    eatDateTime.setHours(eatDateTime.getHours() + 3);

    // Format the date and time
    const options = {
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    };

    const formattedDateTime = new Intl.DateTimeFormat('en-US', options).format(eatDateTime);
    return formattedDateTime;
}

  function oddsToPercentage(odds) {
    // Check if the odds are valid (not zero or negative)
    if (odds <= 0) {
      throw new Error('Odds must be a positive value.');
    }

    // Calculate the percentage
    const percentage = (1 / odds) * 100;

    // Round the percentage to two decimal places
    return percentage.toFixed(2);
  }
  return (
    <Box mx="auto" className="w-full"  >
      <Group position="start" mb={5} onClick={() => setOpenedd(prev => !prev)} className="">

        <div className="grid grid-cols-12 text-white text-[0.9rem] mx-2 mb-1 bg-yellow-400/[0.1] p-3 col-span-6 items-center rounded">
          <div className="md:col-span-6 col-span-6 flex flex-col gap-y-2">
            <div className="flex gap-3">
              <p className="text-[0.8rem] text-white">
                {event_.home}
              </p>
            </div>
            <div className="flex gap-3">

              <p className="text-[0.8rem] text-white">
                {event_.away}
              </p>
            </div>
          </div>
          <div className="col-span-5 max_sm:col-span-5 md:col-span-3 flex gap-2 items-center max_sm:justify-between" >
            <div className="flex flex-col">
              <p className="text-[0.8rem] text-gray-200">Kickoff</p>
              <p className="text-[0.7rem] text-gray-300 text-gray-200">
                {formatDateTimeEAT(event_.starts)}
              </p>

            </div>
            <div className="">

            </div>
          </div>
          <div className='col-span-1'>
            {openedd ? <ArrowDropUpIcon fontSize='small' className='' /> : <ArrowDropDownIcon fontSize='small' />}
          </div>

        </div>
      </Group>

      <Collapse in={openedd} className="text-white">
        <div className="flex flex-col text-white text-[0.9rem] mx-2 mb-1 bg-yellow-400/[0.1] p-3 col-span-6 items-center rounded">
          {
            event_.periods.num_0.money_line != null ? <div className='flex flex-col gap-4 w-full my-4 bg-orange-600/[0.1] shadow-lg shadow-gray-900 p-2'>
              <p className='text-[0.7rem] text-gray-300 font-bold tracking-wide text-center w-full'>Win Probability</p>
              <div className='grid grid-cols-3'>
                <div className='col-span-1 flex flex-col items-center text-center bg-gray-900/[0.2] p-2 mx-1'>
                  <p className='text-[0.8rem] font-bold'>Home</p>
                  {
                    event_.periods.num_0.money_line != null &&
                    <p className='tracking-wide font-medium text-[0.7rem]'>{oddsToPercentage(event_.periods.num_0.money_line.home)}%</p>
                  }

                </div>
                <div className='col-span-1 flex flex-col items-center text-center bg-gray-900/[0.2] p-2 mx-1 mt-1'>
                  <p className='text-[0.8rem] font-bold'>Draw</p>
                  {
                    event_.periods.num_0.money_line != null &&
                    <p className='tracking-wide font-medium text-[0.7rem]'>{oddsToPercentage(event_.periods.num_0.money_line.draw)}%</p>
                  }
                </div>
                <div className='col-span-1 flex flex-col items-center text-center bg-gray-900/[0.2] p-2 mx-1'>
                  <p className='text-[0.8rem] font-bold'>Away</p>
                  {
                    event_.periods.num_0.money_line != null &&

                    <p className='tracking-wide font-medium text-[0.7rem]'>{oddsToPercentage(event_.periods.num_0.money_line.away)}%</p>
                  }
                </div>
              </div>
            </div> : (
              <div className='flex'>
                <p className='text-[0.7rem] text-gray-300'>No stats</p>
              </div>
            )
          }

          {/* CAT */}
          {/* <div className='flex flex-col gap-4 w-full mt-12'>
            <p className='z-20 text-[0.7rem] text-gray-300 font-bold tracking-wide text-center w-full uppercase'>Betting Offers</p>
            <div className='z-0 flex items-center gap-x-1'>
              <p className='bg-green-500 rounded p-1 font-bold text-white text-[0.7rem]'>Bet365</p>
              <p className='bg-yellow-400 rounded p-1 font-bold text-white text-[0.7rem]'>Betika</p>
            </div>
          </div> */}


        </div>
      </Collapse>
    </Box>
  )
}

export default FixtureCollapse
