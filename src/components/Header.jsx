import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-between p-3 px-4 bg-slate-700'>
        <div>LOGO</div>
        <div>
            <ul className='flex gap-6'>
                <NavLink className={({isActive}) => (isActive ? "text-neutral-100" : "")} to="/">Home</NavLink>
                <NavLink className={({isActive}) => (isActive ? "text-neutral-100" : "")} to="/about">About</NavLink>
                <NavLink className={({isActive}) => (isActive ? "text-neutral-100" : "")} to="/contact">Comtact</NavLink>
                <NavLink className={({isActive}) => (isActive ? "text-neutral-100" : "")} to="/blog">Blog</NavLink>
            </ul>
        </div>
        <div><button>Clic</button></div>
    </div>
  )
}

export default Header