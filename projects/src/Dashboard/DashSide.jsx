import React from 'react'
import { AiOutlineHome } from 'react-icons/ai';
import { MdOutlineApps } from 'react-icons/md';
import { MdNotificationsActive } from 'react-icons/md';
import { IoIosApps } from 'react-icons/io';
import { IoStatsChartSharp } from 'react-icons/io5';
import { NavLink } from 'react-router';
import { HiListBullet } from 'react-icons/hi2';
import { HiMiniCodeBracketSquare } from 'react-icons/hi2';
import { MdOutlineWidgets } from 'react-icons/md';
import { SiGoogleforms } from 'react-icons/si';
import { FaIcons } from 'react-icons/fa';
import { MdMyLocation } from 'react-icons/md';
import { RiMenuAddFill } from 'react-icons/ri';
import { LiaCartArrowDownSolid } from 'react-icons/lia';
import { FaLaptop } from 'react-icons/fa';
import { TbMessages } from 'react-icons/tb';
import image from "./image.jpg"
const DashSide = () => {
  return (
   <div className="w-[20%] h-full fixed left-0 top-0 bottom-0 bg-cyan-300">
    <h2 className=' text-2xl p-6 flex flex-row gap-5'> <IoIosApps color="purple"/> Purple</h2>
    <div className="h-20 bg-emerald-600 text-center flex flex-row justify-center items-center">
         <img src={image} alt="Dashboard User"  className='rounded-full w-12 h-12 object-cover'/>
        <h2 className=' p-2 text-xl'>Sherril</h2> 
        <h3 className=' text-l flex flex-col '>Mern Stack Developer</h3>
    </div>
      <h2 className="text-xl font-bold mb-4"></h2>
      <nav className="space-y-1 p-3">
        <ul className="list-none space-y-2">
          <li className='text-xl text-purple-500 flex flex-row gap-41 hover:bg-blue-300  '>DashBoard <AiOutlineHome /> </li>
          <li className='text-xl flex flex-row gap-38  hover:bg-blue-300'>Page Layout <MdOutlineApps/></li>
          <li className='text-xl flex flex-row gap-54  hover:bg-blue-300'>Apps <LiaCartArrowDownSolid/></li>
          <li className='text-xl flex flex-row gap-47  hover:bg-blue-300'>Widgets <MdOutlineWidgets /></li>
          <li className='text-xl  flex flex-row gap-35  hover:bg-blue-300'>SidebarLayout <RiMenuAddFill Size={40}/></li>
          <li className='text-xl flex flex-row gap-27  hover:bg-blue-300'>Basic UI Elements <MdMyLocation size={18}/></li>
          <li className='text-xl flex flex-row gap-37  hover:bg-blue-300'>Advanced UI < FaLaptop/></li>
          <li className='text-xl flex flex-row gap-49  hover:bg-blue-300'>Popups < TbMessages/></li>
          <li className='text-xl flex flex-row gap-40 hover:bg-blue-300 '>Notification <MdNotificationsActive/> </li>
          <li className='text-xl flex flex-row gap-54  hover:bg-blue-300'>Icons <FaIcons/></li>
          <li className='text-xl flex flex-row gap-52  hover:bg-blue-300'>Forms <HiListBullet/></li>
          <li className='text-xl flex flex-row gap-40  hover:bg-blue-300 '>Text Editors <SiGoogleforms/> </li>
          <li className='text-xl flex flex-row gap-37  hover:bg-blue-300 '> Code Editors <HiMiniCodeBracketSquare/></li>
          <li className='text-xl flex flex-row gap-52  hover:bg-blue-300 '>Charts <IoStatsChartSharp/></li>
        </ul>
      </nav>
    </div>
  )
}

export default DashSide