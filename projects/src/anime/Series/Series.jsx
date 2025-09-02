import React from 'react'
import Zexal from '../images/Zexal.jpg'
import Vrains from '../images/Vrains.jpg'
import Arc from '../images/Arc-V.jpg'
import Ds from '../images/5DS.jpg'
import gx from '../images/GX.jpg'
import Dm from '../images/DM.jpg'
import dsod from '../images/DSOD.webp'
import sevens from '../images/sevens.jpg'
import go from '../images/go rush.webp'
import { Link } from 'react-router'
const Series = () => {
    const series=[
        {image:Dm,name:"Yugioh Duel Monsters", path:"/Series/dm"},
        {image:dsod,name:"Yugioh Dark Side of Dimensions",path:"/Series/dsod"},
         {image:gx,name:"Yugioh GX", path:"/Series/gx"},
          {image:Ds,name:"Yugioh 5D's" ,path:"/Series/synchro"},
         {image:Zexal,name:"Yugioh Zexal",path:"/Series/zexal"},
          {image:Arc,name:"Yugioh Arc-V",path:"/Series/arc"},
          {image:Vrains,name:"Yugioh Vrains", path:"/Series/vrains"},
        {image:sevens,name:"Yugioh Sevens", path:"/Series/sevens"},
        {image:go,name:"Yugioh Go Rush",path:"/Series/rush"}
    ]
  return (
  <div className="bg-violet-700 min-h-screen py-4">
  <h1 className="text-center text-3xl text-white font-bold mb-6">Series</h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
    {series.map((item, index) => (
      <div
        key={index}
        className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300"
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-48 object-cover"
        />
        <h2 className="text-center text-lg font-semibold text-gray-800 py-2">
          <Link to={item.path} className="hover:text-violet-600 transition">
            {item.name}
          </Link>
        </h2> 
      </div>
    ))}
  </div>
</div>
  )
}

export default Series