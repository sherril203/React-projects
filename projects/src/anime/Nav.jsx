import React from 'react';
import proPlayersImg from './images/pro-players.jpg';

const Nav = () => {
  return (
    <div
      className="relative bg-cover bg-center py-100 text-white"
      style={{ backgroundImage: `url(${proPlayersImg})` }}
    >
      <nav className="absolute top-0 left-0 w-full flex justify-center items-center py-4  bg-opacity-50">
        <ul className="flex space-x-6 text-lg font-semibold">
          <li className="hover:text-yellow-300 cursor-pointer">Home</li>
          <li className="hover:text-yellow-300 cursor-pointer">About</li>
          <li className="hover:text-yellow-300 cursor-pointer">Services</li>
          <li className="hover:text-yellow-300 cursor-pointer">Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
