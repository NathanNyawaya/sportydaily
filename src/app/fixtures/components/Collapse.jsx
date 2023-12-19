import React, { useEffect, useState } from 'react'
import { Group, Collapse, Box } from "@mantine/core";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LockIcon from '@mui/icons-material/Lock';
import axios from 'axios';



const CompetionCollapse = ({ leagueEvents, opened }) => {


  const [openedd, setOpenedd] = useState(opened)
  const [hide, setHide] = useState(false)


  const handleEventClick = (event_id) => {
    location.replace(`/exchange/e/cricket/${event_id}`)
  }



 



  const onClick = () => {
    setOpenedd(prev => !prev)
  }

  return (
    <div>
      {
        leagueEvents && leagueEvents.length > 0 && (
          <Box mx="auto" className="bg-gray-800 p-2">
            <Group position="start" mb={5} onClick={onClick} className="bg-gray-900/[0.5] py-2 rounded">
              <div className="flex justify-between text-white items-center w-full">
                <p className="text-[1rem] font-bold text-white px-2">Events</p>
                {openedd ? <ArrowDropUpIcon fontSize='small' className='' /> : leagueEvents.length === 0 ? <LockIcon fontSize='small' /> : <ArrowDropDownIcon fontSize='small' />}
              </div>
            </Group>

            <Collapse in={openedd} className="text-white">
              <div className="flex flex-col">

                {leagueEvents.map((event_, index) => (
                  <div className='flex ' key={index}>
                    <p>Team</p>
                    <div>
                      <p>{event_.home_team.name}</p>
                      <p>vs</p>
                      <p>{event_.away_team.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Collapse>
          </Box>
        )
      }
    </div>
  )
}

export default CompetionCollapse
