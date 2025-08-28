import React from 'react'
import yuesi from './images/yuesi.webp'
import aki from './images/akiza.jpg'
import jack from './images/Jack Atlas.webp'
import ll from './images/leo and luna.webp'
import crow from './images/crow.jpg'
import Navbar from './Navbar'
import Footer from './Footer'
import Ds from './images/5DS.jpg'
const Synchro = () => {
  const Characters=[
      {image:yuesi,name:"Yuesi Fudo" },
      {image:aki,name:"Izayoi Aki"},
      {image:jack,name:"Jack Atlas" },
      {image:ll,name:"Leo and Luna"},
      {image:crow,name:"Crow Hogan" },
    ]
  return(
  <div className='bg-slate-900  min-h-screen'>
        <Navbar/>
       <div className='bg-gradient-to-br from-gray-900 via-slate-800 to-black text-white min-h-screen p-6'>
  <div className='flex flex-col lg:flex-row gap-6 items-center'>
    <img src={Ds} alt="Yu-Gi-Oh 5D's" width={800} className='rounded-xl shadow-2xl border-4 mt-30 border-slate-600' />
    
    <div className='flex-1'>
      <h2 className='text-3xl font-bold text-center bg-slate-700 text-white p-3 rounded-md mb-4 shadow-lg'>
        Yu-Gi-Oh! 5D’s
      </h2>
      
      <div className='text-lg leading-relaxed space-y-4'>
        <p>
          <strong>Yusei Fudo</strong> is the protagonist of 5D’s, a series set in a dystopian, technologically advanced future where dueling takes place on high-speed motorcycles called <strong>D-Wheels</strong>.
        </p>
        
        <p>
          He and his friends are chosen by the <strong>Crimson Dragon</strong> to become <strong>Signers</strong>, each marked with a unique symbol and connected to one of the <strong>Signer Dragons</strong>, including Yusei’s ace: <strong>Stardust Dragon</strong>.
        </p>

        <p>
          Although there are originally five Signers, <strong>Leo</strong> becomes the <strong>sixth Signer</strong> after risking his life to protect his sister <strong>Luna</strong>.
        </p>

        <p>
          The final arc introduces <strong>Z-one</strong>, a mysterious antagonist with a similar appearance to Yusei, leading to a climactic battle for the fate of the future.
        </p>
      </div>
    </div>
  </div>
</div>

       <div className="p-4 bg-violet-50">
  <h2 className="text-3xl text-center font-bold bg-slate-700 text-white py-3 rounded shadow-md">
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
    </div>)
}

export default Synchro