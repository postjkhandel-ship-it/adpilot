export default function Home() {
  return (
    <main className="landing">
      <header className="header">
        <a href="/" className="brand"><span>A</span>AdPilot</a>
        <nav>
          <a href="#features">Funktioner</a>
          <a href="#trust">Trust</a>
          <a href="#pricing">Pris</a>
          <a href="#contact" className="navBtn">Kontakt</a>
        </nav>
      </header>

      <section className="hero">
        <div>
          <div className="badge">AI Ads Generator</div>
          <h1>Lav professionelle annoncekampagner på få minutter.</h1>
          <p>
            AdPilot genererer Meta Ads, Google Ads, hooks, headlines,
            retargeting og kreative idéer til virksomheder og bureauer.
          </p>

          <div className="buttons">
            <a href="/dashboard" className="btn primary">Prøv gratis demo</a>
            <a href="#pricing" className="btn secondary">Se pris</a>
          </div>

          <div className="trustline">
            <span>✓ Ubegrænset generering</span>
            <span>✓ Dansk output</span>
            <span>✓ Alle brancher</span>
            <span>✓ Klar til copy/paste</span>
          </div>
        </div>

        <div className="preview">
          <div className="previewTop">
            <span></span><span></span><span></span>
          </div>

          <h3>Kampagnepakke genereret</h3>

          <div className="statGrid">
            <div><b>5</b><small>Meta Ads</small></div>
            <div><b>10+</b><small>Hooks</small></div>
            <div><b>1</b><small>Strategi</small></div>
          </div>

          <div className="previewCard blue">
            <strong>Meta Ads</strong>
            <p>Tekster, hooks, headlines og CTA klar til brug.</p>
          </div>

          <div className="previewCard">
            <strong>Retargeting</strong>
            <p>Fang besøgende og varme kunder med bedre tekster.</p>
          </div>

          <div className="previewCard">
            <strong>Google Ads</strong>
            <p>Headlines, descriptions og sitelinks.</p>
          </div>
        </div>
      </section>

      <section className="industries">
        <span>Webshops</span>
        <span>Lokale firmaer</span>
        <span>Klinikker</span>
        <span>Håndværkere</span>
        <span>Restauranter</span>
        <span>Bureauer</span>
      </section>

      <section id="features" className="section">
        <div className="sectionHead">
          <div className="badge">Funktioner</div>
          <h2>Alt du skal bruge til en kampagne</h2>
          <p>Udfyld få felter og få en komplet annoncepakke klar til copy/paste.</p>
        </div>

        <div className="grid">
          <div className="card"><h3>Meta Ads</h3><p>Primær tekst, hooks, headlines, beskrivelser og CTA.</p></div>
          <div className="card"><h3>Google Ads</h3><p>Headlines, descriptions og sitelinks til søgekampagner.</p></div>
          <div className="card"><h3>Retargeting</h3><p>Tekster til besøgende, klik og varme kunder.</p></div>
          <div className="card"><h3>Creative idéer</h3><p>UGC, før/efter, testimonials og tilbudsannoncer.</p></div>
        </div>
      </section>

      <section id="trust" className="section">
        <div className="sectionHead">
          <div className="badge">Trust</div>
          <h2>Bygget til hurtigere kampagnearbejde</h2>
        </div>

        <div className="grid trustGrid">
          <div className="card"><h3>✓ Spar tid</h3><p>Stop med at starte fra nul hver gang.</p></div>
          <div className="card"><h3>✓ Alle brancher</h3><p>Brug den til webshops, services, klinikker og bureauer.</p></div>
          <div className="card"><h3>✓ Klar struktur</h3><p>Problem, løsning, tilbud, CTA og retargeting.</p></div>
          <div className="card"><h3>✓ Til kunder</h3><p>Perfekt til freelancere og bureauer.</p></div>
        </div>
      </section>

      <section id="pricing" className="pricing">
        <div className="priceCard">
          <div className="badge">Fast pris</div>
          <h2>299 kr/md</h2>
          <p>Ubegrænset kampagnegenerering til virksomheder og bureauer.</p>

          <ul>
            <li>✓ Ubegrænset kampagnegenerering</li>
            <li>✓ Meta Ads tekster</li>
            <li>✓ Google Ads forslag</li>
            <li>✓ Retargeting strategier</li>
            <li>✓ Hooks og creative idéer</li>
            <li>✓ Virker til alle brancher</li>
          </ul>

          <a href="/dashboard" className="btn primary full">Prøv gratis demo</a>
        </div>
      </section>

      <section id="contact" className="contact">
        <div>
          <div className="badge">Kontakt</div>
          <h2>Vil du høre mere?</h2>
          <p>Send en besked om demo, spørgsmål eller samarbejde.</p>
        </div>

        <form className="contactForm" action="mailto:kontakt@adpilot.dk" method="post" encType="text/plain">
          <label>Navn<input name="navn" placeholder="Dit navn" required /></label>
          <label>Email<input name="email" type="email" placeholder="din@email.dk" required /></label>
          <label>Virksomhed<input name="virksomhed" placeholder="Firmanavn" /></label>
          <label>Besked<textarea name="besked" placeholder="Skriv din besked" required></textarea></label>
          <button className="btn primary full" type="submit">Send besked</button>
        </form>
      </section>
    </main>
  );
}
