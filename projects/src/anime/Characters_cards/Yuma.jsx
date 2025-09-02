import React from 'react'
import n39 from '../cards/N39.jpeg'
import n17  from '../cards/N17.png'
import s39 from '../cards/S39.jpeg'
import victory from '../cards/C39-Utopia Ray Victory.jpg'
import Ray from '../cards/C39-Utopia Ray.jpg'
import barianN39 from '../cards/C39-Utopia Ray V.png'
import Numeron from '../cards/RankUp Magic Numeron Force.webp'
import Astral from '../cards/Rank up Astral Force.jpg'
import BarianRank from '../cards/Rank up magic Barian Limited Force.jpg'
import Navbar from '../Navbar'
import Footer from '../Footer'
const Yuma = () => {
   const cards=[
        {image:n39,width:300},
        {image:n17,width:300},
        {image:s39,width:300},
        {image:victory,width:300},
        {image:Ray,width:300},
        {image:barianN39,width:300},
        {image:Numeron,width:300},
        {image:Astral,width:300},
        {image:BarianRank,width:300}
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

export default Yuma