import React, { useState } from 'react'
import { navLinks } from '../constants';


const NavItems = ({ onItemClick = () => {} }) => {
    return (
    <ul className='nav-ul'>
      {navLinks.map(({id, href, name}) => (
        <li key={id} className='nav-li'>
          <a href={href} className='nav-li_a' 
          onClick={onItemClick}>
            {name}
            </a>  
        </li>
        
      ))}
    </ul>
  )
}
  
const Nav = () => {
  const [isOpen, setIsOpen] =useState(false);
  const toggleMenu = () =>  setIsOpen((prevIsOpen) => !prevIsOpen);
  const closeMenu = () => setIsOpen(false);
  

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm'>
      <div className='max-w-7xl mx-auto'>
        <div className='mx-auto flex items-center justify-between py-4 sm:py-5 c-space'>

          <a href="/" className='text-lg font-bold text-neutral-400 transition-colors hover:text-white sm:text-xl'>
          Nikhil Bhatt</a>

          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none flex sm:hidden"
            aria-label="Toggle Menu">

            <img src={ isOpen ?"/assets/close.svg": "/assets/menu.svg"}
             alt="toggle" 
             className='w-6 h-6' 
             />
          </button>

          <nav className='sm:flex hidden'>
            <NavItems />

          </nav>


        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
      <nav className='p-5'>
        <NavItems onItemClick={closeMenu} />
      </nav>
      </div>
    </header>)
}


export default Nav
