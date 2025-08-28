import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import dsod from './images/DSOD.webp'
import kaiba from './images/kaiba-dsod.webp'
import tea from './images/tea-dsod.webp'
import wheeler from './images/JoeyWheeler-DSOD.webp'
import mokuba from './images/mokuba-dsod.webp'
import muto from './images/muto-dsod.webp'
const Dsod = () => {
  const Characters=[
    {image: muto,name: 'Yugi Muto' },
    {image: kaiba,name: 'Seto Kaiba'},
    { image: mokuba,name: 'Mokuba Kaiba' },
     { image: wheeler, name: 'Joey Wheeler'},
     {image: tea,name: 'Téa Gardner'},

  ]
  return (
    <div className='bg-slate-900  min-h-screen'>
        <Navbar/>
        <div className='bg-gradient-to-br from-blue-950 via-indigo-900 to-black text-white min-h-screen p-6'>
  <div className='flex flex-col lg:flex-row gap-6 items-center'>
    <img src={dsod} alt="Yu-Gi-Oh! Dark Side of Dimensions" width={1000} className='rounded-xl shadow-2xl border-4 mt-40
     border-indigo-600' />
    
    <div className='flex-1'>
      <h2 className='text-3xl font-bold text-center bg-indigo-700 text-white p-3 rounded-md mb-4 shadow-lg'>
        Yu-Gi-Oh! The Dark Side of Dimensions
      </h2>
      
      <div className='text-lg leading-relaxed space-y-4'>
        <p>
          In this movie, <strong>Seto Kaiba</strong> seeks to reconstruct the <strong>Millennium Puzzle</strong> in an attempt to challenge and defeat <strong>Yami Yugi</strong> once more.
        </p>
        
        <p>
          Despite being a rival, Kaiba takes center stage as a major protagonist. His unwavering determination and unmatched intellect push the boundaries of science and spirit.
        </p>

        <p>
          Kaiba’s iconic ace card remains the <strong>Blue-Eyes White Dragon</strong>, symbolizing both his power and pride throughout the duel.
        </p>
      </div>
    </div>
  </div>
</div>

        <div className="p-4 bg-violet-50">
  <h2 className="text-3xl text-center font-bold bg-indigo-700 text-white py-3 rounded shadow-md">
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
export default Dsod