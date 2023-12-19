"use client";
import React, { useEffect, useState } from "react";
import CompetionCollapse from "./Collapse";

const LinksMain = () => {

  const [leagues, setLeagues] = useState([])
  const [fixture, setFixture] = useState([])
  const [opened, setOpened] = useState(false)


  const fetcher = async () => {
    const url = 'https://football536.p.rapidapi.com/leagues';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'a91c39ba04msh138dde153e692afp15cff6jsnbd732b41d133',
        'X-RapidAPI-Host': 'football536.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setLeagues(result)
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetcher()

  }, [])



  const cricket_events = []
  return (
    <div className="grid  grid-cols-12 gap-x-2">
      {/* links */}
      {/* <div className="col-span-3 flex flex-col mx-2 my-4">
        {leagues && leagues.length > 0 &&
          leagues.map((league, i) => (
            <h2 className="text-gray-400 font-medium text-sm my-1" key={i}>
              {league.name}
            </h2>
          ))
        }
      </div> */}

      <div className="col-span-9">
        <div className="flex flex-col justify-center">


          <div className="flex w-full flex-col justify-start rounded my-1">
            {/* fixtures */}

            {leagues && leagues.length > 0 &&
              leagues.map((league, i) => (
                <CompetionCollapse competitionTitle={league.name} league={league} leagueIndex={league.id} opened={opened} key={i}/>

              ))
            }

          </div>
        </div>
      </div>
    </div>
  );
};

export default LinksMain;
