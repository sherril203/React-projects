import React from 'react'

const WorkExperience = ({ Role, Company, Duration, description, TechTools }) => {
  return (
    <div className="w-full h-full flex flex-col bg-white border border-gray-200 rounded-xl shadow-md p-6 space-y-2 hover:shadow-lg transition">
      <h2 className="text-center text-xl font-semibold text-blue-700">{Role}</h2>
      <p className="text-center text-gray-800 font-medium">{Company}</p>
      <p className="text-center text-gray-600">{Duration}</p>
      <p className="text-center text-gray-700">{description}</p>
      <p className="text-center text-gray-800 font-medium">{TechTools}</p>
    </div>
  )
}

export default WorkExperience
