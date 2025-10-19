import React from 'react'

export default function Footer() {
  return (
    <footer className="py-6 text-center text-gray-400 border-t border-white/10 mt-12 bg-black/30">
      © {new Date().getFullYear()} Antônio Vítor — All rights reserved.
    </footer>
  )
}
