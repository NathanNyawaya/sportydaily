"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Group, Collapse, Box } from "@mantine/core";
import FixtureCollapse from "./Collapse";
import Filters from "@/app/bet/SP/SPB/components/Filters";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SlidingAds from "@/app/bet/components/ads/SlidingAds";


const LeaguesFixtures = ({ activeLeague }) => {
  const [leagues, setLeagues] = useState([])
  const [eventsData, setEventsData] = useState([])
  const [loading, setLoading] = useState(false)
  const [leagueEvents, setLeagueEvents] = useState([])
  const [leagueEventsDT, setLeagueEventsDT] = useState([])
  const [open, setOpen] = useState(true)
  const [openeddd, setOpeneddd] = useState(true)
  const [openedLeagues, setOpenedLeagues] = useState([]);
  const [filter, setFilter] = useState("")

  const [defaultLeagues, setDefaultLeagues] = useState(true)

  useEffect(() => {
    if (filter != "") {
      if (leagueEventsDT.length > 0) {
        const filtered = leagueEventsDT.filter(league => {
          if (league.leagueName === filter) {
            return league
          }
        })
        if (filter.length > 0) {
          setLeagueEvents(filtered)
        }
      }

    }
  }, [filter])

  const toggleLeagueCollapse = (index) => {
    setOpenedLeagues((prev) => {
      const isOpened = prev.includes(index);
      if (isOpened) {
        return prev.filter((item) => item !== index);
      } else {
        return [...prev, index];
      }
    });
  };


  const fetchLeagues = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER}/api/betgreen/sp/leagueEvents`)
      if (res && res.data) {
        setLeagueEventsDT(res.data)
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchLeagues()

  }, [])

  const filterEvents = () => {
    const filteredData = leagues.filter(league_ => {
      return league_.leagueName == activeLeague
    })
    if (filteredData.length > 0) {
      setEventsData(filteredData)
      setLoading(false)
    } else {
      setEventsData([])
      // setLoading(false)

    }
    setLoading(false)
  }

  useEffect(() => {
    filterEvents()
  }, [leagues, activeLeague])

  return (
    <div className="grid grid-cols-12 gap-x-2">
      <div className=" z-50 sticky top-0 col-span-12 mb-5">
        <div className="">
          {
            leagueEventsDT.length > 0
            &&
            <Filters leagueEvents={leagueEventsDT} setDefaultLeagues={setDefaultLeagues} setFilter={setFilter} setOpeneddd={setOpeneddd} />
          }
        </div>
      </div>

      <div className="col-span-12">
        <div className="flex flex-col justify-center">
          <div className="flex w-full flex-col justify-start rounded my-1">

            {/* fixtures */}
            {loading ? (
              <div className="flex justify-center items-center">
                <p className="text-white">{"Loading..."}</p>
              </div>
            ) : (
              <>
                {
                  leagueEvents  && !defaultLeagues &&leagueEvents.length > 0 && (
                    leagueEvents.map((league_, index) => {
                      const isOpened = openedLeagues.includes(index);


                      return (
                        <div className="flex flex-col" key={index}>
                          <div className="flex flex-col">
                            <Box mx="auto" className="w-full">
                              <Group
                                position="start"
                                mb={5}
                                onClick={() => setOpen(prev=>!prev)}
                              >
                                <div className="flex justify-between items-center text-white text-[0.9rem] mb-1 bg-black md:hover:bg-yellow-400/[0.1] p-1 col-span-6 items-center rounded">
                                  <div className="flex items-center gap-x-2 py-1">
                                    <img src="https://img.icons8.com/3d-fluency/94/football2.png" alt="sport-icon" className="h-[20px] w-[20px]" />
                                    <h3 className="text-gray-300 text-sm font-medium ">{league_.leagueName}</h3>
                                  </div>
                                  <div>
                                    {open ? (
                                      <ArrowDropUpIcon fontSize="small" className="" />
                                    ) : (
                                      <ArrowDropDownIcon fontSize="small" className="text-[#FCD107]/[0.5]"/>
                                    )}
                                  </div>
                                </div>
                              </Group>
                              <Collapse in={open} className="text-white">
                                {league_.leagueEventsData.map((event, i) => (
                                  <FixtureCollapse
                                    event_={event}
                                    opened={false}
                                    league_={league_}
                                    key={i}
                                  />
                                ))}
                              </Collapse>
                            </Box>
                          </div>
                          {index % 13 === 0 ? <div className="my-5"><SlidingAds /></div> : ""}
                        </div>
                      );

                    })
                  )
                }
                {
                  leagueEventsDT && defaultLeagues && leagueEventsDT.length > 0 &&
                  (
                    <div className="flex items-center justify-between mb-5 bg-gradient-to-r p-1 from-black to-yellow-500 items-center">
                      <p className="text-white uppercase text-[0.9rem] tracking-wide font-bold">Popular Leagues</p>
                      <img src="https://img.icons8.com/3d-fluency/94/star.png" alt="start-icon" className="h-[20px] w-[20px]" />
                    </div>
                  )
                }
                {
                  leagueEventsDT && defaultLeagues && leagueEventsDT.length > 0 && (
                    leagueEventsDT.map((league_, index) => {
                      const isOpened = openedLeagues.includes(index);
                      const topLeagues = [
                        // "England - Premier League",
                        "Italy - Serie A",
                        "Mexico - Liga de Expansión MX",
                        "Spain - La Liga",
                        "Spain - Segunda Division",
                        "Germany - Bundesliga",
                        "CAF - Africa Cup of Nations",
                        "Mexico - Liga Premier",
                        "UEFA - Champions League",
                        "UEFA - EURO",
                        "UEFA - Europa League"
                      ];
                      if (league_.leagueName === "England - Premier League") {
                        return (
                          <div className="flex flex-col" key={index}>
                            <div className="flex flex-col" >
                              <Box mx="auto" className="w-full">
                                <Group
                                  position="start"
                                  mb={5}
                                  onClick={() => toggleLeagueCollapse(index)}
                                >
                                  <div className="flex justify-between items-center text-white text-[0.9rem] mb-1 bg-black md:hover:bg-yellow-400/[0.1] p-1 col-span-6 items-center rounded">
                                    <div className="flex items-center gap-x-2 py-1">
                                      <img src="https://img.icons8.com/3d-fluency/94/football2.png" alt="sport-icon" className="h-[20px] w-[20px]" />
                                      <h3 className="text-gray-300 text-sm font-medium ">{league_.leagueName}</h3>
                                    </div>
                                    <div>
                                      {isOpened ? (
                                        <ArrowDropUpIcon fontSize="small" className="" />
                                      ) : (
                                        <ArrowDropDownIcon fontSize="small" className="text-[#FCD107]/[0.5]"/>
                                      )}
                                    </div>
                                  </div>
                                </Group>
                                <Collapse in={isOpened} className="text-white">
                                  {league_.leagueEventsData.map((event, i) => (
                                    <FixtureCollapse
                                      event_={event}
                                      opened={true}
                                      league_={league_}
                                      key={i}
                                    />
                                  ))}
                                </Collapse>
                              </Box>
                            </div>
                          </div>
                        );
                      }

                      if (topLeagues.includes(league_.leagueName)) {
                        return (
                          <div className="flex flex-col" key={index}>
                            <div className="flex flex-col">
                              <Box mx="auto" className="w-full">
                                <Group
                                  position="start"
                                  mb={5}
                                  onClick={() => toggleLeagueCollapse(index)}
                                >
                                  <div className="flex justify-between items-center text-white text-[0.9rem] mb-1 bg-black md:hover:bg-yellow-400/[0.1] p-1 col-span-6 items-center rounded">
                                    <div className="flex items-center gap-x-2 py-1">
                                      <img src="https://img.icons8.com/3d-fluency/94/football2.png" alt="sport-icon" className="h-[20px] w-[20px]" />
                                      <h3 className="text-gray-300 text-sm font-medium ">{league_.leagueName}</h3>
                                    </div>
                                    <div>
                                      {isOpened ? (
                                        <ArrowDropUpIcon fontSize="small" className="" />
                                      ) : (
                                        <ArrowDropDownIcon fontSize="small" className="text-[#FCD107]/[0.5]"/>
                                      )}
                                    </div>
                                  </div>
                                </Group>
                                <Collapse in={isOpened} className="text-white">
                                  {league_.leagueEventsData.map((event, i) => (
                                    <FixtureCollapse
                                      event_={event}
                                      opened={false}
                                      league_={league_}
                                      key={i}
                                    />
                                  ))}
                                </Collapse>
                              </Box>
                            </div>
                            {index % 13 === 0 ? <div className="my-5"><SlidingAds /></div> : ""}
                          </div>
                        );
                      }

                    })
                  )
                }


              </>
            )}
          </div>
          {/* <div className="my-10 flex flex-col m-1">
            <p className="text-[0.6rem] text-gray-700">Advertisment</p>
            <HorizontalAds />
          </div> */}
        </div>
      </div>
    </div >
  );
};

export default LeaguesFixtures;




// const fetcher = async () => {
//   setLoading(true)
//   const options = {
//     method: 'GET',
//     url: 'https://football536.p.rapidapi.com/fixtures',
//     params: {
//       status: 'SCHEDULED',
//       date_from: 'today'
//     },
//     headers: {
//       'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_FREE_KEY,
//       'X-RapidAPI-Host': 'football536.p.rapidapi.com'
//     }
//   };

//   try {
//     const response = await axios.request(options)
//     if (response && response.data) {
//       if (response.data.data.length > 0) {
//         setLeagues(response.data.data)
//       }
//     }
//   } catch (error) {
//     console.error(error);
//   }
// }