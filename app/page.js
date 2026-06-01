export default function Home() {
  const stripeLink = "https://buy.stripe.com/fZudR1dNoabSaCEeTbebu00";

  return (
    <main className="site">
      <header className="nav">
        <a href="/" className="logo">
          <span>A</span>AdPilot
        </a>

        <div className="navLinks">
          <a href="#features">Funktioner</a>
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
          <div className="pill">AI annoncegenerator til danske virksomheder</div>

          <h1>
            Lav komplette Meta Ads & Google Ads på få minutter.
          </h1>

          <p>
            AdPilot genererer hooks, annoncetekster, retargeting, Google Ads,
            UGC-idéer og kampagnestruktur — uden at du skal starte fra nul.
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
              <strong>Spar tid</strong>
              <small>Fra blank side til kampagne på minutter</small>
            </div>

            <div className="proofCard">
              <strong>Alle brancher</strong>
              <small>Tilpasser output til firma og målgruppe</small>
            </div>

            <div className="proofCard">
              <strong>Klar til brug</strong>
              <small>Copy/paste direkte i Ads Manager</small>
            </div>
          </div>
        </div>

        <div className="heroMockup">
          <div className="mockHeader">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="mockTitle">Kampagne genereret</div>

          <div className="mockStats">
            <div>
              <b>5</b>
              <small>Meta Ads</small>
            </div>

            <div>
              <b>20</b>
              <small>Hooks</small>
            </div>

            <div>
              <b>6</b>
              <small>Output-typer</small>
            </div>
          </div>

          <div className="mockCard active">
            <strong>Meta Ads</strong>
            <p>Problem/løsning, UGC, trust og retargeting-annoncer.</p>
          </div>

          <div className="mockCard">
            <strong>Google Ads</strong>
            <p>Headlines, descriptions og sitelinks klar til brug.</p>
          </div>

          <div className="mockCard">
            <strong>UGC scripts</strong>
            <p>Videoidéer og scripts til Reels, TikTok og Facebook.</p>
          </div>
        </div>
      </section>

      <section className="valueStack">
        <div className="sectionHead">
          <div className="pill">Værdi for 299 kr/md</div>
          <h2>Alt det her får du i én platform</h2>
          <p>
            Mindre end prisen på én annonce — men nok til at spare dig timer
            hver måned.
          </p>
        </div>

        <div className="valueGrid">
          <div>✓ Meta Ads generator</div>
          <div>✓ Google Ads generator</div>
          <div>✓ Hooks & headlines</div>
          <div>✓ Retargeting kampagner</div>
          <div>✓ UGC scripts</div>
          <div>✓ Kampagnestruktur</div>
          <div>✓ Dansk output</div>
          <div>✓ Klar til copy/paste</div>
        </div>
      </section>

      <section className="beforeAfter">
        <div className="sectionHead">
          <div className="pill">Før / efter</div>
          <h2>Fra blank side til klar kampagne</h2>
        </div>

        <div className="compareGrid">
          <div className="compareCard bad">
            <h3>Før AdPilot</h3>
            <p>❌ Du starter fra nul</p>
            <p>❌ Du mangler hooks</p>
            <p>❌ Annoncer tager for lang tid</p>
            <p>❌ Svært at finde nye vinkler</p>
            <p>❌ Retargeting bliver glemt</p>
          </div>

          <div className="compareCard good">
            <h3>Med AdPilot</h3>
            <p>✅ Kampagne klar på minutter</p>
            <p>✅ Hooks og headlines genereres</p>
            <p>✅ Meta Ads + Google Ads samlet</p>
            <p>✅ Flere annoncevinkler</p>
            <p>✅ Retargeting klar til brug</p>
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
          <p>
            Brug det direkte som annonce, kundeoplæg eller kampagnebrief.
          </p>
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
            <strong>Headline:</strong>
            <br />
            Book din behandling i dag
          </p>

          <p>
            <strong>CTA:</strong>
            <br />
            Book tid
          </p>
        </div>
      </section>

      <section id="features" className="section">
        <div className="sectionHead">
          <div className="pill">Funktioner</div>
          <h2>Bygget til hurtigere annonceproduktion</h2>
          <p>
            AdPilot samler de vigtigste kampagneelementer i ét simpelt
            dashboard.
          </p>
        </div>

        <div className="featureGrid">
          <div className="card">
            <h3>Meta Ads</h3>
            <p>Primær tekst, hooks, headlines, CTA’er og beskrivelser.</p>
          </div>

          <div className="card">
            <h3>Google Ads</h3>
            <p>Headlines, descriptions og sitelinks til søgekampagner.</p>
          </div>

          <div className="card">
            <h3>Retargeting</h3>
            <p>Tekster til besøgende, klik og varme kunder.</p>
          </div>

          <div className="card">
            <h3>UGC scripts</h3>
            <p>Videoidéer og scripts til Reels, TikTok og annoncer.</p>
          </div>
        </div>
      </section>

      <section className="how">
        <div className="sectionHead">
          <div className="pill">Sådan virker det</div>
          <h2>Fra kort brief til kampagne på 3 trin</h2>
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
              Vælg komplet kampagne, Meta Ads, Google Ads, hooks, retargeting
              eller UGC scripts.
            </p>
          </div>

          <div>
            <span>03</span>
            <h3>Kopiér og brug</h3>
            <p>
              Brug output direkte i Ads Manager, Google Ads eller som
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
            Ubegrænset kampagnegenerering til virksomheder, freelancere og
            bureauer.
          </p>

          <ul>
            <li>✓ Ubegrænset kampagnegenerering</li>
            <li>✓ Meta Ads + Google Ads forslag</li>
            <li>✓ Retargeting strategier</li>
            <li>✓ Hooks, headlines og UGC scripts</li>
            <li>✓ Dansk output</li>
            <li>✓ Klar til copy/paste</li>
            <li>✓ Personlig adgangskode</li>
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
            <h3>Skal jeg være god til marketing?</h3>
            <p>
              Nej. Du udfylder en kort brief, og AdPilot laver struktur,
              hooks og annonceidéer.
            </p>
          </div>

          <div>
            <h3>Er teksterne klar til brug?</h3>
            <p>
              Ja. Du kan kopiere output direkte til Meta Ads, Google Ads eller
              bruge det som kundeoplæg.
            </p>
          </div>

          <div>
            <h3>Hvorfor koster det 299 kr/md?</h3>
            <p>
              Fordi det kan spare timer hver måned og give et professionelt
              udgangspunkt for dine kampagner.
            </p>
          </div>
        </div>
      </section>

      <section className="finalCta">
        <div>
          <div className="pill">Klar til at komme i gang?</div>

          <h2>Stop med at starte dine annoncer fra nul.</h2>

          <p>
            Brug AdPilot til at spare tid og skabe mere professionelle
            kampagneoplæg.
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
          <p>AI annoncegenerator til virksomheder og bureauer.</p>
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
