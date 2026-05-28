export default function Home() {
  return (
    <main className="site">
      <nav className="navbar">
        <div className="brand">AdPilot</div>
        <a href="/dashboard" className="nav-btn">Prøv gratis</a>
      </nav>

      <section className="hero-pro">
        <div className="hero-content">
          <div className="badge">AI annoncegenerator til virksomheder</div>

          <h1>Lav komplette annoncekampagner på få minutter</h1>

          <p>
            AdPilot hjælper webshops, lokale virksomheder, klinikker,
            håndværkere, frisører og bureauer med Meta Ads, Google Ads,
            hooks, headlines, retargeting og creative idéer.
          </p>

          <div className="hero-actions">
            <a href="/dashboard" className="primary-btn">Start gratis</a>
            <a href="/dashboard" className="secondary-btn">Se demo</a>
          </div>

          <div className="trust-row">
            <span>✓ Meta Ads</span>
            <span>✓ Google Ads</span>
            <span>✓ Retargeting</span>
            <span>✓ Creative idéer</span>
          </div>
        </div>

        <div className="hero-card">
          <div className="card-top">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <h3>Din kampagne</h3>

          <div className="preview-line big"></div>
          <div className="preview-line"></div>
          <div className="preview-line"></div>

          <div className="mini-box">
            <strong>Annonce 1</strong>
            <p>Problem/løsning tekst klar til brug</p>
          </div>

          <div className="mini-box">
            <strong>Retargeting</strong>
            <p>Fang kunder der allerede har vist interesse</p>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <h3>Til alle brancher</h3>
          <p>
            Brug den til webshop, bilpleje, frisør, klinik, håndværker,
            restaurant, bureau og lokale services.
          </p>
        </div>

        <div className="feature-card">
          <h3>Klar tekst</h3>
          <p>
            Få hooks, primær tekst, headlines, beskrivelser, CTA’er og
            Google Ads forslag.
          </p>
        </div>

        <div className="feature-card">
          <h3>Spar tid</h3>
          <p>
            Stop med at starte fra nul. Udfyld få felter og få en komplet
            kampagnestruktur.
          </p>
        </div>
      </section>
    </main>
  );
}
