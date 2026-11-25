import { GraduationCap, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <a className="brand" href="#accueil" aria-label="Forma accueil">
        <span className="brand-mark"><GraduationCap size={22} /></span>
        <span>forma<span className="brand-dot">.</span></span>
      </a>
      <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Ouvrir le menu">
        {menuOpen ? <X /> : <Menu />}
      </button>
      <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
        <a href="#accueil" onClick={() => setMenuOpen(false)}>Accueil</a>
        <a href="#formations" onClick={() => setMenuOpen(false)}>Formations</a>
        <a href="#apropos" onClick={() => setMenuOpen(false)}>À propos</a>
        <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Nous contacter <span>↗</span></a>
      </nav>
    </header>
  )
}