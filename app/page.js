export default function Home() {
  return (
    <main className="landing-clean">
      <nav className="clean-nav">
        <div className="clean-logo">AdPilot</div>
        <div className="clean-links">
          <a href="#features">Funktioner</a>
          <a href="#pricing">Pris</a>
          <a href="/dashboard" className="nav-cta">Start gratis</a>
        </div>
      </nav>

      <section className="clean-hero">
        <div className="hero-textbox">
          <div className="label">AI Ads Generator</div>
          <h1>Lav professionelle annoncer på få minutter.</h1>
          <p>
            AdPilot hjælper virksomheder med at generere Meta Ads, Google Ads,
            hooks, headlines, retargeting og kreative idéer — klar til copy/paste.
          </p>

          <div className="hero-cta-row">
            <a href="/dashboard" className="main-cta">Generer kampagne</a>
            <a href="#features" className="ghost-cta">Se hvordan</a>
          </div>

          <div className="hero-points">
            <span>✓ Dansk output</span>
            <span>✓ Til alle brancher</span>
            <span>✓ Klar på 60 sek.</span>
          </div>
        </div>

        <div className="app-preview">
          <div className="preview-nav">
            <span></span><span></span><span></span>
          </div>

          <div className="preview-badge">Kampagne genereret</div>

          <div className="preview-block active">
            <small>META ADS</small>
            <strong>5 annoncevarianter</strong>
            <p>Hooks, primær tekst, headline, CTA og beskrivelse.</p>
          </div>

          <div className="preview-block">
            <small>RETARGETING</small>
            <strong>Fang varme kunder</strong>
            <p>Tekster til besøgende, klik og interesserede brugere.</p>
          </div>

          <div className="preview-block">
            <small>GOOGLE ADS</small>
            <strong>Headlines & descriptions</strong>
            <p>Søgeannoncer klar til opsætning.</p>
          </div>
        </div>
      </section>

      <section className="logo-strip">
        <span>Webshops</span>
        <span>Bilpleje</span>
        <span>Frisører</span>
        <span>Klinikker</span>
        <span>Håndværkere</span>
        <span>Bureauer</span>
      </section>

      <section id="features" className="clean-section">
        <div className="section-title">
          <div className="label dark">Alt samlet ét sted</div>
          <h2>Fra idé til komplet annoncepakke</h2>
          <p>Udfyld få felter og få en professionel kampagne, der kan bruges med det samme.</p>
        </div>

        <div className="clean-grid">
          <div className="clean-card">
            <h3>Meta Ads</h3>
            <p>Primær tekst, hooks, headlines, CTA’er og retargeting.</p>
          </div>
          <div className="clean-card">
            <h3>Google Ads</h3>
            <p>Headlines, descriptions og sitelinks til søgekampagner.</p>
          </div>
          <div className="clean-card">
            <h3>Creative idéer</h3>
            <p>UGC, før/efter, testimonials og tilbudsannoncer.</p>
          </div>
          <div className="clean-card">
            <h3>Branche-smart</h3>
            <p>Tilpasser tekster til webshops, lokale firmaer og services.</p>
          </div>
        </div>
      </section>

      <section id="pricing" className="pricing-clean">
        <div className="price-box">
          <div className="label dark">Start nu</div>
          <h2>149 kr/md</h2>
          <p>Perfekt til små virksomheder og bureauer der vil lave annoncepakker hurtigere.</p>

          <ul>
            <li>✓ Ubegrænset kampagnegenerering</li>
            <li>✓ Meta Ads + Google Ads</li>
            <li>✓ Retargeting strategi</li>
            <li>✓ Creative idéer</li>
          </ul>

          <a href="/dashboard" className="main-cta full">Prøv gratis demo</a>
        </div>
      </section>
    </main>
  );
}
