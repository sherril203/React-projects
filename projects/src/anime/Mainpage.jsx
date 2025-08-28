import React from 'react'
import Series from './Series'
import Navbar from './Navbar'
import Protagonist from './Protagonist'
import Footer from './Footer'
import { Link } from 'react-router'
import proPlayersImg from './images/pro-players.jpg';


const Mainpage = () => {
  return (
    <div >
      <Navbar/>
      <div className='bg-cover bg-center p-80 text-white opacity-80'   style={{ backgroundImage:  `url(${proPlayersImg})` }}>
        <h1 className='text-center text-6xl font-bold'>Welcome to World of Yugioh</h1>
        <h2 className='text-center text-4xl'>Yugioh is an anime and manga series created by Kazuki Takahashi</h2> <br />
        <div className='flex flex-row justify-center'>
          <button className='bg-amber-400 hover:bg-amber-500 text-black font-bold rounded px-4 py-2 text-2xl'><Link to={"/Aboutweb"}>Learn More</Link></button>
        </div>
        
      </div>
        <Series/>
        <Protagonist/>
        <Footer/>
    </div>
  )
}

export default Mainpage