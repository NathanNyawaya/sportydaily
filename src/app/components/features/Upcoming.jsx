import Link from 'next/link'
import React from 'react'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const UpcomingMatches = () => {
    return (
        <div className="m-1 max_md:mb-10 mx-auto">
            <div className="w-full mb">
                <p className="text-[0.8rem] tracking-medium uppercase text-gray-200 font-bold">UPCOMING</p>
            </div>
            <div className="bg-gray-600/[0.2] min-h-[40vh] py-20">
                <div className="flex justify-center w-full p-2">
                    <h2 className="text-xl text-gray-200 font-bold uppercase bg-gray-600/[0.4] shadow-lg px-20 py-2 shadow-yellow-600/[0.3]">Premier League</h2>
                </div>
                {/* teams */}
                <div className="grid grid-cols-12 w-full py-6">

                    <div className="col-span-5 flex flex-col w-full mx-auto  gap-1 items-center justify-center">
                        <img
                            alt="home"
                            src="https://l.ivesoccer.sx/teams/liverpool.png"
                            className="h-[50px] w-[50px]"
                        />
                        <p className="my-2 text-gray-300 text-[0.8rem] font-bold tracking-wide text-center">Liverpool </p>
                    </div>

                    <div
                        className="col-span-2 bord border-gray-600/[0.4] rounded text-center p-3 text-gray-200"
                    >
                        <p className="font-bold tracking-wide text-[0.6rem]">Kickoff</p>
                        <h4 className="font-bold text-[0.9rem]">23:15</h4>
                        <h4 className="text-[0.7rem] font-medium">31/1</h4>
                    </div>
                    <div className="col-span-5 flex flex-col w-full gap-1 items-center justify-center">
                        <img
                            alt="away"
                            src="https://l.ivesoccer.sx/teams/chelsea.png"
                            className="h-[50px] w-[50px]"
                        />
                        <p className="my-2 text-gray-300 text-[0.8rem] w-full font-bold tracking-wide text-center">Chelsea </p>
                    </div>
                </div>
                <div className="flex justify-center w-full p-2">
                    <p
                        className="flex items-center justify-center cursor-pointer text-[1rem] text-gray-200 font-bold uppercase bg-gray-500/[0.1] shadow-lg px-20 py-2 shadow-gray-600/[0.4]"
                    >
                        <Link href="/fixtures">
                            See More
                        </Link>
                        <ArrowRightIcon color='warning'/>
                    </p>
                </div>
            </div>
            {/* end upcoming */}
        </div>
    )
}

export default UpcomingMatches