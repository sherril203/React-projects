import React from 'react'
import muto from './images/muto-dm.jpg'
import yami from './images/Yugi yami.webp'
import jaden from './images/Jaden.webp'
import play from './images/Playmaker.jpg'
import fudo from './images/yuesi.webp'
import yuma from './images/Yuma.webp'
import yuya from './images/yuya.webp'
import yuga from './images/Yuga.jpg'
import yudias from './images/yudias.webp'
import kaiba from './images/kaiba-dsod.webp'
const Protagonist = () => {
    const protagonist=[
        {image:muto,name:"Yugi Muto",series:"Yugioh Duel Monsters & Dark Side Of Dimensions",width:470},
        {image:yami,name:"Yami Yugi",series:"Yugioh Duel Monsters",width:470},
        {image:kaiba,name:"Kaiba",series:"Yugioh Dark Side of Dimensions",width:470},
        {image:jaden,name:"Jaden Yuki",series:"Yugioh GX",width:470},
        {image:fudo,name:"Yusei Fudo",series:"Yugioh 5Ds",width:420},
        {image:yuma,name:"Yuma Tsukumo",series:"Yugioh Zexal",width:470},
        {image:yuya,name:"Yuya Sakaki",series:"Yugioh Arc-V",width:470},
        {image:play,name:"Playmaker",series:"Yugioh Vrains",width:470},
        {image:yuga,name:"Yuga Ohdo",series:" Yugioh Sevens",width:470},
        {image:yudias,name:"Yudias",series:"Yugioh Go Rush",width:470}
    ]
  return (
    <div className='bg-indigo-500 p-2 '>
        <h2 className='text-center text-2xl font-bold text-white'>Protagonist</h2>
        <div className='grid grid-cols-4 gap-2 p-2'>
            {
             protagonist.map((items, index) => {
             return (
            <div key={index} className='bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300'>
             <img src={items.image} alt={items.name} className='w-full h-56  object-cover' width={items.width} />
             <h2 className='text-2xl text-center font-bold hover:text-violet-600 transition'>{items.name}</h2>
             <h2 className='text-xl text-center '>{items.series}</h2>
        </div>
      );
    })
  }
          </div>
    </div>
  )
}

export default Protagonist