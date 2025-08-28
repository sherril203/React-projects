import React from 'react';
import Navbar from './Navbar'
import Footer from './Footer'
import Skull from './cards/Summoned Skill.jpeg'
import DarkMag from './cards/Dark Magician.jpeg'
import Girl from './cards/DarkMagicianGirl.png'
const Muto = () => {
    const data=[
        {image: DarkMag,width:300},
        {image: Girl ,width:300},
        {image: Skull,width:300},
    ]
  return (
    <div className=' bg-slate-900 text-white'>
        <Navbar/>
        <div className=' p-3'>
             <h2 className='text-center font-bold text-2xl p-3'>Cards</h2>
            <div className='grid grid-cols-6 gap-1'>
               {
                data.map((item)=>{
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

export default Muto