import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import play from './images/Playmaker.jpg'
import ai from './images/A.I.webp'
import soul from './images/soulburner.webp'
import flame from './images/flame ignis.webp'
import blue from './images/blue madien.webp'
import aqua from './images/Aqua_ignis.webp'
import varis from './images/varis.webp'
import earth from './images/earth ignis.webp'
import wind from './images/windy ignis.webp'
import light from './images/lighting ignis.webp'
import boh from './images/Bohman.webp'
import human from './images/ai (human form).jpg'
import vrains from './images/Vrains.jpg'
const Vrains = () => {
  const Characters=[
    {image:play,name: 'Playmaker(Yusaku Fujiki)' },
    {image:ai,name: 'A.I' },
    {image:soul,name: 'Soulburner(Theodore Hamilton)' },
    {image:flame,name: 'Flame' },
    {image:blue,name: 'Blue Maiden(Aoi Zaizen)' },
    {image:aqua,name: 'Aqua' },
    {image:varis,name: 'Varis' },
    {image:earth,name: 'Earth' },
    {image:wind,name: 'Windy' },
    {image:light,name: 'lighting' },
    {image:boh,name: 'Bohman' },
    {image:human,name: 'Ai(Human form)' },

  ]
  return (
    <div className='bg-slate-900  min-h-screen'>
        <Navbar/>
<div className="bg-gradient-to-br from-blue-900 via-cyan-800 to-gray-900 text-white min-h-screen p-6">
  <div className="flex flex-col lg:flex-row gap-6 items-center">
    <img
      src={vrains}
      alt="Yu-Gi-Oh! VRAINS"
      width={900}
      className="rounded-xl shadow-2xl border-4 mt-45 border-cyan-400"
    />

    <div className="flex-1">
      <h2 className="text-3xl font-bold text-center bg-cyan-700 text-white p-3 rounded-md mb-4 shadow-lg">
        Yu-Gi-Oh! VRAINS
      </h2>

      <div className="text-lg leading-relaxed space-y-4 text-white-100">
        <p>
          In <strong>Yu-Gi-Oh! VRAINS</strong>, the main protagonist is <strong>Playmaker</strong>, known as <strong>Yusaku Fujiki</strong>.
          A survivor of the <em>Lost Incident</em>, Yusaku was one of several children forced to duel in isolation, leaving lasting trauma and a thirst for justice.
        </p>

        <p>
          He partners with an A.I. named <strong>Ai</strong>, also known as the Dark Ignis, as they fight together in the virtual reality world of <strong>LINK VRAINS</strong> against cyber threats.
        </p>

        <p>
          Other key characters include <strong>Soulburner</strong> and <strong>Blue Maiden</strong>, who also bond with Ignis entities and face powerful digital enemies.
        </p>

        <p>
          The series climaxes with battles against <strong>Varis</strong>, <strong>Bohman</strong>, and finally <strong>Ai</strong> himself in his final human form.
        </p>
      </div>
    </div>
  </div>
</div>





        <div className="p-4 bg-violet-50">
  <h2 className="text-3xl text-center font-bold  bg-cyan-700 text-white py-3 rounded shadow-md">
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
export default Vrains