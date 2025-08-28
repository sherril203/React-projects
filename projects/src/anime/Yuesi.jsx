import React from 'react'
import Star from './cards/Stardust dragon.jpeg'
import Rose  from './cards/Black Rose Dragon.jpeg'
import Red from './cards/Red Dragon Archfiend.jpeg'
import Black from './cards/Black Wing Dragon.jpeg'
import Fairy from './cards/Ancient Fairy Dragon.jpeg'
import power from './cards/Power Tool Dragon.jpeg'
import Life from './cards/Life Stream Dragon.jpeg'
import Junk from './cards/Junk Warrior.jpeg'
import Shooting from './cards/Shooting Star Dragon.jpeg'
import Navbar from './Navbar'
import Footer from './Footer'
const Yuesi = () => {
   const cards=[
        {image:Junk,width:300},
        {image:Shooting,width:300},
        {image:Star,width:300},
        {image:Rose,width:300},
        {image:Red,width:300},
        {image:Black,width:300},
        {image:Fairy,width:300},
        {image:power,width:300},
        {image:Life,width:300}
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

export default Yuesi