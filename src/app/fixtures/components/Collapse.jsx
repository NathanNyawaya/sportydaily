import React, { useEffect, useState } from 'react'
import { Group, Collapse, Box } from "@mantine/core";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LockIcon from '@mui/icons-material/Lock';
import axios from 'axios';



const CompetionCollapse = ({ competitionTitle, leagueIndex,league, opened }) => {
  console.log(league)

  const [eventsData, setEventsData] = useState([])
  const [openedd, setOpenedd] = useState(opened)
  const [hide, setHide] = useState(false)


  const handleEventClick = (event_id) => {
    location.replace(`/exchange/e/cricket/${event_id}`)
  }

  const fetcher = async () => {
   

    const options = {
      method: 'GET',
      url: 'https://football536.p.rapidapi.com/fixtures',
      params: { league_id: `${leagueIndex}` },
      headers: {
        'X-RapidAPI-Key': 'a91c39ba04msh138dde153e692afp15cff6jsnbd732b41d133',
        'X-RapidAPI-Host': 'football536.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options)
      setEventsData(response.data)
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetcher()
  }, [])

  const formatIsoTimestamp = (isoTimestamp) => {
    const date = new Date(isoTimestamp);
    const unixTimestamp = Math.floor(date.getTime() / 1000); // Convert to Unix timestamp
    return formatUnixTimestamp(unixTimestamp);
  };

  const formatUnixTimestamp = (unixTimestamp) => {
    const date = new Date(unixTimestamp * 1000);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero-based, so add 1
    const hours = date.getHours();
    const minutes = date.getMinutes();

    const formattedDate = `${day}/${month} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    return formattedDate;
  };

  // const eventFetch = async () => {
  //   try {
  //     const res = await axios.get(
  //       `${process.env.NEXT_PUBLIC_BACKEND_URL}`
  //     );
  //     if (res && res.data.length > 0) {
  //       console.log(res.data[0])
  //       setEventsData(res.data)
  //     } else {
  //       setOpenedd(false)
  //       setTimeout(() => {
  //         setHide(true)
  //       }, 3000)
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // useEffect(() => { eventFetch() }, [])

  const onClick = () => {
    setOpenedd(prev => !prev)
  }

  return (
    <div>
      {
        eventsData && eventsData.length > 0 && (
          <Box mx="auto" className="bg-gray-800 p-2">
            <Group position="start" mb={5} onClick={onClick} className="bg-gray-900/[0.5] py-2 rounded">
              <div className="flex justify-between text-white items-center w-full">
                <p className="text-[1rem] font-bold text-white px-2">{competitionTitle}</p>
                {openedd ? <ArrowDropUpIcon fontSize='small' className='' /> : eventsData.length === 0 ? <LockIcon fontSize='small' /> : <ArrowDropDownIcon fontSize='small' />}
              </div>
            </Group>

            <Collapse in={openedd} className="text-white">
              <div className="flex flex-col">

                {eventsData.map((event_, index) => (
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
