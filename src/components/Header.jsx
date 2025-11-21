import React from 'react'
import { NavLink } from 'react-router-dom'
import abujon from '../img/abujon.png'

const Header = () => {
  return (
    <div className='flex justify-between p-3 px-4 bg-slate-700'>
        <div><img className='w-[50px]' src={abujon} alt="" /></div>
        <div>
            <ul className='flex gap-6'>
                <NavLink className={({isActive}) => (isActive ? "text-neutral-100" : "")} to="/">Home</NavLink>
                <NavLink className={({isActive}) => (isActive ? "text-neutral-100" : "")} to="/about">About</NavLink>
                <NavLink className={({isActive}) => (isActive ? "text-neutral-100" : "")} to="/contact">Comtact</NavLink>
                <NavLink className={({isActive}) => (isActive ? "text-neutral-100" : "")} to="/blog">Blog</NavLink>
            </ul>
        </div>
        <div><button className='w-[200px] p-2 hover:bg-cyan-950 hover:text-amber-50 rounded-md bg-cyan-100 '>Clic</button></div>
    </div>
  )
}

export default Header