import React from 'react'

const Education = ({place,location,degree,year,Marks}) => {
  return (
    <div>
        <div className=" w-full h-full flex flex-col bg-emerald-50 border border-gray-200 rounded gap-1">
        <h2 className="text-center text-2xl font-bold">{place}</h2>
        <h2 className='text-center'>{location}</h2>
        <h2 className='text-center'>{degree}</h2>
        <h2 className='text-center'>{year}</h2>
        <h2 className='text-center'>{Marks}</h2>
    </div>
    </div>
  )
}

export default Education