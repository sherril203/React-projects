import React from 'react'

const NavComponent = () => {
  return (
    <div className=' w-full h-full  bg-cyan-600 '>
        <nav className='p-5 flex gap-90 text-center '>
            <h2>Portfolio</h2>
            <ul className='list-none flex gap-20'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Resume</li>
            </ul>
        </nav>
    </div>
  )
}

export default NavComponent