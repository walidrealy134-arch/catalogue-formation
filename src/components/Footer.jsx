import { GraduationCap, Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-main">
        <div className="footer-brand"><a className="brand" href="#accueil"><span className="brand-mark"><GraduationCap size={22} /></span><span>forma<span className="brand-dot">.</span></span></a><p>Les bonnes compétences ouvrent<br />de nouvelles possibilités.</p></div>
        <div className="footer-contact"><h4>Contact</h4><span><Mail size={16} /> contact@forma.ma</span><span><Phone size={16} /> +212 6 00 00 00 00</span><span><MapPin size={16} /> Casablanca, Maroc</span></div>
        <div className="footer-links"><h4>Navigation</h4><a href="#accueil">Accueil</a><a href="#formations">Formations</a><a href="#apropos">À propos</a></div>
      </div>
      <div className="footer-bottom"><span>© 2026 Forma. Projet pédagogique React.</span><span>Conçu pour apprendre et évoluer.</span></div>
    </footer>
  )
}