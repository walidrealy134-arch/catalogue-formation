import { X, Clock3, Monitor, CheckCircle2 } from 'lucide-react'

export default function FormationModal({ formation, onClose }) {
  if (!formation) return null

  return (
    <div className="modal-backdrop" onClick={onClose} role="presentation">
      <section className="modal" onClick={(event) => event.stopPropagation()} role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button className="modal-close" onClick={onClose} aria-label="Fermer"><X size={20} /></button>
        <span className="modal-kicker">{formation.categorie} · {formation.niveau}</span>
        <h2 id="modal-title">{formation.nom}</h2>
        <p>{formation.description}</p>
        <div className="modal-facts"><span><Clock3 size={17} /> {formation.duree}</span><span><Monitor size={17} /> {formation.format}</span></div>
        <h3>Programme de la formation</h3>
        <ul className="module-list">
          {formation.modules.map((module) => <li key={module}><CheckCircle2 size={17} /> {module}</li>)}
        </ul>
        <div className="modal-footer"><div><small>Prix de la formation</small><strong>{formation.prix.toLocaleString('fr-FR')} DH</strong></div><a className="button button-primary" href="#contact" onClick={onClose}>Demander des informations ↗</a></div>
      </section>
    </div>
  )
}