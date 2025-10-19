import React from 'react'
import { Link } from 'react-scroll'

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-azul-cosmo">Antônio Vítor</h1>
        <ul className="flex gap-8 text-gray-200 font-medium">
          {['home', 'skills', 'projects', 'certificates'].map((item) => (
            <li key={item}>
              <Link
                to={item}
                smooth={true}
                duration={600}
                offset={-70}
                className="cursor-pointer hover:text-azul-cosmo transition"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
