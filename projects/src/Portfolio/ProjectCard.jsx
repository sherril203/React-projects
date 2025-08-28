import React from 'react'

const ProjectCard = ({title,description,Role,TechTools}) => {
  return (
    <div className=" w-full h-full flex flex-col bg-emerald-50 border border-gray-200 rounded gap-1">
        <h2 className="text-center text-2xl font-bold">{title}</h2>
        <h2 className='text-center'>{description}</h2>
        <h2 className='text-center'>{Role}</h2>
        <h2 className='text-center'>{TechTools}</h2>
    </div>
  )
}

export default ProjectCard