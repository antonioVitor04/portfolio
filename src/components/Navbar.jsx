import React, { useState, useEffect } from 'react'
import { Link, Events } from 'react-scroll'
import { FaBars, FaTimes, FaGlobe } from 'react-icons/fa'
import { useTranslation } from '../contexts/LanguageContext'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isSmoothScrolling, setIsSmoothScrolling] = useState(false)
  const { t, toggleLanguage, language } = useTranslation()

  useEffect(() => {
    const sections = ['home', 'skills', 'projects', 'certificates']
    let ticking = false

    const handleScroll = () => {
      if (isSmoothScrolling || ticking) return
      ticking = true

      requestAnimationFrame(() => {
        const scrollPosition = window.scrollY + 100 // Offset para a navbar
        let currentSection = 'home'

        for (let i = 0; i < sections.length; i++) {
          const section = document.getElementById(sections[i])
          const nextSection = sections[i + 1] ? document.getElementById(sections[i + 1]) : null
          const sectionTop = section?.offsetTop || 0
          const nextSectionTop = nextSection?.offsetTop || (document.documentElement.scrollHeight)

          if (scrollPosition >= sectionTop && scrollPosition < nextSectionTop) {
            currentSection = sections[i]
            break
          }
        }

        setActiveSection(currentSection)
        ticking = false
      })
    }

    // Registrar eventos para smooth scroll
    const handleScrollBegin = (to) => {
      setActiveSection(to)
      setIsSmoothScrolling(true)
    }

    const handleScrollEnd = () => {
      // Pequeno delay para permitir a mudança instantânea sem transição
      setTimeout(() => {
        setIsSmoothScrolling(false)
      }, 50)
    }

    Events.scrollEvent.register('begin', handleScrollBegin)
    Events.scrollEvent.register('end', handleScrollEnd)

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Executa inicialmente

    return () => {
      Events.scrollEvent.remove('begin')
      Events.scrollEvent.remove('end')
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isSmoothScrolling])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const NavLink = ({ to, children, className, mobile = false }) => {
    const isActive = activeSection === to
    const baseClass = mobile 
      ? "text-2xl font-bold nav-link transition-all duration-300 cursor-pointer py-2 px-6 transform hover:scale-110"
      : "relative nav-link cursor-pointer transition-all duration-300 group font-semibold text-sm lg:text-base"

    const colorClass = isActive 
      ? 'text-azul-cosmo' 
      : (mobile ? 'text-gray-200 hover:text-azul-cosmo' : 'text-gray-200 hover:text-azul-cosmo')

    return (
      <Link
        to={to}
        smooth={true}
        duration={600}
        offset={-70}
        onClick={mobile ? closeMenu : undefined}
        className={`${baseClass} ${colorClass} ${className || ''}`}
      >
        {mobile ? (
          children
        ) : (
          <>
            <span className="relative z-10">{children}</span>
            <span 
              className={`absolute bottom-0 left-0 w-0 h-0.5 bg-azul-cosmo transition-all duration-300 origin-left ${
                isActive ? 'w-full' : 'group-hover:w-full'
              }`}
            ></span>
          </>
        )}
      </Link>
    )
  }

  return (
    <header className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <img src='/logos/avb_logo.png' className="h-8 md:h-10 w-auto" alt="Logo" />
        
        {/* Wrapper para Menu Desktop + Toggle (alinhado à direita em telas grandes) */}
        <div className="hidden md:flex items-center gap-8">
          <ul className={`flex gap-6 lg:gap-8 font-medium ${isSmoothScrolling ? 'smooth-scrolling' : ''}`}>
            {['home', 'skills', 'projects', 'certificates'].map((item) => (
              <li key={item}>
                <NavLink to={item}>
                  {t(item.charAt(0).toUpperCase() + item.slice(1))}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Botão Toggle Language - Desktop */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 p-2 text-gray-200 hover:text-azul-cosmo transition-colors duration-300 rounded-full hover:bg-white/10"
            aria-label="Toggle language"
            title="Toggle language"
          >
            <FaGlobe size={18} />
            <span className="text-sm font-medium">{language.toUpperCase()}</span>
          </button>
        </div>

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
              <NavLink key={item} to={item} mobile={true}>
                {t(item.charAt(0).toUpperCase() + item.slice(1))}
              </NavLink>
            ))}
            {/* Botão Toggle Language - Mobile (agora mostra idioma atual) */}
            <button
              onClick={toggleLanguage}
              className="text-lg font-bold text-gray-200 hover:text-azul-cosmo transition-colors duration-300 py-2 px-6 rounded-md hover:bg-white/10"
            >
              {language.toUpperCase()}
            </button>
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