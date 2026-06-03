export default function Home() {
  const stripeLink = "https://buy.stripe.com/fZudR1dNoabSaCEeTbebu00";

  return (
    <main className="site">
      <header className="nav">
        <a href="/" className="logo">
          <span>A</span>AdPilot
        </a>

        <div className="navLinks">
          <a href="#tools">Værktøjer</a>
          <a href="#demo">Demo</a>
          <a href="#pricing">Pris</a>
          <a href="#faq">FAQ</a>
          <a
            href={stripeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="navCta"
          >
            Start Pro
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="heroCopy">
          <div className="pill">AI marketingværktøj til danske virksomheder</div>

          <h1>
            Lav Meta Ads, Google Ads, Landing Pages og annoncekreativer på få minutter.
          </h1>

          <p>
            Generér Meta Ads, Google Ads, hooks, UGC scripts, static annoncer,
            landing pages og retargeting — klar til copy/paste.
          </p>

          <div className="heroBtns">
            <a
              href={stripeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn primary"
            >
              Start AdPilot Pro – 299 kr/md
            </a>

            <a href="#demo" className="btn dark">
              Se eksempel
            </a>
          </div>

          <div className="heroProof">
            <div className="proofCard">
              <strong>Alt samlet</strong>
              <small>Ads, hooks, statics, UGC og landing pages</small>
            </div>

            <div className="proofCard">
              <strong>Alle brancher</strong>
              <small>Tilpasser output til firma og målgruppe</small>
            </div>

            <div className="proofCard">
              <strong>Klar til brug</strong>
              <small>Copy/paste direkte i dit marketingarbejde</small>
            </div>
          </div>
        </div>

        <div className="heroMockup">
          <div className="mockHeader">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="mockTitle">Marketing genereret</div>

          <div className="mockStats">
            <div>
              <b>8</b>
              <small>Værktøjer</small>
            </div>

            <div>
              <b>20+</b>
              <small>Hooks</small>
            </div>

            <div>
              <b>2 min</b>
              <small>Fra brief til output</small>
            </div>
          </div>

          <div className="mockCard active">
            <strong>Komplet kampagne</strong>
            <p>Meta Ads, Google Ads, hooks, UGC, statics og retargeting.</p>
          </div>

          <div className="mockCard">
            <strong>Landing Page tekster</strong>
            <p>Hero, USP’er, FAQ, CTA’er og salgstekster.</p>
          </div>

          <div className="mockCard">
            <strong>Static annoncer</strong>
            <p>Kreative briefs, billedtekster og Canva prompts.</p>
          </div>
        </div>
      </section>

      <section id="tools" className="marketingSuite">
        <div className="sectionHead">
          <div className="pill">Alt i én platform</div>
          <h2>AdPilot kan bruges til hele din marketing</h2>
          <p>
            Ikke kun annoncetekster. AdPilot hjælper med kampagner, kreativer,
            landing pages og retargeting.
          </p>
        </div>

        <div className="toolGrid">
          <div className="toolCard">
            <span>📢</span>
            <h3>Meta Ads</h3>
            <p>Primære tekster, headlines, CTA’er og annoncevinkler.</p>
          </div>

          <div className="toolCard">
            <span>🔎</span>
            <h3>Google Ads</h3>
            <p>Headlines, descriptions og sitelinks til søgekampagner.</p>
          </div>

          <div className="toolCard">
            <span>🎯</span>
            <h3>Hooks</h3>
            <p>Scroll-stoppende hooks til annoncer, videoer og opslag.</p>
          </div>

          <div className="toolCard">
            <span>🔁</span>
            <h3>Retargeting</h3>
            <p>Annoncetekster til varme besøgende og næsten-kunder.</p>
          </div>

          <div className="toolCard">
            <span>🎥</span>
            <h3>UGC Scripts</h3>
            <p>Video scripts til Reels, TikTok, Facebook og Instagram.</p>
          </div>

          <div className="toolCard">
            <span>🖼️</span>
            <h3>Static Annoncer</h3>
            <p>Billedidéer, layout, annoncetekst og Canva prompts.</p>
          </div>

          <div className="toolCard">
            <span>🌐</span>
            <h3>Landing Pages</h3>
            <p>Hero, USP’er, problem/løsning, FAQ og CTA-sektioner.</p>
          </div>

          <div className="toolCard highlight">
            <span>⚡</span>
            <h3>Komplet Kampagne</h3>
            <p>Alt samlet i én kampagnepakke klar til copy/paste.</p>
          </div>
        </div>

        <div className="suiteNote">
          Over 100 kombinationer af marketingindhold genereret på få minutter.
        </div>
      </section>

      <section className="valueStack">
        <div className="sectionHead">
          <div className="pill">Værdi for 299 kr/md</div>
          <h2>Mindre end prisen på én annonce</h2>
          <p>
            AdPilot kan spare dig timer hver uge og give et mere professionelt
            udgangspunkt for dine kampagner.
          </p>
        </div>

        <div className="valueGrid">
          <div>✓ Meta Ads</div>
          <div>✓ Google Ads</div>
          <div>✓ Hooks</div>
          <div>✓ Retargeting</div>
          <div>✓ UGC Scripts</div>
          <div>✓ Static Annoncer</div>
          <div>✓ Landing Pages</div>
          <div>✓ Ubegrænset generering</div>
        </div>
      </section>

      <section className="beforeAfter">
        <div className="sectionHead">
          <div className="pill">Før / efter</div>
          <h2>Fra blank side til klar marketing</h2>
        </div>

        <div className="compareGrid">
          <div className="compareCard bad">
            <h3>Før AdPilot</h3>
            <p>❌ Du starter fra nul</p>
            <p>❌ Du mangler hooks</p>
            <p>❌ Annoncer tager for lang tid</p>
            <p>❌ Svært at finde nye vinkler</p>
            <p>❌ Landing pages bliver ikke skrevet</p>
          </div>

          <div className="compareCard good">
            <h3>Med AdPilot</h3>
            <p>✅ Kampagne klar på minutter</p>
            <p>✅ Hooks og headlines genereres</p>
            <p>✅ Meta Ads + Google Ads samlet</p>
            <p>✅ Static annonceidéer klar</p>
            <p>✅ Landing page tekster klar</p>
          </div>
        </div>
      </section>

      <section className="logoStrip">
        <span>Webshops</span>
        <span>Lokale firmaer</span>
        <span>Klinikker</span>
        <span>Håndværkere</span>
        <span>Bureauer</span>
        <span>Restauranter</span>
        <span>Bilpleje</span>
        <span>Freelancere</span>
      </section>

      <section id="demo" className="demoSection">
        <div className="sectionHead">
          <div className="pill">Demo-output</div>
          <h2>Sådan kan et output se ud</h2>
          <p>Brug det direkte som annonce, kundeoplæg eller kampagnebrief.</p>
        </div>

        <div className="demoOutput">
          <h3>META ADS FOR LOKAL KLINIK</h3>

          <h4>ANNONCE 1 — PROBLEM / LØSNING</h4>

          <p>
            <strong>Hook:</strong>
            <br />
            Har du brug for en behandling, der føles tryg fra start?
          </p>

          <p>
            <strong>Primær tekst:</strong>
            <br />
            Mange udskyder deres behandling, fordi de er usikre på hvem de kan
            stole på. Hos Lokal Klinik får du en professionel og enkel proces
            med fokus på et resultat, du kan føle dig tryg ved.
          </p>

          <p>
            <strong>Static annonceidé:</strong>
            <br />
            Clean billede med klinik, trust badges, kort hook og tydelig CTA:
            “Book tid”.
          </p>

          <p>
            <strong>Landing Page hero:</strong>
            <br />
            Få en behandling der føles tryg fra start.
          </p>
        </div>
      </section>

      <section id="features" className="section">
        <div className="sectionHead">
          <div className="pill">Funktioner</div>
          <h2>Bygget til hurtigere marketingproduktion</h2>
          <p>
            AdPilot samler de vigtigste kampagneelementer i ét simpelt
            dashboard.
          </p>
        </div>

        <div className="featureGrid">
          <div className="card">
            <h3>Annoncegenerator</h3>
            <p>Lav Meta Ads, Google Ads, hooks og retargeting.</p>
          </div>

          <div className="card">
            <h3>Creative generator</h3>
            <p>Få static annonceidéer, UGC scripts og Canva prompts.</p>
          </div>

          <div className="card">
            <h3>Landing Page generator</h3>
            <p>Få hero, USP’er, FAQ, CTA’er og salgstekster.</p>
          </div>

          <div className="card">
            <h3>Komplet kampagne</h3>
            <p>Få hele kampagnepakken samlet på få minutter.</p>
          </div>
        </div>
      </section>

      <section className="how">
        <div className="sectionHead">
          <div className="pill">Sådan virker det</div>
          <h2>Fra kort brief til færdig marketing på 3 trin</h2>
        </div>

        <div className="steps">
          <div>
            <span>01</span>
            <h3>Udfyld brief</h3>
            <p>
              Indtast virksomhed, branche, produkt, målgruppe, tilbud og
              lokation.
            </p>
          </div>

          <div>
            <span>02</span>
            <h3>Vælg output</h3>
            <p>
              Vælg Meta Ads, Google Ads, hooks, statics, landing page eller
              komplet kampagne.
            </p>
          </div>

          <div>
            <span>03</span>
            <h3>Kopiér og brug</h3>
            <p>
              Brug output direkte i Ads Manager, Google Ads, Canva eller som
              kundeoplæg.
            </p>
          </div>
        </div>
      </section>

      <section id="pricing" className="pricing">
        <div className="priceBox">
          <div className="pill">AdPilot Pro</div>

          <h2>299 kr/md</h2>

          <p>
            Ubegrænset marketinggenerering til virksomheder, freelancere og
            bureauer.
          </p>

          <ul>
            <li>✓ Ubegrænset kampagnegenerering</li>
            <li>✓ Meta Ads + Google Ads forslag</li>
            <li>✓ Hooks og headlines</li>
            <li>✓ Retargeting strategier</li>
            <li>✓ UGC scripts</li>
            <li>✓ Static annoncer + Canva prompts</li>
            <li>✓ Landing Page tekster</li>
            <li>✓ Dansk output klar til copy/paste</li>
          </ul>

          <a
            href={stripeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn primary full"
          >
            Start AdPilot Pro – 299 kr/md
          </a>

          <div className="payTrust">
            ✓ Sikker betaling med Stripe · ✓ Ingen binding · ✓ Opsig når som
            helst
          </div>
        </div>
      </section>

      <section id="faq" className="faq">
        <div className="sectionHead">
          <div className="pill">FAQ</div>
          <h2>Ofte stillede spørgsmål</h2>
        </div>

        <div className="faqGrid">
          <div>
            <h3>Virker det til min branche?</h3>
            <p>
              Ja. AdPilot bruger den branche, virksomhed, målgruppe og det
              produkt du indtaster til at lave relevant output.
            </p>
          </div>

          <div>
            <h3>Kan den også lave kreativer?</h3>
            <p>
              Ja. AdPilot kan generere static annoncekoncepter, billedtekster,
              layoutidéer og Canva prompts.
            </p>
          </div>

          <div>
            <h3>Kan den lave landing pages?</h3>
            <p>
              Ja. AdPilot kan generere hero, USP’er, problem/løsning, FAQ og
              CTA-tekster til landing pages.
            </p>
          </div>

          <div>
            <h3>Er teksterne klar til brug?</h3>
            <p>
              Ja. Du kan kopiere output direkte til annoncer, Canva, Google Ads
              eller som kundeoplæg.
            </p>
          </div>
        </div>
      </section>

      <section className="finalCta">
        <div>
          <div className="pill">Klar til at komme i gang?</div>

          <h2>Stop med at starte din marketing fra nul.</h2>

          <p>
            Brug AdPilot til at spare tid og skabe mere professionelle
            kampagner, kreativer og landing pages.
          </p>
        </div>

        <a
          href={stripeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn primary"
        >
          Start AdPilot Pro
        </a>
      </section>

      <section id="contact" className="contact">
        <div>
          <div className="pill">Kontakt</div>
          <h2>Vil du høre mere?</h2>
          <p>Send en besked om demo, spørgsmål eller samarbejde.</p>
        </div>

        <form className="contactForm" action="/tak" method="get">
          <label>
            Navn
            <input name="navn" placeholder="Dit navn" required />
          </label>

          <label>
            Email
            <input
              name="email"
              type="email"
              placeholder="din@email.dk"
              required
            />
          </label>

          <label>
            Virksomhed
            <input name="virksomhed" placeholder="Firmanavn" />
          </label>

          <label>
            Besked
            <textarea name="besked" placeholder="Skriv din besked" required />
          </label>

          <button className="btn primary full" type="submit">
            Send besked
          </button>
        </form>
      </section>

      <footer className="footer">
        <div>
          <strong>AdPilot</strong>
          <p>AI marketingværktøj til virksomheder og bureauer.</p>
        </div>

        <div>
          <h4>Juridisk</h4>
          <a href="/handelsbetingelser">Handelsbetingelser</a>
          <a href="/privatlivspolitik">Privatlivspolitik</a>
          <a href="/cookiepolitik">Cookiepolitik</a>
        </div>

        <div>
          <h4>Kontakt</h4>
          <a href="mailto:kontakt@adpilot.dk">kontakt@adpilot.dk</a>
          <span>Danmark</span>
        </div>
      </footer>
    </main>
  );
}
