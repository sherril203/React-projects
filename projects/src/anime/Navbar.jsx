import React from 'react'
import { Link } from 'react-router'
import { useNavigate } from 'react-router';
import { CgGames } from 'react-icons/cg';
import { TbHome } from "react-icons/tb";
const Navbar = () => {
    const navigate = useNavigate();

  const handleChange = (event) => {
    const value = event.target.value;
    if (value) {
      navigate(value);
    }
    else{
      alert("page not found")
    }
  };
  return (
    <div className=' bg-gradient-to-r from-pink-500 via-red-400 to-orange-400 p-2 text-white font-semibold'>
      <div className='relative flex flex-row gap-70 '>
        <h1 className='font-bold mb-4 my-6 gap-120 text-2xl '>World of Yugioh</h1>
         <nav className=' absolute left-0 top-0 right-0 gap-3 p-3 my-2'>
            <ul className='list-none flex flex-row justify-center items-center gap-6'>
                <li className='text hover:bg-violet-600 rounded text-xl px-2 py-1 flex flex-row gap-1'><TbHome size={24}/><Link to={"/Mainpage"}>Home</Link> </li>
                <li className='text hover:bg-violet-600 rounded text-xl px-2 py-1'><Link to={"/AboutWeb"}>About</Link></li>
                <li className='hover:bg-violet-600 rounded text-xl px-2 py-1'>
                  <select onChange={handleChange} className=' px-1 py-1 rounded'>
                  <option value="" className='text-gray-600'>Series</option>
                  <option value="/Series" className='text-gray-600'>Series Overview</option> 
                  <option value="/Series/Dm"  className='text-gray-600'>Yugioh DM</option>
                  <option value="/Series/dsod" className='text-gray-600'>Yugioh DSOD</option>
                  <option value="/Series/gx" className='text-gray-600'>Yugioh GX</option>
                  <option value="/Series/Synchro" className='text-gray-600'>Yugioh 5Ds</option>
                  <option value="/Series/Zexal" className='text-gray-600'>Yugioh Zexal</option>
                  <option value="/Series/Arc" className='text-gray-600'>Yugioh Arc-V</option>
                  <option value="/Series/vrains" className='text-gray-600'>Yugioh Vrains</option>
                  <option value="/Series/sevens" className='text-gray-600'>Yugioh Sevens</option>
                  <option value="/Series/rush" className='text-gray-600'>Yugioh Go Rush</option>
  </select>
</li>

                <li className='text hover:bg-violet-600 rounded text-xl px-2 py-1'><Link to={"/ProNav"}>Protagonist</Link></li>
                <li className='text hover:bg-violet-600 rounded text-xl px-2 py-1'><Link to={"/decks"}>Decks</Link></li>
                 <li className='text hover:bg-violet-600 rounded text-xl px-2 py-1 flex flex-row gap-1'> < CgGames size={30}/><select onChange={handleChange}>
                  <option value="" className='text-gray-600'>Games</option>
                  <option value="" className='text-gray-600'>Yugioh Duel Links</option> 
                  <option value="" className='text-gray-600'>Yugioh Master Duel</option></select></li>
            </ul>
        </nav>
      </div>
       
    </div>
  )
}

export default Navbar