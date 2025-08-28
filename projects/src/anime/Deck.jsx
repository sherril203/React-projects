import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link,  } from 'react-router';

const Deck = () => {
  const decks = [
  { name: 'Yugi Muto', path: '/deck/muto' },
  { name: 'Yugi Yami', path: '/deck/yami' },
  { name: 'Kaiba', path: '/deck/kaiba' },
  { name: 'Jaden Yuki', path: '/deck/yuki' },
  { name: 'Yuesi Fudo', path: '/deck/yuesi' },
  { name: 'Yuma', path: '/deck/yuma' },
  { name: 'Sakaki Yuya', path: '/deck/yuya' },
  { name: 'Playmaker', path: '/deck/play' },
  { name: 'Yuga Ohdo', path: '/deck/yuga' },
  { name: 'Yudias', path: '/deck/yudias' },
];
  return (
    <div className='bg-amber-400'>
      <Navbar />
      <div className='bg-emerald-400 p-4'>
        <h2 className='text-center text-3xl font-bold'>The deck of Protagonist</h2>
        <h2 className='text-center text-2xl'>
          It includes special cards like Egyptian Gods, Signer Dragons, Number Cards, Pendulum, and Maximum
        </h2>
      </div>
      <h2 className='text-center font-bold text-2xl p-3'>Decks</h2>
      <div className='grid grid-cols-4 p-2 gap-3'>
        {decks.map(({ name, path }) => (
  <div key={name} className='bg-white rounded font-bold text-center text-2xl p-10 hover:bg-yellow-200 cursor-pointer'>
    <Link to={path}>{name}</Link>
  </div>
))}
      </div>

      <Footer />
    </div>
  );
};

export default Deck;
