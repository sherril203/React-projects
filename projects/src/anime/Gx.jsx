import React from 'react'
import jaden from './images/Jaden.webp'
import Navbar from './Navbar'
import Footer from './Footer'
import gx from './images/GX.jpg'
import alex from'./images/alexis.webp'
import yubel from './images/Yubel_GX.jpg'
import zane from'./images/Zane-Truesdale.jpg'
import syrus from './images/Syrus_Truesdale.webp'
import king from './images/supreme king.jpg'
import aster from './images/Aster.webp'
import bastion from './images/bastion.webp'
import jesse from './images/jesse.webp'
import chaz from './images/chaz.webp'
const Gx = () => {
  const Characters=[
    {image:jaden,name: 'Jaden Yuki' },
    {image:yubel,name: 'Yubel' },
    {image:king,name: 'Supreme King' },
    {image:chaz,name: 'Chazz Princeton' },
    {image:bastion,name: 'Bastion Misawa' },
    {image:alex,name: 'Alexis Rhodes' },
    {image:zane,name: 'Zane Truesdale' },
    {image:syrus,name: 'Syrus Truesdale' },
    {image:aster,name: 'Aster Phoenix' },
    {image:jesse,name: 'Jesse Anderson' },

  ]
  return (
    <div className='bg-slate-900  min-h-screen'>
        <Navbar/>
        <div className='bg-gradient-to-br from-rose-900 via-purple-900 to-black text-white min-h-screen p-6'>
  <div className='flex flex-col lg:flex-row gap-6 items-center'>
    <img src={gx} alt="Yu-Gi-Oh GX" width={1000} className='rounded-xl shadow-2xl border-4 mt-37 border-rose-500' />
    
    <div className='flex-1'>
      <h2 className='text-3xl font-bold text-center bg-rose-700 text-white p-3 rounded mb-4 shadow-lg'>
        Yu-Gi-Oh! GX
      </h2>
      
      <div className='text-lg leading-relaxed space-y-4'>
        <p>
          <strong>Jaden Yuki</strong> (Judai Yuki) is the protagonist who uses an <strong>Elemental HERO</strong> deck.
          His signature cards include <strong>Elemental HERO Neos</strong> and <strong>Flame Wingman</strong>.
          Through <strong>Contact Fusion</strong>, he summons powerful Neo-Spacians without Fusion Spells.
        </p>

        <p>
          Jaden also becomes possessed by the <strong>Supreme King</strong>, using a corrupted deck of <strong>Evil HERO</strong> monsters.
          He shares a deep bond with <strong>Yubel</strong>, a spirit from his past life.
        </p>

        <p>
          <strong>Aster Phoenix</strong> (Edo Phoenix) is another key duelist who uses the <strong>Destiny HERO</strong> deck.
          His ace card is <strong>D-HERO Plasma</strong>.
        </p>

        <p>
          Characters like <strong>Jaden</strong>, <strong>Jesse Anderson</strong>, and <strong>Chazz Princeton</strong> can communicate with <strong>spirit monsters</strong>, enhancing their bonds and dueling skills.
        </p>
      </div>
    </div>
  </div>
</div>

   <div className="p-4 bg-violet-50">
  <h2 className="text-3xl text-center font-bold bg-rose-700 text-white py-3 rounded shadow-md">
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
export default Gx