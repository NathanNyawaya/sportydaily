
"use client";
import React, { useEffect, useState } from "react";
import Blogs from "../components/Blogs";
import SideBarAds from "../components/ads/SideBarAds";
import Footer from "../components/Footer";
import LoadingStatus from "../status/Loading";
import SubscribeNewsletter from "../components/SubscribeNewsletter";
import { checkIsAuthenticated } from "../funcStore/isAuthenticated";
import Navbar from "../components/navbars/Navbar";
import SlidingText from "../components/SlidingText";

const Home = () => {
  const [activeLink, setActiveLink] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState("EPL Chelsea");
  const [productCategory, setProductCategory] = useState("");
  const [activeTeams, setActiveTeams] = useState([]);

  useEffect(() => {
    const l_raw = localStorage.getItem("l_");
    if (l_raw) {
      localStorage.removeItem("l_");
    }
    setActiveLink(true);
  }, []);

  useEffect(() => {
    const ksj = checkIsAuthenticated("101");
    if (ksj) {
      setLoggedIn(true);
    }
  }, []);

  const theme = [
    {
      club_name: "EPL Arsenal",
      short_name: "Arsenal",
      bg: "bg-[#EF0107]",
      text: "text-white",
      h_c_1: "text-[#EF0107]",
      active: 1
    },
    {
      club_name: "EPL Aston Villa",
      short_name: "Aston Villa",
      bg: "bg-claret-700",
      text: "text-white",
      h_c_1: "text-white",
      active: 0
    },
    {
      club_name: "EPL Brentford",
      short_name: "Brentford",
      bg: "bg-red-600",
      text: "text-white",
      h_c_1: "text-white",
      active: 0
    },
    {
      club_name: "EPL Brighton & Hove Albion",
      short_name: "Brighton & Hove Albion",
      bg: "bg-blue-500",
      text: "text-white",
      h_c_1: "text-white",
      active: 0
    },
    {
      club_name: "EPL Burnley",
      short_name: "Burnley",
      bg: "bg-claret-600",
      text: "text-white",
      h_c_1: "text-white",
      active: 0
    },
    {
      club_name: "EPL Chelsea",
      short_name: "Chelsea",
      bg: "bg-blue-700",
      text: "text-white",
      h_c_1: "text-[#034694]",
      active: 1
    },
    {
      club_name: "EPL Crystal Palace",
      short_name: "Crystal Palace",
      bg: "bg-red-500",
      text: "text-white",
      h_c_1: "text-white",
      active: 0
    },
    {
      club_name: "EPL Everton",
      short_name: "Everton",
      bg: "bg-blue-600",
      text: "text-white",
      h_c_1: "text-white",
      active: 0
    },
    {
      club_name: "EPL Leeds United",
      short_name: "Leeds United",
      bg: "bg-orange-600",
      text: "text-white",
      h_c_1: "text-white",
      active: 0
    },
    {
      club_name: "EPL Leicester City",
      short_name: "Leicester City",
      bg: "bg-blue-400",
      text: "text-white",
      h_c_1: "text-white",
      active: 0
    },
    {
      club_name: "EPL Liverpool",
      short_name: "Liverpool",
      bg: "bg-[#C8102E]",
      text: "text-white",
      h_c_1: "text-[#C8102E]",
      active: 1
    },
    {
      club_name: "EPL Manchester City",
      short_name: "Manchester City",
      bg: "bg-[#6CABDD]",
      text: "text-white",
      h_c_1: "text-[#6CABDD]",
      active: 1
    },
    {
      club_name: "EPL Manchester United",
      short_name: "Manchester United",
      bg: "bg-[#DA291C]",
      text: "text-white",
      h_c_1: "text-[#DA291C]",
      active: 1
    },
    {
      club_name: "EPL Newcastle United",
      short_name: "Newcastle United",
      bg: "bg_1",
      text: "text-white",
      h_c_1: "text-white",
      active: 0
    },
    {
      club_name: "EPL Norwich City",
      short_name: "Norwich City",
      bg: "bg-green-500",
      text: "text-white",
      h_c_1: "text-white",
      active: 0
    },
    {
      club_name: "EPL Southampton",
      short_name: "Southampton",
      bg: "bg-red-600",
      text: "text-white",
      h_c_1: "text-white",
      active: 0
    },
    {
      club_name: "EPL Tottenham Hotspur",
      short_name: "Tottenham Hotspur",
      bg: "bg-[#132257]",
      text: "text-white",
      h_c_1: "text-[#132257]",
      active: 1
    },
    {
      club_name: "EPL Watford",
      short_name: "Watford",
      bg: "bg-yellow-600",
      text: "text-white",
      h_c_1: "text-white",
      active: 0
    },
    {
      club_name: "EPL West Ham United",
      short_name: "West Ham United",
      bg: "bg-claret-600",
      text: "text-white",
      h_c_1: "text-white",
      active: 0
    },
    {
      club_name: "EPL Wolverhampton Wanderers",
      short_name: "Wolverhampton Wanderers",
      bg: "bg-gold-600",
      text: "text-white",
      h_c_1: "text-white",
      active: 0
    }
  ];


  useEffect(() => {
    const activeTeams = theme.filter(team => team.active === 1);
    setActiveTeams(activeTeams);
  }, []);

  const handleTeamChange = (event) => {
    const club_name = event.target.value;
    setSelectedTeam(club_name);
  };

  const selectedTheme = activeTeams.find(team => team.club_name === selectedTeam);

  const links = [
    // { id: "home", label: "Home", href: "/" },
    // { id: "livestreams", label: "Live Streams", href: "/livestreams" },
    { id: "fixtures", label: "Fixture", href: "/fixtures" },
    { id: "highlights", label: "Highlights", href: "/highlights" },
    { id: "predictions", label: "Prediction", href: "/predictions" },
    // Add more links as needed
  ];
  return (
    <main className="relative bg-black">
      {activeLink && loggedIn ? (
        <div className="relative bg-black w-full">
          <div className="mx-auto min-h-screen max-w-screen-xl flex flex-col">
            <Navbar theme={selectedTheme} />
            <div className="grid grid-cols-2 sm:grid-cols-2 m-1 gap-x-2 w-full">
              {/* Team Selection Dropdown */}
              <div className="flex w-full">
                <select
                  className={`rounded font-bold text-gray-50 md:text-[0.962rem] text-[0.8rem]  tracking-wider  px-2 py-1 ${selectedTheme.bg} ${selectedTheme.text}`}
                  value={selectedTeam}
                  onChange={(e) => handleTeamChange(e)}
                >
                  {activeTeams.map((team, index) => (
                    <option key={index} value={team.club_name} className="font-bold text-gray-50  md:text-[0.962rem] text-[0.8rem]  tracking-wider">
                      {team.short_name}
                    </option>
                  ))}
                </select>
              </div>
            
            </div>

            <div className="flex flex-col text-black mb-40 md:mb-60">
              {/* Main content */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-x-2">
                <div className="col-span-4 flex flex-col mt-20 md:col-span-3">
                  <Blogs club_name={selectedTeam}  theme={selectedTheme} />
                </div>
                <div className="max_md:hidden col-span-1">
                  <div className="flex flex-col gap-y-2 sticky top-40">
                    <SubscribeNewsletter />
                    <SideBarAds />
                  </div>
                </div>
              </div>
            </div>
            <SlidingText/>

            <Footer theme={selectedTheme} />
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center h-screen w-screen">
          <p className="text-2xl md:text-3xl font-bold p-1 text-white tracking-wider">
            ThePitchBasket™
          </p>
          <LoadingStatus />
        </div>
      )}
    </main>

  );
};

export default Home;
