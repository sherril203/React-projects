import React from 'react'
import blade from '../cards/E-Hero BladeEdge.webp'
import necros from '../cards/E-Hero Necroshade.jpg'
import divine from '../cards/E-Hero Divine Neos.avif'
import wild from '../cards/E-Hero WildHeart.webp'
import spark from '../cards/E-Hero Sparkman.webp'
import Grand from '../cards/E-Hero Grand Neos.jpg'
import Reborn from '../cards/monster-reborn.jpeg'
import Storm from '../cards/E-Hero Storm Neos.jpg'
import Prisma from '../cards/E-Hero Prisma.jpg'
import Neos from '../cards/E-Hero Neos.webp'
import Navbar from '../Navbar'
import Footer from '../Footer'
const Jaden = () => {
   const cards=[
        {image:divine,width:300},
        {image:blade,width:300},
        {image:necros,width:300},
        {image:wild,width:300},
        {image:Neos,width:300},
        {image:Storm,width:300},
        {image:Grand,width:300},
        {image:spark,width:300},
        {image:Reborn,width:300},
        {image:Prisma,width:300}
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

export default Jaden