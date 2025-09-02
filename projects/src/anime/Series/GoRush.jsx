import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import yudias from '../images/yudias.webp'
import yuhi from '../images/yuhi.jpg'
import yuamu from '../images/yuamu.webp'
import zwijo from '../images/Zwijo.jpg'
import Asaka from '../images/Asaka Mutsuba.webp'
import Manabu from '../images/Manabu Sogetsu.png'
import go from '../images/go rush.webp'

const GoRush = () => {
  const Characters=[
    {image:yudias,name: 'Yudias Velgear' },
    {image:yuhi,name: 'Yuhi Ohdo' },
    {image:yuamu,name: 'Yuamu Ohdo' },
    {image:zwijo,name: 'Zwijo' },
    {image:Asaka,name: 'Asaka Mutsuba' },
    {image:Manabu,name: 'Manabu Sogetsu' }

  ]
  return (
    <div className='bg-slate-900  min-h-screen'>
        <Navbar/>
       <div className='bg-gradient-to-br from-sky-900 via-indigo-900 to-black text-white min-h-screen p-6'>
  <div className='flex flex-col lg:flex-row gap-6 items-center'>
    <img src={go} alt="Yu-Gi-Oh GO RUSH" width={1000} className='rounded-xl shadow-2xl border-4 mt-37 border-sky-500' />
    
    <div className='flex-1'>
      <h2 className='text-3xl font-bold text-center bg-indigo-700 text-white p-3 rounded-md mb-4 shadow-lg'>
        Yu-Gi-Oh! GO RUSH!!
      </h2>
      
      <div className='text-lg leading-relaxed space-y-4'>
        <p>
          <strong>Yudias Velgear</strong>, an alien from the Velgear Star Cluster, arrives on Earth seeking hope for his people. 
          He meets the <strong>Ohdo twins</strong>—<strong>Yuhi</strong> and <strong>Yuamu</strong>—who work at UTS, a group that handles extraterrestrial trouble.
        </p>

        <p>
          Yudias learns <strong>Rush Dueling</strong> and adopts it as a way to communicate and evolve. His ace card is
          <strong> Galactica Oblivion</strong>, a powerful Galaxy-type monster.
        </p>

        <p>
          As the story unfolds, he obtains the <strong>Ritual Spell Card</strong> "<em>Transamu Rainac of Discarmament</em>", enabling
          <strong> Ritual Summons</strong> and evolving his strategy.
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
export default GoRush