export default function Home() {
  return (
    <main className="landing-clean">
      <nav className="clean-nav">
        <div className="clean-logo">AdPilot</div>
        <div className="clean-links">
          <a href="#features">Funktioner</a>
          <a href="#trust">Trust</a>
          <a href="#pricing">Pris</a>
          <a href="/dashboard" className="nav-cta">Start gratis</a>
        </div>
      </nav>

      <section className="clean-hero">
        <div className="hero-textbox">
          <div className="label">AI Ads Generator</div>

          <h1>Lav professionelle annoncekampagner på få minutter.</h1>

          <p>
            AdPilot hjælper virksomheder med at lave Meta Ads, Google Ads,
            hooks, headlines, retargeting og kreative idéer — klar til at
            kopiere direkte ind i Ads Manager.
          </p>

          <div className="hero-cta-row">
            <a href="/dashboard" className="main-cta">Generer kampagne</a>
            <a href="#pricing" className="ghost-cta">Se pris</a>
          </div>

          <div className="hero-points">
            <span>✓ Ubegrænset generering</span>
            <span>✓ Dansk output</span>
            <span>✓ Alle brancher</span>
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

      <section id="trust" className="trust-section">
        <div className="trust-card">
          <strong>Bygget til små virksomheder</strong>
          <p>Perfekt til webshops, lokale firmaer, klinikker, håndværkere og bureauer.</p>
        </div>

        <div className="trust-card">
          <strong>Klar til copy/paste</strong>
          <p>Få annoncepakker der kan bruges direkte i Meta Ads og Google Ads.</p>
        </div>

        <div className="trust-card">
          <strong>Spar timer hver uge</strong>
          <p>Stop med at starte fra nul hver gang du skal lave en kampagne.</p>
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
          <p>
            Udfyld få felter og få en professionel kampagne med tekster,
            hooks, strategi og kreative vinkler.
          </p>
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

      <section className="testimonial-section">
        <div className="testimonial">
          <div className="stars">★★★★★</div>
          <p>
            “AdPilot gør det nemt at lave annonceidéer hurtigt. Perfekt hvis man
            arbejder med kunder eller driver webshop.”
          </p>
          <strong>Marketing setup til små virksomheder</strong>
        </div>

        <div className="testimonial">
          <div className="stars">★★★★★</div>
          <p>
            “Det bedste er at man får både Meta Ads, Google Ads og retargeting
            samlet ét sted.”
          </p>
          <strong>Kampagnegenerator på dansk</strong>
        </div>
      </section>

      <section id="pricing" className="pricing-clean">
        <div className="price-box">
          <div className="label dark">Fast pris</div>

          <h2>299 kr/md</h2>

          <p>
            Få ubegrænset kampagnegenerering til din virksomhed eller dine
            kunder. Generer Meta Ads, Google Ads, hooks, retargeting og kreative
            idéer på få minutter.
          </p>

          <ul>
            <li>✓ Ubegrænset kampagnegenerering</li>
            <li>✓ Meta Ads tekster</li>
            <li>✓ Google Ads headlines & descriptions</li>
            <li>✓ Retargeting strategier</li>
            <li>✓ Hooks & headlines</li>
            <li>✓ Creative idéer & UGC vinkler</li>
            <li>✓ Virker til alle brancher</li>
            <li>✓ Klar til copy/paste</li>
          </ul>

          <a href="/dashboard" className="main-cta full">Prøv gratis demo</a>

          <div className="price-note">
            Ingen binding i MVP-versionen. Start simpelt og opgrader senere med login og betaling.
          </div>
        </div>
      </section>
    </main>
  );
}
