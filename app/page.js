export default function Home() {
  return (
    <main className="landing">
      <nav className="nav">
        <a href="/" className="brand">AdPilot</a>
        <div className="navLinks">
          <a href="#features">Funktioner</a>
          <a href="#pricing">Pris</a>
          <a href="/dashboard" className="navBtn">Prøv demo</a>
        </div>
      </nav>

      <section className="hero">
        <div className="heroText">
          <div className="badge">AI Ads Generator</div>
          <h1>Lav professionelle annoncekampagner på få minutter.</h1>
          <p>
            AdPilot hjælper virksomheder og bureauer med at generere Meta Ads,
            Google Ads, hooks, headlines, retargeting og creative idéer — klar
            til copy/paste.
          </p>

          <div className="heroActions">
            <a href="/dashboard" className="primary">Generer kampagne</a>
            <a href="#pricing" className="secondary">Se pris</a>
          </div>

          <div className="trust">
            <span>✓ Ubegrænset generering</span>
            <span>✓ Dansk output</span>
            <span>✓ Alle brancher</span>
          </div>
        </div>

        <div className="preview">
          <div className="previewTop">
            <span></span><span></span><span></span>
          </div>
          <div className="previewLabel">Kampagne genereret</div>

          <div className="previewCard active">
            <small>META ADS</small>
            <strong>5 annoncevarianter</strong>
            <p>Hooks, primær tekst, headline, CTA og beskrivelser.</p>
          </div>

          <div className="previewCard">
            <small>RETARGETING</small>
            <strong>Fang varme kunder</strong>
            <p>Tekster til besøgende, klik og interesserede brugere.</p>
          </div>

          <div className="previewCard">
            <small>GOOGLE ADS</small>
            <strong>Headlines & descriptions</strong>
            <p>Søgeannoncer klar til opsætning.</p>
          </div>
        </div>
      </section>

      <section className="logos">
        <span>Webshops</span>
        <span>Bilpleje</span>
        <span>Frisører</span>
        <span>Klinikker</span>
        <span>Håndværkere</span>
        <span>Bureauer</span>
      </section>

      <section id="features" className="section">
        <div className="sectionHead">
          <div className="badge light">Alt samlet ét sted</div>
          <h2>Fra tom side til komplet annoncepakke</h2>
          <p>
            Brugeren udfylder få felter — og får en kampagne med tekster,
            strategi, hooks og creative idéer.
          </p>
        </div>

        <div className="grid4">
          <div className="feature">
            <h3>Meta Ads</h3>
            <p>Primær tekst, hooks, headlines, CTA’er og retargeting.</p>
          </div>
          <div className="feature">
            <h3>Google Ads</h3>
            <p>Headlines, descriptions og sitelinks til søgekampagner.</p>
          </div>
          <div className="feature">
            <h3>Creative idéer</h3>
            <p>UGC, før/efter, testimonial og tilbudsannoncer.</p>
          </div>
          <div className="feature">
            <h3>Branche-smart</h3>
            <p>Virker til webshops, lokale firmaer, services og bureauer.</p>
          </div>
        </div>
      </section>

      <section className="trustCards">
        <div>
          <strong>Bygget til små virksomheder</strong>
          <p>Perfekt til dem der ikke har råd til bureau hver måned.</p>
        </div>
        <div>
          <strong>Klar til copy/paste</strong>
          <p>Output kan bruges direkte i Meta Ads og Google Ads.</p>
        </div>
        <div>
          <strong>Spar tid</strong>
          <p>Stop med at starte fra nul hver gang en kampagne skal laves.</p>
        </div>
      </section>

      <section id="pricing" className="pricing">
        <div className="priceCard">
          <div className="badge light">Fast pris</div>
          <h2>299 kr/md</h2>
          <p>
            Ubegrænset kampagnegenerering til virksomheder og bureauer.
          </p>

          <ul>
            <li>✓ Ubegrænset kampagnegenerering</li>
            <li>✓ Meta Ads tekster</li>
            <li>✓ Google Ads forslag</li>
            <li>✓ Retargeting strategier</li>
            <li>✓ Hooks & headlines</li>
            <li>✓ Creative idéer</li>
            <li>✓ Virker til alle brancher</li>
          </ul>

          <a href="/dashboard" className="primary full">Prøv gratis demo</a>
        </div>
      </section>
    </main>
  );
}
