import { ArrowRight, PlayCircle, Sparkles } from 'lucide-react'

export default function Hero({ total }) {
  return (
    <section className="hero" id="accueil">
      <div className="hero-copy">
        <div className="eyebrow"><Sparkles size={15} /> APPRENEZ. ÉVOLUEZ. RÉUSSISSEZ.</div>
        <h1>Développez vos compétences. <span>Construisez votre avenir.</span></h1>
        <p className="hero-description">Des formations pratiques et accessibles pour transformer votre potentiel en compétences concrètes.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#formations">Explorer les formations <ArrowRight size={17} /></a>
          <a className="text-link" href="#apropos"><PlayCircle size={19} /> Découvrir Forma</a>
        </div>
        <div className="hero-stats">
          <div><strong>{total}+</strong><span>Formations</span></div>
          <div><strong>100%</strong><span>Pratique</span></div>
          <div><strong>À votre rythme</strong><span>Apprentissage flexible</span></div>
        </div>
      </div>
      <div className="hero-visual">
        <div className="visual-glow" />
        <div className="visual-card visual-card-main">
          <div className="visual-top"><span className="live-dot" /> VOTRE PROGRESSION</div>
          <div className="visual-title">Chaque compétence<br />vous rapproche du succès.</div>
          <div className="progress-row"><span>Développement web</span><b>85%</b></div>
          <div className="progress-track"><span style={{ width: '85%' }} /></div>
          <div className="progress-row"><span>Design créatif</span><b>68%</b></div>
          <div className="progress-track"><span className="progress-purple" style={{ width: '68%' }} /></div>
          <div className="visual-bottom"><span className="avatar-stack"><i>Y</i><i>M</i><i>A</i></span><span>Rejoignez une communauté qui apprend.</span></div>
        </div>
        <div className="floating-note"><span className="note-icon">✦</span><div><b>Apprendre autrement</b><small>Des projets concrets</small></div></div>
        <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
      </div>
    </section>
  )
}