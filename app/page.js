export default function Home() {
  return (
    <main className="landing">
      <nav className="topnav">
        <div className="logo-mark">AdPilot</div>
        <div className="navlinks">
          <a href="#why">Hvorfor</a>
          <a href="#features">Funktioner</a>
          <a href="#pricing">Pris</a>
          <a href="/dashboard" className="login-btn">Prøv gratis</a>
        </div>
      </nav>

      <section className="hero-sales">
        <div className="hero-copy">
          <div className="pill">AI Ads Generator til virksomheder & bureauer</div>

          <h1>Stop med at gætte på annoncer. Få en komplet kampagne på 60 sekunder.</h1>

          <p className="hero-sub">
            AdPilot laver salgsstærke Meta Ads, Google Ads, hooks, headlines,
            retargeting og kreative vinkler ud fra virksomhed, branche,
            produkt, målgruppe og budget.
          </p>

          <div className="hero-actions">
            <a href="/dashboard" className="primary-btn">Generer din første kampagne</a>
            <a href="#pricing" className="secondary-btn">Se pris</a>
          </div>

          <div className="trust-strip">
            <span>✓ Til alle brancher</span>
            <span>✓ Dansk output</span>
            <span>✓ Klar til copy/paste</span>
            <span>✓ Perfekt til kunder</span>
          </div>
        </div>

        <div className="offer-box">
          <div className="offer-top">KAMPAGNE OUTPUT</div>

          <div className="output-card highlight">
            <strong>Meta Ads</strong>
            <p>5 færdige annoncer med hook, tekst, headline og CTA.</p>
          </div>

          <div className="output-card">
            <strong>Google Ads</strong>
            <p>Headlines, descriptions og sitelinks klar til kampagneopsætning.</p>
          </div>

          <div className="output-card">
            <strong>Retargeting</strong>
            <p>Tekster og målgrupper til kunder der allerede har vist interesse.</p>
          </div>

          <div className="mini-metrics">
            <div><b>10+</b><span>Hooks</span></div>
            <div><b>5</b><span>Ads</span></div>
            <div><b>1</b><span>Plan</span></div>
          </div>
        </div>
      </section>

      <section id="why" className="problem-section">
        <div className="section-head dark">
          <span className="pill">Problemet</span>
          <h2>De fleste annoncer fejler, fordi teksten er for svag.</h2>
          <p>
            Små virksomheder spilder penge på tilfældige tekster, dårlige hooks
            og kampagner uden struktur. AdPilot giver dem en professionel start
            — uden at betale et bureau flere tusinde kroner.
          </p>
        </div>

        <div className="before-after">
          <div className="bad-box">
            <h3>Uden AdPilot</h3>
            <ul>
              <li>Starter fra tom side</li>
              <li>Ingen kampagnestruktur</li>
              <li>Svage hooks</li>
              <li>Bruger for lang tid</li>
              <li>Dårligere annoncer</li>
            </ul>
          </div>

          <div className="good-box">
            <h3>Med AdPilot</h3>
            <ul>
              <li>Færdige annoncepakker</li>
              <li>Meta + Google Ads</li>
              <li>Retargeting tekster</li>
              <li>Creative idéer</li>
              <li>Klar til kunder</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="features" className="white-section">
        <div className="section-head">
          <span className="pill light">Hvad kunden får</span>
          <h2>Alt en virksomhed skal bruge for at komme i gang med annoncer</h2>
        </div>

        <div className="feature-grid">
          <div className="pro-card">
            <h3>Meta Ads pakke</h3>
            <p>Primær tekst, headlines, beskrivelser, CTA’er og hooks.</p>
          </div>
          <div className="pro-card">
            <h3>Google Ads pakke</h3>
            <p>Headlines, descriptions og sitelinks til søgekampagner.</p>
          </div>
          <div className="pro-card">
            <h3>Retargeting</h3>
            <p>Fang besøgende, klik og varme kunder med stærkere tekster.</p>
          </div>
          <div className="pro-card">
            <h3>Creative idéer</h3>
            <p>UGC, før/efter, testimonial, tilbudsannoncer og lokale vinkler.</p>
          </div>
          <div className="pro-card">
            <h3>Branche-smart</h3>
            <p>Virker til webshop, frisør, bilpleje, klinik, håndværker og flere.</p>
          </div>
          <div className="pro-card">
            <h3>Kopiér direkte</h3>
            <p>Hele kampagnen kan kopieres og bruges med det samme.</p>
          </div>
        </div>
      </section>

      <section className="usecases">
        <div className="section-head dark">
          <span className="pill">Perfekt til</span>
          <h2>Bygget til dem der vil sælge mere — hurtigere</h2>
        </div>

        <div className="usecase-row">
          <span>Webshops</span>
          <span>Marketingbureauer</span>
          <span>Lokale firmaer</span>
          <span>Frisører</span>
          <span>Bilpleje</span>
          <span>Klinikker</span>
          <span>Håndværkere</span>
          <span>Restauranter</span>
        </div>
      </section>

      <section id="pricing" className="pricing-section">
        <div className="pricing-card">
          <div className="pill light">Start simpelt</div>
          <h2>149 kr/md</h2>
          <p>
            En lav pris gør det nemt at få de første betalende brugere. Senere
            kan du tilføje login, Stripe, AI API og gemte kampagner.
          </p>

          <ul className="price-list">
            <li>✓ Ubegrænsede demo-genereringer</li>
            <li>✓ Meta Ads tekster</li>
            <li>✓ Google Ads forslag</li>
            <li>✓ Retargeting strategi</li>
            <li>✓ Creative idéer</li>
          </ul>

          <a href="/dashboard" className="primary-btn wide">Prøv AdPilot gratis</a>
        </div>
      </section>
    </main>
  );
}
