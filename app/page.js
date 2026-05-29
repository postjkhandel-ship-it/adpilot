export default function Home() {
  const stripeLink = "https://buy.stripe.com/fZudR1dNoabSaCEeTbebu00";

  return (
    <main className="site">
      <header className="nav">
        <a href="/" className="logo"><span>A</span>AdPilot</a>
        <div className="navLinks">
          <a href="#features">Funktioner</a>
          <a href="#pricing">Pris</a>
          <a href="#contact">Kontakt</a>
          <a href={stripeLink} target="_blank" className="navCta">Start Pro</a>
        </div>
      </header>

      <section className="hero">
        <div className="heroCopy">
          <div className="pill">AI Ads Generator til virksomheder</div>
          <h1>Lav kampagner der ligner de er lavet af et bureau.</h1>
          <p>
            AdPilot genererer Meta Ads, Google Ads, hooks, headlines,
            retargeting og kreative annonceidéer på få minutter.
          </p>

          <div className="heroBtns">
            <a href="/dashboard" className="btn primary">Generér din første kampagne</a>
            <a href={stripeLink} target="_blank" className="btn dark">Start AdPilot Pro</a>
          </div>

          <div className="trustLine">
            <span>✓ Dansk output</span>
            <span>✓ Alle brancher</span>
            <span>✓ Copy/paste klar</span>
            <span>✓ 299 kr/md</span>
          </div>
        </div>

        <div className="heroMockup">
          <div className="mockHeader">
            <span></span><span></span><span></span>
          </div>

          <div className="mockTitle">Kampagne genereret</div>

          <div className="mockStats">
            <div><b>5</b><small>Meta Ads</small></div>
            <div><b>10+</b><small>Hooks</small></div>
            <div><b>1</b><small>Strategi</small></div>
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
            <strong>Creative idéer</strong>
            <p>UGC-vinkler, før/efter, testimonials og tilbudsannoncer.</p>
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
      </section>

      <section className="problem">
        <div className="problemCard darkCard">
          <span>Problemet</span>
          <h2>Virksomheder spilder tid på svage annonceidéer.</h2>
          <p>
            Mange kampagner starter uden stærk hook, struktur eller retargeting.
            Det gør annoncer langsommere at producere og sværere at skalere.
          </p>
        </div>

        <div className="problemCard">
          <b>01</b>
          <h3>Ingen blank side</h3>
          <p>Få kampagnestruktur, tekster og annoncevinkler med det samme.</p>
        </div>

        <div className="problemCard">
          <b>02</b>
          <h3>Klar til kunder</h3>
          <p>Perfekt til freelancere og bureauer der laver kampagneoplæg.</p>
        </div>

        <div className="problemCard">
          <b>03</b>
          <h3>Hurtigere output</h3>
          <p>Generér komplette kampagner på få minutter i stedet for timer.</p>
        </div>
      </section>

      <section id="features" className="section">
        <div className="sectionHead">
          <div className="pill">Funktioner</div>
          <h2>Alt du skal bruge til annoncekampagner</h2>
          <p>AdPilot samler tekst, strategi og kreative vinkler ét sted.</p>
        </div>

        <div className="featureGrid">
          <div className="card"><h3>Meta Ads</h3><p>Primær tekst, hooks, headlines, CTA’er og beskrivelser.</p></div>
          <div className="card"><h3>Google Ads</h3><p>Headlines, descriptions og sitelinks til søgekampagner.</p></div>
          <div className="card"><h3>Retargeting</h3><p>Tekster til besøgende, klik og varme kunder.</p></div>
          <div className="card"><h3>Creative idéer</h3><p>UGC, før/efter, testimonials og tilbudsannoncer.</p></div>
        </div>
      </section>

      <section className="how">
        <div className="sectionHead">
          <div className="pill">Sådan virker det</div>
          <h2>Fra brief til kampagne på 3 trin</h2>
        </div>

        <div className="steps">
          <div><span>01</span><h3>Udfyld brief</h3><p>Indtast virksomhed, branche, produkt, målgruppe, tilbud og budget.</p></div>
          <div><span>02</span><h3>Generér kampagne</h3><p>Få Meta Ads, Google Ads, hooks, retargeting og creative idéer.</p></div>
          <div><span>03</span><h3>Kopiér og brug</h3><p>Brug output direkte i Ads Manager, Google Ads eller som kundeoplæg.</p></div>
        </div>
      </section>

      <section id="pricing" className="pricing">
        <div className="priceBox">
          <div className="pill">AdPilot Pro</div>
          <h2>299 kr/md</h2>
          <p>Ubegrænset kampagnegenerering til virksomheder, freelancere og bureauer.</p>

          <ul>
            <li>✓ Ubegrænset kampagnegenerering</li>
            <li>✓ Meta Ads + Google Ads forslag</li>
            <li>✓ Retargeting strategier</li>
            <li>✓ Hooks, headlines og creative idéer</li>
            <li>✓ Dansk output</li>
            <li>✓ Klar til copy/paste</li>
          </ul>

          <a href={stripeLink} target="_blank" className="btn primary full">
            Start AdPilot Pro – 299 kr/md
          </a>

          <div className="payTrust">
            ✓ Sikker betaling med Stripe · ✓ Ingen binding · ✓ Opsig når som helst
          </div>
        </div>
      </section>

      <section className="roi">
        <div>
          <div className="pill">Hvorfor betale 299 kr/md?</div>
          <h2>Hvis AdPilot sparer dig få timer, har den betalt sig selv.</h2>
          <p>
            Få hurtigere kampagneproduktion, bedre struktur og mere
            professionelt output uden at starte fra nul.
          </p>
          <a href={stripeLink} target="_blank" className="btn primary">Få adgang til AdPilot</a>
        </div>

        <div className="roiList">
          <div><span>✓</span><b>Mere professionelt output</b><p>Kampagneoplæg der virker mere gennemarbejdede.</p></div>
          <div><span>✓</span><b>Perfekt til bureauer</b><p>Lav hurtige oplæg til kunder uden at starte fra nul.</p></div>
          <div><span>✓</span><b>Spar tid hver uge</b><p>Generér annoncer, hooks og idéer langt hurtigere.</p></div>
        </div>
      </section>

      <section className="faq">
        <div className="sectionHead">
          <div className="pill">FAQ</div>
          <h2>Ofte stillede spørgsmål</h2>
        </div>

        <div className="faqGrid">
          <div><h3>Virker det til alle virksomheder?</h3><p>Ja, AdPilot kan bruges til webshops, lokale firmaer, klinikker, håndværkere, restauranter og bureauer.</p></div>
          <div><h3>Er output klar til brug?</h3><p>Ja, teksterne kan kopieres direkte og bruges som annoncer, kampagnebrief eller kundeoplæg.</p></div>
          <div><h3>Skal jeg kunne marketing?</h3><p>Nej. Du udfylder en kort brief, og AdPilot laver struktur og annonceidéer.</p></div>
          <div><h3>Kan bureauer bruge det?</h3><p>Ja, det er oplagt til kampagneforslag, pitchmateriale og hurtigere kundeoplæg.</p></div>
        </div>
      </section>

      <section className="finalCta">
        <div>
          <div className="pill">Klar til at komme i gang?</div>
          <h2>Generér bedre kampagner allerede i dag.</h2>
          <p>Brug AdPilot til at spare tid og skabe mere professionelle kampagneoplæg.</p>
        </div>
        <a href={stripeLink} target="_blank" className="btn primary">Start AdPilot Pro</a>
      </section>

      <section id="contact" className="contact">
        <div>
          <div className="pill">Kontakt</div>
          <h2>Vil du høre mere?</h2>
          <p>Send en besked om demo, spørgsmål eller samarbejde.</p>
        </div>

        <form className="contactForm" action="/tak" method="get">
          <label>Navn<input name="navn" placeholder="Dit navn" required /></label>
          <label>Email<input name="email" type="email" placeholder="din@email.dk" required /></label>
          <label>Virksomhed<input name="virksomhed" placeholder="Firmanavn" /></label>
          <label>Besked<textarea name="besked" placeholder="Skriv din besked" required /></label>
          <button className="btn primary full" type="submit">Send besked</button>
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
