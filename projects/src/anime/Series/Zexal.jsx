import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import zexal from '../images/Zexal.jpg'
import yuma from '../images/Yuma.webp'
import girag from '../images/girag.webp'
import dumon from '../images/dumon.webp'
import alito from '../images/alito-barian.webp'
import astral from '../images/astral.jpg'
import kite from '../images/Kite_Tenjo.webp'
import Mizar from '../images/mizar.webp'
import shark from '../images/shark.png'
import rio from '../images/rio.jpg'
import vector from '../images/Ray-barian.webp'
const Zexal = () => {
  const Characters=[
    {image:yuma ,  name:'Yuma Tsukumo'},
    {image:astral ,  name:'Astral'},
    {image:shark , name:'Shark Rginark'},
    {image:rio , name:'Rio Reginark'},
    {image:girag , width:1000, name:'Girag'},
    {image:alito ,  name:'Alito'},
    {image:vector , width:1000, name:'Vector'},
    {image:Mizar , width:900, name:'Mizar'},
    {image:dumon , width:1000, name:'Dumon'},
    {image:kite , name:'Kite'},
  ]
 return (
    <div className='bg-slate-900  min-h-screen '>
        <Navbar/>
      <div className='bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white min-h-screen p-6'>
  <div className='flex flex-col lg:flex-row gap-6 items-center'>
    <img src={zexal} alt="Yu-Gi-Oh Zexal" width={900} className='rounded-xl shadow-2xl border-4 mt-20  border-indigo-500' />
    
    <div className='flex-1'>
      <h2 className='text-3xl font-bold text-center bg-indigo-700 text-white p-3 rounded mb-4 shadow-lg'>
        Yu-Gi-Oh! ZEXAL
      </h2>
      
      <div className='text-lg leading-relaxed space-y-4 text-white'>
        <p>
          In this series, <strong>Yuma Tsukumo</strong> discovers a mysterious golden key that releases <strong>Astral</strong>,
          a being from another world. Their mission is to collect all the scattered <strong>Number Cards</strong> before they fall into the hands of evil.
          Their ace card is the iconic <strong>Number 39: Utopia</strong>.
        </p>

        <p>
          The main conflict centers on the battle between <strong>Astral</strong> and <strong>Don Thousand</strong>,
          the ruler of the <strong>Barian World</strong>. He commands seven <strong>Barian Emperors</strong>,
          each possessing powerful Numbers over 100.
        </p>

        <p>
          Together, <strong>Yuma</strong> and <strong>Astral</strong> must defeat the Barian Emperors and
          <strong> Don Thousand</strong> to protect both worlds from annihilation.
        </p>
      </div>
    </div>
  </div>
</div>

       <div className="p-4 bg-violet-50">
  <h2 className="text-3xl text-center font-bold bg-indigo-700 text-white py-3 rounded-t-xl shadow-md">
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

export default Zexal