import React from 'react'
import DashSide from './DashSide'
import { MdNotificationsNone } from 'react-icons/md';
import { HiOutlineMenu } from 'react-icons/hi';
import { MdFullscreen } from 'react-icons/md';
import { AiOutlineMail } from 'react-icons/ai';
import { FiPower } from 'react-icons/fi';
import { IoMenu } from 'react-icons/io5';
import image from './image.jpg'
const DashNav = () => {
  return (
    <div className=''>
        
        <nav className=' w-full h-20 p-5  bg-indigo-400 flex space-x-3 justify-center items-center' >
            <div className='flex space-x-2 gap-8 list-none m'>
                <HiOutlineMenu size={30} className='mt-3'/>
                <li><input type='text' placeholder='Search Projects ' className=' p-1 rounded-full bg-white mt-3 ' /></li>
                 <li className='flex justify-center items-center gap-3 text-center' > <img src={image} alt="Dashboard User"  className='rounded-full w-12 h-12 object-cover'/>M Sherril James Kumar</li>
                <MdFullscreen size={30} className='mt-3'/>
                <AiOutlineMail size={30} className='mt-3'/>
                <MdNotificationsNone size={30} className='mt-3'/>
                <FiPower size={25} className='mt-3'/>
                <IoMenu size={30} className='mt-3'/>
            </div>
        </nav>

    </div>
  )
}

export default DashNav