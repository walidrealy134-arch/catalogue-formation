import { ArrowUpRight, Braces, ChartNoAxesColumnIncreasing, Code2, Figma, Layout, Server } from 'lucide-react'

const icons = { code: Code2, server: Server, layout: Layout, figma: Figma, braces: Braces, chart: ChartNoAxesColumnIncreasing }

export default function FormationCard({ formation, onDetails }) {
  const Icon = icons[formation.icon] || Code2

  return (
    <article className="formation-card">
      <div className={`card-icon ${formation.couleur}`}><Icon size={23} strokeWidth={1.8} /></div>
      <div className="card-meta"><span>{formation.categorie}</span><span className="level">{formation.niveau}</span></div>
      <h3>{formation.nom}</h3>
      <p className="card-description">{formation.description}</p>
      <div className="card-info"><span>◷ {formation.duree}</span><span>⌁ {formation.format}</span></div>
      <div className="card-bottom">
        <div><small>À partir de</small><strong>{formation.prix.toLocaleString('fr-FR')} <small>DH</small></strong></div>
        <button className="details-button" onClick={() => onDetails(formation)} aria-label={`Détails ${formation.nom}`}><ArrowUpRight size={19} /></button>
      </div>
    </article>
  )
}