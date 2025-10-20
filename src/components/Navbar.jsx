import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <img src='logos/avb_logo.png' className="h-8 md:h-10 w-auto" alt="Logo" />
        
        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-6 lg:gap-8 text-gray-200 font-medium">
          {['home', 'skills', 'projects', 'certificates'].map((item) => (
            <li key={item}>
              <Link
                to={item}
                smooth={true}
                duration={600}
                offset={-70}
                className="relative cursor-pointer hover:text-azul-cosmo transition-all duration-300 group font-semibold text-sm lg:text-base"
              >
                <span className="relative z-10">
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-azul-cosmo transition-all duration-300 group-hover:w-full origin-left"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Botão Menu Mobile */}
        <button
          className="md:hidden text-gray-200 hover:text-azul-cosmo transition-colors duration-300 p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>

        {/* Menu Mobile */}
        <div className={`
          fixed top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-md z-40
          transition-all duration-300 ease-in-out
          ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}>
          <div className={`
            flex flex-col items-center justify-center h-full space-y-8
            transition-all duration-500 ease-in-out
            ${isMenuOpen ? 'translate-y-0' : 'translate-y-8'}
          `}>
            {['home', 'skills', 'projects', 'certificates'].map((item) => (
              <Link
                key={item}
                to={item}
                smooth={true}
                duration={600}
                offset={-70}
                onClick={closeMenu}
                className="text-2xl font-bold text-gray-200 hover:text-azul-cosmo 
                         transition-all duration-300 cursor-pointer py-2 px-6
                         transform hover:scale-110"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
          </div>

          {/* Botão Fechar Mobile */}
          <button
            className="absolute top-6 right-6 text-gray-200 hover:text-azul-cosmo 
                     transition-colors duration-300 p-2"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <FaTimes size={24} />
          </button>
        </div>
      </nav>
    </header>
  )
}