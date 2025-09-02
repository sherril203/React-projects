import React from 'react'
import obelisk from '../cards/Obeslisk the tormentor.jpeg'
import Shining from '../cards/Blue Eyes Shining Dragon.jpeg'
import Reborn from '../cards/monster-reborn.jpeg'
import Chaos from '../cards/Blue eyes Chaos Max Dragon.jpeg'
import Mirror from '../cards/Mirror Force.jpeg'
import BlueEyes from '../cards/Blue Eyes White Dragon.jpeg'
import Navbar from '../Navbar'
import Footer from '../Footer'
const Kaiba = () => {
   const cards=[
        {image:BlueEyes,width:300},
        {image:Chaos,width:300},
        {image:obelisk,width:300},
        {image:Shining,width:300},
        {image:Reborn,width:300},
        {image:Mirror,width:300}
    ]
  return (
    <div className=' bg-slate-900 text-white'>
        <Navbar/>
        <div className=' p-3'>
             <h2 className='text-center font-bold text-2xl p-3'>Cards</h2>
            <div className='grid grid-cols-6 gap-1'>
             {
                cards.map((item)=>{
                    return(
                        <img src={item.image} width={item.width}/>
                    )
                })
               }
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Kaiba