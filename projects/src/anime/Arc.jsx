import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import yuto from './images/yuto.jpg'
import yuya from './images/yuya.webp'
import lulu from './images/lulu.webp'
import arc from './images/Arc-V.jpg'
import yuzu from './images/yuzu.webp'
import yugo from './images/yugo.webp'
import yuri from './images/yuri.webp'
import rin from './images/rin.jpg'
import celina from './images/celina.jpg'
import reji from './images/reji.webp'
const Arc = () => {
  const Characters=[
    {image:yuya,name:"Sakaki Yuya" ,width:1000},
    {image:yuto,name:" Yuto"},
    {image:yugo,name:"Yugo" },
    {image:yuri,name:"Yuri" ,width:1000},
    {image:yuzu,name:"Yuzu" },
    {image:lulu,name:"Lulu" },
    {image:rin,name:"Rin" },
    {image:celina,name:"Celina" },
    {image:reji,name:"Akaba Reji" }
  ]
  return (
    <div className='bg-slate-900  min-h-screen'>
        <Navbar/>
<div className='bg-gradient-to-br from-fuchsia-800 via-violet-700 to-blue-900 text-white min-h-screen p-6'>
  <div className='flex flex-col lg:flex-row gap-6 items-start'>
    <img src={arc} alt="Yugioh Arc-V" width={1000} className='rounded-xl shadow-2xl border-4 mt-40 border-fuchsia-500' />
    
    <div className='flex flex-col max-w-2xl mt-50'>
      <h2 className='text-3xl font-bold text-center bg-violet-600 text-white p-3 rounded mb-4 shadow-lg'>
        Yu-Gi-Oh! Arc-V
      </h2>
      
      <div className='text-lg leading-relaxed space-y-4'>
        <p>
          In this series, the world is divided into four unique dimensions: <strong>Xyz (Heartland)</strong>,
          <strong> Synchro (New Domino City)</strong>, <strong>Fusion (Academia)</strong>, and <strong>Pendulum (Miami)</strong>.
        </p>
        <p>
          <strong>Akaba Reiji</strong> is the founder of Leo Duel School, where duelists are trained in advanced summoning methods like <strong>Xyz</strong>, <strong>Synchro</strong>, and <strong>Fusion</strong>.
        </p>
        <p>
          <strong>Sakaki Yuya</strong>, the main protagonist, wields <strong>Odd-Eyes Pendulum Dragon</strong>.
          He and <strong>Yuzu</strong> have counterparts across dimensions. Yuya’s are <strong>Yuto</strong>, <strong>Yugo</strong>, and <strong>Yuri</strong>,
          each possessing a unique dragon that merges into the fearsome <strong>Z-ARC</strong>.
          Yuzu’s counterparts—<strong>Lulu</strong>, <strong>Celina</strong>, and <strong>Rin</strong>—each bear mysterious bracelets with hidden powers.
        </p>

        <p>
          <strong>Akaba Leo</strong>, Reiji’s father and the antagonist from the Fusion Dimension, seeks to revive <strong>Ray Akaba</strong>
          by capturing the bracelet girls through <strong>Yuri</strong> and ultimately defeating <strong>Z-ARC</strong> using four legendary cards.
        </p>
      </div>
    </div>
  </div>
</div>



        <div className="p-4 bg-violet-50">
  <h2 className="text-3xl text-center font-bold bg-violet-600 text-white py-3 rounded-t-xl shadow-md">
    Characters
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
    {Characters.map((items, index) => (
      <div
        key={index}
        className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
      >
        <img
          src={items.image}
          alt={items.name}
          width={items.width}
          className="w-full h-56 object-cover"
        />
        <h2 className="text-lg font-semibold text-center text-gray-800 py-2">
          {items.name}
        </h2>
      </div>
    ))}
  </div>
</div>

        <Footer/>
    </div>
  )
}

export default Arc