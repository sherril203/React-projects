import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import DarkMag from './cards/Dark Magician.jpeg'
import Girl from './cards/DarkMagicianGirl.png'
import slifer from './cards/slifer the sky dragon.jpeg'
import obelisk from './cards/Obeslisk the tormentor.jpeg'
import ra from './cards/winged dragon of ra.jpeg'
import Reborn from './cards/monster-reborn.jpeg'
import Solider from './cards/Black Luster Solider.jpeg'
import Buster from './cards/Buster Solider.jpeg'
import Mirror from './cards/Mirror Force.jpeg'
import BRitual from './cards/Black Luster Ritual.jpeg'
import MRitual from './cards/Black Magic Ritual.jpg'
import Chaos from './cards/Magician of Black Chaos.jpeg'
const Yami = () => {
    const cards=[
        {image:DarkMag ,width:300},
        {image:Girl,width:300},
        {image:slifer,width:300},
        {image:obelisk,width:300},
        {image:ra,width:300},
        {image:Chaos,width:300},
        {image:Solider,width:300},
        {image:Buster,width:300},
        {image:Reborn,width:300},
        {image:Mirror,width:300},
        {image:BRitual,width:300},
        {image:MRitual,width:300},

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

export default Yami