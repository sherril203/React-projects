import React from 'react'
import road from '../cards/transamuroad rainac.jpg'
import power from '../cards/transamu_power_rainac.jpg'
import velgr from '../cards/transamuvelgr rainac.jpeg'
import over from '../cards/transamu_rainac_overwrite.jpg'
import dark from '../cards/Darkness Galactica Oblivion.png'
import amne from '../cards/galactica_amnesia.jpg'
import galaxy from '../cards/Galactica Oblivion.png'
import tabula from '../cards/Galactica Tabula Rasa.png'
import rainac from '../cards/transamu Rainac.jpg'
import eternal from '../cards/eternal_galactica_oblivion.jpg'
import Navbar from '../Navbar'
import Footer from '../Footer'
const Yudias = () => {
   const cards=[
        {image:rainac,width:300},
        {image:road,width:300},
        {image:power,width:300},
        {image:over,width:300},
        {image:velgr,width:300},
        {image:galaxy,width:300},
        {image:dark,width:300},
        {image:eternal,width:300},
        {image:tabula,width:300},
        {image:amne,width:300},

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

export default Yudias