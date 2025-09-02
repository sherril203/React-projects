import React from 'react'
import star from '../cards/Stargazar Magician.jpeg'
import time  from '../cards/Timegazer Magician.jpeg'
import Oddeyes from '../cards/Odd Eyes Dragon.jpeg'
import Odd from '../cards/Odd Eyes Pendulum Dragon.jpeg'
import light from '../cards/Enlightment Palladin.jpeg'
import nirvana from '../cards/Nirvana High Palladin.jpeg'
import clear from '../cards/Clear Wing Synchro Dragon.jpeg'
import fusion  from '../cards/Odd Eyes Fusion Gate.jpeg'
import xyz from '../cards/Odd Eyes XYZ Gate.jpeg'
import synchro from '../cards/Odd Eyes Synchro Gate.jpeg'
import wing from '../cards/Odd Eyes Wing Dragon.jpeg'
import saber from '../cards/Odd Eyes Saber Dragon.jpeg'
import rebellion  from '../cards/Odd Eyes Rebellion Dragon.jpeg'
import raging from '../cards/Odd Eyes Raging Dragon.jpeg'
import venom from '../cards/Starving Venom Fusion Dragon.jpeg'
import Beast from '../cards/Beast Eyes Pendulum Dragon.jpeg'
import Brave from '../cards/Brave Eyes Pendulum Dragon.jpeg'
import Venom from '../cards/Odd Eyes Venom Dragon.jpeg'
import Navbar from '../Navbar'
import Footer from '../Footer'
const Yuya = () => {
   const cards=[
        {image:star,width:300},
        {image:time,width:300},
        {image:Oddeyes,width:300},
        {image:Odd,width:300},
        {image:saber,width:300},
        {image:Beast,width:300},
         {image:Brave,width:300},
        {image:light,width:300},
        {image:nirvana,width:300},
        {image:clear,width:300},
        {image:venom,width:300},
        {image:Venom,width:300},
        {image:wing,width:300},
        {image:rebellion,width:300},
        {image:raging,width:300},
        {image:xyz,width:300},
        {image:synchro,width:300},
        {image:fusion,width:300},
        
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

export default Yuya