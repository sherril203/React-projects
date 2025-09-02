import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Series from './Series/Series'
import Protagonist from './Protagonist'
import proPlayersImg from './images/pro-players.jpg';

const AboutWeb = () => {
  return (
    <div>
        <Navbar/>
        <div className='bg-cover bg-center p-80 text-white opacity-80 ' style={{ backgroundImage:  `url(${proPlayersImg})`}}>
        <h1 className='text-center text-6xl font-bold'>Welcome to World of Yugioh</h1>
        <h2 className='text-center text-4xl'>Yugioh is an anime and manga series created by Kazuki Takahashi</h2>
        <h2 className='text-center text-4xl'>Yugioh Series consist of 9 Series. Arc-v is taken with the combination of DM,GX,5DS and Zexal</h2>
        <h2 className='text-center text-4xl'>each series has its own storyline and characters along with different dimensions. It has some unique cards are also available in each series</h2>
        <h2 className='text-center text-4xl'>
          <b>Yugioh DM :</b> Eygptian Gods(Slifer,Obelisk,Ra) <br />
          <b> GX:</b>Scared Beasts(Uria,Hamon,Raviel) <br />
          <b>5DS :</b>  God cards(Odin,Thor,Loki) <br />
           <b>Zexal :</b> Number Cards <br/>
          <b> Go Rush and sevens :</b>maximum cards
        </h2>
        <h2 className='text-center text-4xl'>In <b>go rush</b> , introduced ritual cards  for protagonist called yudias</h2>
      </div>
      <Series/>
      <Protagonist/>
      <Footer/>
    </div>
  )
}

export default AboutWeb