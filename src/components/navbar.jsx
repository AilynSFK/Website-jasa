import React, { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Tentang', href: '#about' },
  { label: 'Produk', href: '#products' },
  { label: 'Keunggulan', href: '#why' },
  { label: 'Ulasan', href: '#testimonial' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-[5%] transition-shadow duration-300 ${
        scrolled ? 'shadow-sm' : ''
      }`}
      style={{
        background: 'rgba(255,248,242,0.92)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid #F9C9A8',
      }}
    >
      <div className="max-w-[1100px] mx-auto flex items-center justify-between h-16">
        {/* Logo */}
        <div className="font-display text-2xl font-bold tracking-tight text-peach-300">
          Sweet<span className="text-brand-mid">ly</span> 🍪
        </div>

        {/* Links */}
        <ul className="hidden md:flex gap-7 list-none p-0 m-0">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-medium text-brand-text hover:text-peach-300 transition-colors no-underline">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

          {/* CTA */}
        <a href="#contact">
          <button className="btn-primary text-sm px-5 py-2">
            Pesan Sekarang
          </button>
        </a>

      </div>
    </nav>
  )
}