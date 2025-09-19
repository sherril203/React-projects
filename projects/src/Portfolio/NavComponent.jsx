import React from 'react'

const NavComponent = () => {
  return (
    <div className="w-full bg-cyan-600 shadow-md">
      <nav className="max-w-7xl mx-auto p-5 flex justify-between items-center text-white">
        {/* Logo / Brand */}
        <h2 className="text-2xl font-bold tracking-wide">Portfolio</h2>

        {/* Nav Links */}
        <ul className="list-none flex gap-8 text-lg font-medium">
          <li className="hover:text-gray-200 cursor-pointer transition">Home</li>
          <li className="hover:text-gray-200 cursor-pointer transition">About</li>
          <li className="hover:text-gray-200 cursor-pointer transition">Contact</li>
          <li className="hover:text-gray-200 cursor-pointer transition">Resume</li>
        </ul>
      </nav>
    </div>
  )
}

export default NavComponent
