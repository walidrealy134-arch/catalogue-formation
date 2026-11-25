import { useMemo, useState } from 'react'
import { Search, SlidersHorizontal, X } from 'lucide-react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import FormationCard from './components/FormationCard.jsx'
import FormationModal from './components/FormationModal.jsx'
import Footer from './components/Footer.jsx'
import { formations, categories } from './data/formations.js'

export default function App() {
  const [activeCategory, setActiveCategory] = useState('Toutes')
  const [search, setSearch] = useState('')
  const [selectedFormation, setSelectedFormation] = useState(null)

  const filteredFormations = useMemo(() => {
    return formations.filter((formation) => {
      const matchesCategory = activeCategory === 'Toutes' || formation.categorie === activeCategory
      const matchesSearch = `${formation.nom} ${formation.description} ${formation.categorie}`.toLowerCase().includes(search.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [activeCategory, search])

  return (
    <>
      <Header />
      <main>
        <div className="container"><Hero total={formations.length} /></div>
        <section className="catalogue-section" id="formations">
          <div className="container">
            <div className="section-heading">
              <div><div className="section-kicker">NOTRE CATALOGUE</div><h2>Choisissez votre prochaine <span>formation.</span></h2><p>Des parcours pensés pour vos objectifs et votre évolution.</p></div>
              <div className="result-count"><b>{filteredFormations.length.toString().padStart(2, '0')}</b><span>formations disponibles</span></div>
            </div>
            <div className="catalogue-tools">
              <div className="filters" aria-label="Filtrer par catégorie">
                {categories.map((category) => <button key={category} className={activeCategory === category ? 'filter-chip active' : 'filter-chip'} onClick={() => setActiveCategory(category)}>{category}</button>)}
              </div>
              <label className="search-box"><Search size={18} /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Rechercher une formation..." /><SlidersHorizontal size={17} /></label>
            </div>
            <div className="formation-grid">
              {filteredFormations.map((formation) => <FormationCard key={formation.id} formation={formation} onDetails={setSelectedFormation} />)}
            </div>
            {filteredFormations.length === 0 && <div className="empty-state"><span>⌕</span><h3>Aucun résultat</h3><p>Essayez un autre mot-clé ou une autre catégorie.</p><button className="button button-primary" onClick={() => { setSearch(''); setActiveCategory('Toutes') }}><X size={16} /> Réinitialiser</button></div>}
          </div>
        </section>
        <section className="about-section" id="apropos"><div className="container about-inner"><div className="about-symbol">✳</div><div><div className="section-kicker">POURQUOI FORMA ?</div><h2>Apprendre aujourd’hui,<br /><span>réussir demain.</span></h2><p>Notre approche met la pratique au centre de l’apprentissage. Explorez les programmes, comparez les parcours et choisissez les compétences qui feront la différence.</p></div><a className="button button-light" href="#formations">Voir les formations ↗</a></div></section>
      </main>
      <Footer />
      <FormationModal formation={selectedFormation} onClose={() => setSelectedFormation(null)} />
    </>
  )
}