import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import nail from './images/Nail Saionji.webp'
import roa from './images/Roa Kassidy.webp'
import rom from './images/Romin Kassidy.webp'
import luke from './images/luke kallister.webp'
import yuga from './images/Yuga.jpg'
import gav from './images/Gavin sogetsu.webp'
import asa from './images/Asaka Mutsuba.webp'
import sevens from './images/sevens.jpg'
const Sevens = () => {
  const Characters=[
    {image:yuga,name: 'Yuga Ohdo' },
    {image:luke,name: 'Luke Kallister' },
    {image:gav,name: 'Gavin Sogetsu' },
    {image:rom,name: 'Romin Kassidy' },
    {image:asa,name: 'Asana Mutsuba' },
    {image:roa,name: ' Roa Kassidy' },
    {image:nail,name: 'Nail Saionji' }

  ]
  return (
    <div className='bg-slate-900  min-h-screen'>
        <Navbar/>
       <div className='bg-gradient-to-br from-yellow-700 via-orange-800 to-red-900 text-white min-h-screen p-6'>
  <div className='flex flex-col lg:flex-row gap-6 items-center'>
    <img src={sevens} alt="Yu-Gi-Oh SEVENS" width={1000} className='rounded-xl shadow-2xl border-4 mt-40 border-yellow-400' />
    
    <div className='flex-1'>
      <h2 className='text-3xl font-bold text-center bg-red-700 text-white p-3 rounded-md mb-4 shadow-lg'>
        Yu-Gi-Oh! SEVENS
      </h2>
      
      <div className='text-lg leading-relaxed space-y-4'>
        <p>
          <strong>Yuga Ohdo</strong>, a 5th-grade inventor, is frustrated with the restrictive nature of standard dueling.
          To reignite excitement, he creates <strong>Rush Dueling</strong>, a fast-paced and creative dueling format.
        </p>

        <p>
          His ace monster is <strong>Sevens Road Magician</strong>. Yuga and his friends—<strong>Luke, Gakuto,</strong> and <strong>Romin</strong>—
          spread Rush Duels across Goha City, but soon face opposition from the <strong>Goha Corporation</strong>.
        </p>

        <p>
          The series introduces new mechanics like <strong>Fusion Summons</strong> and <strong>Maximum Summons</strong>.
          <strong>Otes</strong>, a mysterious villain, challenges the heroes using legendary cards like <strong>Dark Magician</strong>,
          <strong> Blue-Eyes White Dragon</strong>, and <strong>Red-Eyes Black Dragon</strong>.
        </p>
      </div>
    </div>
  </div>
</div>

        <div className="p-4 bg-violet-50">
  <h2 className="text-3xl text-center font-bold bg-red-700 text-white py-3 rounded shadow-md">
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
export default Sevens