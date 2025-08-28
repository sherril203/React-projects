import React from 'react'
import DashNav from './DashNav'
import DashSide from './DashSide'
import { AiOutlineHome } from 'react-icons/ai';
import { FcPieChart } from 'react-icons/fc';
import { IoBarChartSharp } from 'react-icons/io5';

const DashBoard = () => {
  return (
    <div className='w-full h-screen bg-gray-300'>
       <DashNav/>
        <div className='flex flex-col'>
           <DashSide/> 
        </div>
        <div className='flex flex-row  gap-100 justify-center items-center '>
             <h2 className='font-bold p-3 text-2xl gap-9 flex flex-row '> <AiOutlineHome/>Dashboard</h2> 
             <h2  className='  p-3 text-xl gap-48'>Overview</h2>
        </div>
        <div className='flex flex-row justify-center  items-center gap-4   '>
            <div className='bg-pink-300 text-center p-10 text-white rounded mx-3 m-3'>
              <p>Weekly Sales </p> <br />
              <p className='font-bold'>$15,0000</p> <br />
               <p>increased by 60%</p>
            </div>
            <div className='bg-blue-300 text-center p-10 text-white rounded mx-3 m-10'> 
                    <p>Weekly Orders</p> <br />
                    <p className='font-bold'>45,6334</p> <br />
                    <p>increased by 10%</p>
            </div>
            <div className='bg-emerald-300 text-center text-white p-11 rounded mx-3 m-3'>
                <p>Vistors Online</p> <br /> 
               <p className='font-bold'>95,5741</p>  <br />
                 <p>increased by 5%</p>
            </div>
        </div>
        <div className='flex flex-row justify-center   gap-4 mx-30 '>  
            <div className=' bg-white p-10 rounded'>
                <p className='font-bold'>Visit and Sales Statitics</p>
                <IoBarChartSharp color="blue"size={200} className='justify-center mx-10 p-3 ' />
            </div>
            <div className='bg-white p-8 rounded'>
                <p className='font-bold'>Traffic Sources</p>
                <FcPieChart size={150} className='justify-center mx-10'/>
                <p>Search Engine     30%</p>
                <p>Direct Click      30%</p>
                <p>Bookmark Click    40%</p>
            </div>
        </div>
        
        
    </div>
  )
}

export default DashBoard