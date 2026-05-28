export default function Home() {
  return (
    <main className="landing">
      <nav className="topnav">
        <div className="logo-mark">AdPilot</div>
        <div className="navlinks">
          <a href="#features">Funktioner</a>
          <a href="#pricing">Priser</a>
          <a href="/dashboard" className="login-btn">Prøv gratis</a>
        </div>
      </nav>

      <section className="hero-premium">
        <div className="hero-left">
          <div className="pill">AI platform til annoncering</div>

          <h1>Lav kampagner der ligner de er lavet af et bureau.</h1>

          <p className="hero-text">
            AdPilot genererer Meta Ads, Google Ads, hooks, headlines,
            retargeting, kreative idéer og kampagnestruktur til næsten alle
            typer virksomheder.
          </p>

          <div className="hero-buttons">
            <a href="/dashboard" className="primary-btn">Generer kampagne</a>
            <a href="#features" className="outline-btn">Se funktioner</a>
          </div>

          <div className="proof">
            <span>✓ Webshops</span>
            <span>✓ Lokale firmaer</span>
            <span>✓ Bureauer</span>
            <span>✓ Klinikker</span>
          </div>
        </div>

        <div className="dashboard-preview">
          <div className="preview-header">
            <span></span><span></span><span></span>
          </div>

          <div className="preview-title">Kampagne genereret</div>

          <div className="metric-row">
            <div>
              <strong>5</strong>
              <small>Ad tekster</small>
            </div>
            <div>
              <strong>10</strong>
              <small>Hooks</small>
            </div>
            <div>
              <strong>4</strong>
              <small>Google Ads</small>
            </div>
          </div>

          <div className="preview-card blue">
            <b>Annonce 1 — Problem/løsning</b>
            <p>Primær tekst, headline, CTA og beskrivelse klar til brug.</p>
          </div>

          <div className="preview-card">
            <b>Retargeting strategi</b>
            <p>Fang besøgende, klik og tidligere interesserede kunder.</p>
          </div>

          <div className="preview-card">
            <b>Creative idéer</b>
            <p>UGC, før/efter, testimonial og tilbudsannonce.</p>
          </div>
        </div>
      </section>

      <section className="logos">
        <span>Meta Ads</span>
        <span>Google Ads</span>
        <span>Retargeting</span>
        <span>UGC Scripts</span>
        <span>Creative Ideas</span>
      </section>

      <section id="features" className="section">
        <div className="section-head">
          <span className="pill">Alt samlet ét sted</span>
          <h2>Fra tom side til komplet annoncepakke</h2>
          <p>
            Udfyld få felter om virksomheden, og få en brugbar kampagne på få
            sekunder.
          </p>
        </div>

        <div className="feature-grid">
          <div className="pro-card">
            <h3>Meta Ads</h3>
            <p>Primær tekst, hooks, headlines, CTA’er og retargeting tekster.</p>
          </div>

          <div className="pro-card">
            <h3>Google Ads</h3>
            <p>Headlines, descriptions og sitelinks til søgekampagner.</p>
          </div>

          <div className="pro-card">
            <h3>Creative idéer</h3>
            <p>UGC vinkler, statics, før/efter idéer og testimonial annoncer.</p>
          </div>

          <div className="pro-card">
            <h3>Branche-smart</h3>
            <p>Tilpasser output til webshop, bilpleje, frisør, klinik, håndværker og mere.</p>
          </div>

          <div className="pro-card">
            <h3>Budgetplan</h3>
            <p>Fordeler budget mellem cold audience, retargeting og creative tests.</p>
          </div>

          <div className="pro-card">
            <h3>Kopiér klar</h3>
            <p>Kunden kan kopiere hele kampagnen direkte og bruge den med det samme.</p>
          </div>
        </div>
      </section>

      <section id="pricing" className="pricing-section">
        <div className="pricing-card">
          <span className="pill">MVP prisidé</span>
          <h2>Start med 149 kr/md</h2>
          <p>
            Perfekt som første betalte version. Senere kan du tilføje login,
            Stripe, gemte kampagner og AI API.
          </p>
          <a href="/dashboard" className="primary-btn">Prøv demoen</a>
        </div>
      </section>
    </main>
  );
}
