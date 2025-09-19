import React from 'react'

const Education = ({ place, location, degree, year, Marks }) => {
  return (
    <div className="w-full h-full flex flex-col bg-white border border-gray-200 rounded-xl shadow-md p-6 space-y-2 hover:shadow-lg transition">
      <h2 className="text-center text-xl font-semibold text-blue-700">{place}</h2>
      <p className="text-center text-gray-800">{location}</p>
      <p className="text-center text-gray-700 font-medium">{degree}</p>
      <p className="text-center text-gray-600">{year}</p>
      <p className="text-center text-gray-800 font-medium">{Marks}</p>
    </div>
  )
}

export default Education
