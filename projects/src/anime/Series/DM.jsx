import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Dm from '../images/DM.jpg'
import muto from '../images/muto-dm.jpg'
import yami from '../images/Yugi yami.webp'
import tea from '../images/tea-dm.jpg'
import joey from '../images/joey-dm.webp'
import kaiba from '../images/kaiba-dm.webp'
import mokuba from '../images/Mokuba_Kaiba.webp'
const DM = () => {
  const Characters=[
    {image:muto ,width:700,name:"Yugi Muto"},
    {image:yami ,name:"Yami Yugi"},
    {image:tea ,name:"Tea Gardener" },
    {image:joey ,width:1000,name:"Joey Wheeler" },
    {image:kaiba ,name:"Kaiba" },
    {image:mokuba ,name:"Mokuba Kaiba" },
  ]
  return (
    <div className='bg-slate-900  min-h-screen'>
        <Navbar/>
       <div className='bg-gradient-to-br from-yellow-900 via-amber-800 to-zinc-900 text-white min-h-screen p-6'>
  <div className='flex flex-col lg:flex-row gap-6 items-center'>
    <img src={Dm} alt="Yu-Gi-Oh Duel Monsters" width={900} className='rounded-xl shadow-2xl mt-20 border-4 border-yellow-500' />
    
    <div className='flex-1'>
      <h2 className='text-3xl font-bold text-center bg-yellow-700 text-black p-3 rounded mb-4 shadow-lg'>
        Yu-Gi-Oh! Duel Monsters
      </h2>
      
      <div className='text-lg leading-relaxed space-y-4 text-white'>
        <p>
          In this series, <strong>Yugi Muto</strong> solves the Millennium Puzzle, releasing the spirit of the ancient Pharaoh,
          known as <strong>Yami Yugi</strong>. Together, they seek to uncover Yami's forgotten past. Their ace card is the iconic <strong>Dark Magician</strong>.
        </p>

        <p>
          <strong>Seto Kaiba</strong>, the CEO of KaibaCorp and Yugi's eternal rival, also possesses an ancient past. 
          Their battles echo those from thousands of years ago. Yugi’s Millennium Puzzle and Kaiba’s Millennium Rod connect them to their former lives.
          Their signature monsters, <strong>Dark Magician</strong> and <strong>Blue-Eyes White Dragon</strong>, reflect their ancient bond.
        </p>

        <p>
          <strong>Yami Yugi</strong> wields the three legendary Egyptian God Cards: <strong>Slifer the Sky Dragon</strong>, 
          <strong>Obelisk the Tormentor</strong>, and <strong>The Winged Dragon of Ra</strong>. Kaiba temporarily controls Obelisk, while <strong>Marik</strong> uses Ra.
        </p>
      </div>
    </div>
  </div>
</div>

        <div className="p-4 bg-violet-50">
  <h2 className="text-3xl text-center font-bold bg-yellow-700 text-white py-3 rounded-t-xl shadow-md">
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

export default DM