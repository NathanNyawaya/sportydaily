import React from 'react'
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';

const SideBarNavigation = () => {
    return (
        <div className='min-h-[30vh]'>
            <div className="flex gap-x-2 items-center bg-gray-200 border border-gray-800 p-1 shadow-l">
                <SportsSoccerIcon size="small" color="black" className="bg-black rounded-full" />
                <p className="text-[0.8rem] font-medium hover text-gray-500 ">Soccer</p>
            </div>
        </div>
    )
}

export default SideBarNavigation