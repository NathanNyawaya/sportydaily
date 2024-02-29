import React from 'react'
import Navbar from './Navbar'
import BottomNav from './Dropdown'

const Navigations = () => {
  return (
    <div className="sticky top-2 z-50 mx-1">
    <Navbar />
    <div className=" grid grid-cols-4 w-full mx-auto p-1">
      <div className="md:col-span-3 col-span-0"></div>
      <div className="md:col-span-1 col-span-4 shadow-lg shadow-[#FCD107]/[0.1]">
        <BottomNav />
      </div>
    </div>
  </div>
  )
}

export default Navigations