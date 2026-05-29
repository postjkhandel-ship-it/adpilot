export default function Home() {
  const stripeLink = "https://buy.stripe.com/fZudR1dNoabSaCEeTbebu00";

  return (
    <main className="landing">
      <header className="header">
        <a href="/" className="brand"><span>A</span>AdPilot</a>

        <nav>
          <a href="#features">Funktioner</a>
          <a href="#pricing">Pris</a>
          <a href="#contact" className="navBtn">Kontakt</a>
        </nav>
      </header>

      <section className="hero">
        <div>
          <div className="badge">AI Ads Generator</div>
          <h1>Lav professionelle annoncekampagner på få minutter.</h1>
          <p>
            Generer Meta Ads, Google Ads, hooks, headlines, retargeting og
            kreative idéer til næsten alle typer virksomheder.
          </p>

          <div className="buttons">
            <a href="/dashboard" className="btn primary">Prøv gratis demo</a>
            <a href={stripeLink} target="_blank" className="btn secondary">Start for 299 kr/md</a>
          </div>

          <div className="trustline">
            <span>✓ Ubegrænset generering</span>
            <span>✓ Dansk output</span>
            <span>✓ Alle brancher</span>
          </div>
        </div>

        <div className="preview">
          <h3>Kampagne genereret</h3>

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
            <p>Fang besøgende og varme kunder.</p>
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

      <section className="proTrust">
        <div className="trustBox dark">
          <span>Hvorfor AdPilot?</span>
          <h2>Bygget til virksomheder der vil lave bedre annoncer hurtigere</h2>
          <p>
            Få professionel kampagnestruktur uden at bruge timer på idéer,
            hooks og annonceformuleringer.
          </p>
        </div>

        <div className="trustBox">
          <strong>01</strong>
          <h3>Branche-smart output</h3>
          <p>Tilpasser tekster til mål, branche, produkt, lokation og budget.</p>
        </div>

        <div className="trustBox">
          <strong>02</strong>
          <h3>Klar til kunder</h3>
          <p>Perfekt til freelancere og bureauer der skal lave kampagneforslag hurtigt.</p>
        </div>

        <div className="trustBox">
          <strong>03</strong>
          <h3>Copy/paste klar</h3>
          <p>Outputtet kan bruges direkte som brief, annonceidé eller kampagneoplæg.</p>
        </div>
      </section>

      <section className="howItWorks">
        <div className="sectionHead">
          <div className="badge">Sådan virker det</div>
          <h2>Fra idé til kampagne på 3 trin</h2>
          <p>AdPilot gør det nemt at lave professionelle annonceoplæg uden at starte fra nul.</p>
        </div>

        <div className="stepGrid">
          <div className="stepCard">
            <span>01</span>
            <h3>Udfyld brief</h3>
            <p>Indtast virksomhed, branche, produkt, målgruppe, tilbud og budget.</p>
          </div>

          <div className="stepCard">
            <span>02</span>
            <h3>Generer kampagne</h3>
            <p>Få Meta Ads, Google Ads, hooks, headlines, retargeting og creative idéer.</p>
          </div>

          <div className="stepCard">
            <span>03</span>
            <h3>Kopiér og brug</h3>
            <p>Brug output direkte i Ads Manager, Google Ads eller send det til en kunde.</p>
          </div>
        </div>
      </section>

      <section className="socialProofBar">
        <span>✓ Dansk annonce-output</span>
        <span>✓ Klar til Meta Ads</span>
        <span>✓ Google Ads forslag</span>
        <span>✓ Ubegrænset generering</span>
        <span>✓ Spar timer hver uge</span>
      </section>

      <section id="features" className="section">
        <div className="sectionHead">
          <div className="badge">Funktioner</div>
          <h2>Alt du skal bruge til en kampagne</h2>
          <p>Udfyld få felter og få en komplet annoncepakke klar til copy/paste.</p>
        </div>

        <div className="grid">
          <div className="card"><h3>Meta Ads</h3><p>Primær tekst, hooks, headlines og CTA.</p></div>
          <div className="card"><h3>Google Ads</h3><p>Headlines, descriptions og sitelinks.</p></div>
          <div className="card"><h3>Retargeting</h3><p>Tekster til varme kunder og besøgende.</p></div>
          <div className="card"><h3>Creative idéer</h3><p>UGC, før/efter og tilbudsannoncer.</p></div>
        </div>
      </section>

      <section className="mockupSection">
        <div className="mockupText">
          <div className="badge">Dashboard preview</div>
          <h2>Et kampagneværktøj der føles professionelt fra første klik</h2>
          <p>
            Brug AdPilot til at lave hurtige kampagneoplæg, teste nye vinkler og
            skabe bedre annonceidéer uden at bruge timer på tekstskrivning.
          </p>
        </div>

        <div className="bigMockup">
          <div className="mockupTop">
            <span></span><span></span><span></span>
          </div>

          <div className="mockupStats">
            <div><b>92%</b><small>Kampagnebrief klar</small></div>
            <div><b>5</b><small>Ads genereret</small></div>
            <div><b>10+</b><small>Hooks</small></div>
          </div>

          <div className="mockupRow">
            <strong>Meta Ads</strong>
            <p>Problem/løsning, UGC, trust og retargeting-annoncer.</p>
          </div>

          <div className="mockupRow">
            <strong>Budget split</strong>
            <p>70% cold audience · 30% retargeting</p>
          </div>

          <div className="mockupRow">
            <strong>Launch klar</strong>
            <p>Kopiér output og brug det direkte som kampagnebrief.</p>
          </div>
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

          <a href={stripeLink} target="_blank" className="btn primary full">
            Start abonnement – 299 kr/md
          </a>

          <div className="paymentTrust">
            ✓ Sikker betaling med Stripe <br />
            ✓ Opsig når som helst <br />
            ✓ Ingen binding <br />
            ✓ Instant adgang
          </div>
        </div>
      </section>

      <section className="roiSection">
        <div className="roiCard dark">
          <div className="badge">Hvorfor betale 299 kr/md?</div>

          <h2>Hvis AdPilot sparer dig bare få timer — har den betalt sig selv.</h2>

          <p>
            Stop med at bruge timer på hooks, annoncer, headlines og brainstorms.
            AdPilot hjælper dig med hurtigere kampagner, bedre struktur og mere
            professionelt output.
          </p>

          <div className="roiStats">
            <div><strong>10x</strong><span>hurtigere kampagneidéer</span></div>
            <div><strong>5 min</strong><span>fra brief til kampagne</span></div>
            <div><strong>299 kr</strong><span>pr måned</span></div>
          </div>

          <div className="ctaRow">
            <a href={stripeLink} target="_blank" className="btn primary">Start for 299 kr/md</a>
            <a href="#contact" className="btn secondary">Kontakt os</a>
          </div>
        </div>

        <div className="roiChecklist">
          <div className="checkItem"><span>✓</span><div><strong>Mere professionelt output</strong><p>Kampagner der føles mere strukturerede og gennemarbejdede.</p></div></div>
          <div className="checkItem"><span>✓</span><div><strong>Perfekt til bureauer</strong><p>Lav hurtige oplæg til kunder uden at starte fra nul.</p></div></div>
          <div className="checkItem"><span>✓</span><div><strong>Spar timer hver uge</strong><p>Få annoncer, hooks og idéer langt hurtigere.</p></div></div>
          <div className="checkItem"><span>✓</span><div><strong>Klar til copy/paste</strong><p>Brug output direkte i Meta Ads eller Google Ads.</p></div></div>
        </div>
      </section>

      <section className="faqSection">
        <div className="sectionHead">
          <div className="badge">FAQ</div>
          <h2>Ofte stillede spørgsmål</h2>
        </div>

        <div className="faqGrid">
          <div className="faqItem"><h3>Virker AdPilot til alle virksomheder?</h3><p>Ja. Den kan bruges til webshops, lokale firmaer, klinikker, håndværkere, restauranter, freelancere og bureauer.</p></div>
          <div className="faqItem"><h3>Skal jeg kunne marketing?</h3><p>Nej. Du udfylder bare en kort brief, og AdPilot laver struktur, tekster og annonceidéer for dig.</p></div>
          <div className="faqItem"><h3>Er output klar til brug?</h3><p>Ja. Teksterne er lavet til copy/paste og kan bruges som annoncer, kampagnebrief eller kundeoplæg.</p></div>
          <div className="faqItem"><h3>Kan bureauer bruge det?</h3><p>Ja. Det er oplagt til hurtige kampagneforslag, pitchmateriale og annonceidéer til kunder.</p></div>
        </div>
      </section>

      <section className="finalCta">
        <div>
          <div className="badge">Klar til at komme i gang?</div>
          <h2>Start med at generere bedre kampagner i dag</h2>
          <p>
            Brug AdPilot til at lave annoncepakker hurtigere, spare tid og skabe
            mere professionelle kampagneoplæg.
          </p>
        </div>

        <a href={stripeLink} target="_blank" className="btn primary">Start for 299 kr/md</a>
      </section>

      <section id="contact" className="contact">
        <div>
          <div className="badge">Kontakt</div>
          <h2>Vil du høre mere?</h2>
          <p>Send en besked om demo, spørgsmål eller samarbejde.</p>
        </div>

        <form className="contactForm" action="/tak" method="get">
          <label>Navn<input name="navn" placeholder="Dit navn" required /></label>
          <label>Email<input name="email" type="email" placeholder="din@email.dk" required /></label>
          <label>Virksomhed<input name="virksomhed" placeholder="Firmanavn" /></label>
          <label>Besked<textarea name="besked" placeholder="Skriv din besked" required></textarea></label>
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
