import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Quantum from '../cards/Cyberse Quantum Dragon.jpeg'
import Clock from '../cards/Cyberse Clock Dragon.jpg'
import Magician from '../cards/Cyberse Magician.jpg'
import wickid from '../cards/Cyberse Wickid.webp'
import wizard from '../cards/Cyberse Wizard.jpeg'
import slayer from '../cards/Linkslayer.jpeg'
const Playmaker = () => {
    const cards=[
        {image:slayer ,width:300},
        {image:wizard,width:300},
        {image:Magician,width:300},
        {image:Clock,width:300},
        {image:Quantum,width:300},
        {image:wickid,width:300},
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

export default Playmaker