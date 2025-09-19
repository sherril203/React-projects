import React from 'react'
import { Link } from 'react-router'
const FooterContent = () => {
  return (
    <footer className="bg-indigo-600 text-white py-6 mt-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        
        {/* Left Side - Branding */}
        <h2 className="text-lg font-semibold">© {new Date().getFullYear()} M Sherril James Kumar</h2>
        
        {/* Right Side - Links */}
        <ul className="flex gap-6 text-sm mt-10 md:mt-0">
          <Link className="hover:text-gray-200 cursor-pointer transition">LinkedIn</Link>
          <li className="hover:text-gray-200 cursor-pointer transition">GitHub</li>
          <li className="hover:text-gray-200 cursor-pointer transition">Contact</li>
        </ul>
      </div>

      {/* Bottom Note */}
      <p className="text-center text-xs text-gray-200 mt-4">
        All Rights Reserved
      </p>
    </footer>
  )
}

export default FooterContent
