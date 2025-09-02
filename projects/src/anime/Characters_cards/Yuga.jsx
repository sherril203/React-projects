import React from 'react'
import witch from '../cards/sevens road witch.jpg'
import sorcerer from '../cards/sevens_road_sorcerer.jpg'
import wiz from '../cards/sevens_road_sorcerer.jpg'
import mage from '../cards/sevens_road_mage.jpg'
import master from '../cards/master of sevens road.jpg'
import magician from '../cards/sevens road magician.png'
import war from '../cards/sevens road warlock.jpg'
import charm from '../cards/sevens road charm witch.png'
import palladin from '../cards/sevens_paladin_the_magical_knight.jpg'
import sword from '../cards/swordsman of roadstar.jpg'
import Navbar from '../Navbar'
import Footer from '../Footer'
const Yuga = () => {
   const cards=[
        {image:magician,width:300},
        {image:witch,width:300},
        {image:war,width:300},
        {image:wiz,width:300},
        {image:mage,width:300},
        {image:sorcerer,width:300},
        {image:master,width:300},
        {image:palladin,width:300},
        {image:sword,width:300},
        {image:charm,width:300},

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

export default Yuga