"use client";

import { useState } from "react";

export default function Dashboard() {
  const stripeLink = "https://buy.stripe.com/fZudR1dNoabSaCEeTbebu00";

  const [accessCode, setAccessCode] = useState("");
  const [hasAccess, setHasAccess] = useState(false);
  const [customerEmail, setCustomerEmail] = useState("");
  const [checking, setChecking] = useState(false);

  const [result, setResult] = useState("");
  const [copied, setCopied] = useState(false);

  const [form, setForm] = useState({
    business: "",
    industry: "",
    product: "",
    audience: "",
    offer: "",
    budget: "",
    goal: "Salg",
    location: "",
    outputType: "Komplet kampagne",
    angle: "Problem/løsning",
  });

  function update(field, value) {
    setForm({
      ...form,
      [field]: value,
    });
  }

  function getCTA(goal) {
    if (goal === "Leads") return "Få tilbud";
    if (goal === "Bookinger") return "Book tid";
    if (goal === "Trafik") return "Læs mere";
    return "Kom i gang";
  }

  function getFocus(angle) {
    if (angle === "UGC style") {
      return "Skriv naturligt og personligt, som om en kunde eller ejer taler direkte til kameraet.";
    }

    if (angle === "Trust") {
      return "Fokusér på tryghed, kvalitet, erfaring, proces og hvorfor kunden kan stole på virksomheden.";
    }

    if (angle === "Direkte salg") {
      return "Gør teksten kort, tydelig og handlingsorienteret med en stærk CTA.";
    }

    if (angle === "Tilbud") {
      return "Fremhæv pris, tilbud, urgency og hvorfor kunden bør handle nu.";
    }

    if (angle === "Retargeting") {
      return "Fokusér på kunder der allerede har vist interesse, men ikke har taget næste skridt.";
    }

    return "Start med kundens problem, vis konsekvensen og præsenter løsningen tydeligt.";
  }

  async function checkAccessCode() {
    setChecking(true);

    try {
      const res = await fetch("/api/check-code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code: accessCode.trim(),
        }),
      });

      const data = await res.json();

      if (data.success) {
        setHasAccess(true);
        setCustomerEmail(data.customer_email || "");
      } else {
        alert("Forkert adgangskode");
      }
    } catch {
      alert("Der opstod en fejl. Prøv igen.");
    }
const offer = form.offer
  ? "Fra " + form.offer + " kr."
  : "Aktuelt tilbud.";
    setChecking(false);
  }

  async function copyText(text) {
    await navigator.clipboard.writeText(text);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  }

  function generateCampaign() {
    const business = form.business || "virksomheden";
    const industry = form.industry || "branchen";
    const product = form.product || "produktet/servicen";
    const audience = form.audience || "målgruppen";
    const location = form.location || "Danmark";
    const offer = form.offer
      ? "Fra " + form.offer + " kr."
      : "Aktuelt tilbud.";
    const budget = Number(form.budget) || 150;
    const cta = getCTA(form.goal);
    const focus = getFocus(form.angle);

    const metaAds =
      "META ADS FOR " +
      business.toUpperCase() +
      "\\n\\n" +
      "Branche: " +
      industry +
      "\\n" +
      "Produkt/service: " +
      product +
      "\\n" +
      "Målgruppe: " +
      audience +
      "\\n" +
      "Lokation: " +
      location +
      "\\n" +
      "Tilbud: " +
      offer +
      "\\n" +
      "Annoncevinkel: " +
      form.angle +
      "\\n\\n" +
      "Anbefalet fokus:\\n" +
      focus +
      "\\n\\n" +
      "━━━━━━━━━━━━━━━━━━━━\\n\\n" +
      "ANNONCE 1 — PROBLEM / LØSNING\\n\\n" +
      "Hook:\\n" +
      "Har du brug for en bedre løsning til " +
      product +
      "?\\n\\n" +
      "Primær tekst:\\n" +
      "Mange " +
      audience +
      " har et behov inden for " +
      product +
      ", men får det ikke løst, fordi det virker uoverskueligt, tidskrævende eller svært at vælge den rigtige løsning.\\n\\n" +
      "Hos " +
      business +
      " får du en enkel og professionel løsning, der hjælper dig med at komme videre uden unødvendigt besvær.\\n\\n" +
      offer +
      "\\n\\n" +
      "Headline:\\n" +
      "Professionel løsning til " +
      audience +
      "\\n\\n" +
      "CTA:\\n" +
      cta +
      "\\n\\n" +
      "━━━━━━━━━━━━━━━━━━━━\\n\\n" +
      "ANNONCE 2 — UGC STYLE\\n\\n" +
      "Hook:\\n" +
      '"Jeg skulle bare have gjort det her noget før."\\n\\n' +
      "Primær tekst:\\n" +
      "Hvis du har overvejet " +
      product +
      ", men ikke har fået gjort noget ved det endnu, så er det her dit tegn.\\n\\n" +
      business +
      " gør det nemt for " +
      audience +
      " at komme i gang med en løsning, der føles tryg, enkel og professionel fra start.\\n\\n" +
      offer +
      "\\n\\n" +
      "Headline:\\n" +
      "Derfor vælger flere " +
      business +
      "\\n\\n" +
      "CTA:\\n" +
      cta +
      "\\n\\n" +
      "━━━━━━━━━━━━━━━━━━━━\\n\\n" +
      "ANNONCE 3 — TRUST\\n\\n" +
      "Hook:\\n" +
      "Vælg en løsning der føles tryg fra start.\\n\\n" +
      "Primær tekst:\\n" +
      "Når du skal vælge en løsning inden for " +
      industry +
      ", vil du gerne føle dig sikker på, at det bliver gjort ordentligt.\\n\\n" +
      "Hos " +
      business +
      " får du tydelig kommunikation, professionel hjælp og fokus på det resultat, du ønsker.\\n\\n" +
      offer +
      "\\n\\n" +
      "Headline:\\n" +
      "Trygt valg inden for " +
      industry +
      "\\n\\n" +
      "CTA:\\n" +
      cta +
      "\\n\\n" +
      "━━━━━━━━━━━━━━━━━━━━\\n\\n" +
      "ANNONCE 4 — DIREKTE SALG\\n\\n" +
      "Hook:\\n" +
      "Klar til at tage næste skridt?\\n\\n" +
      "Primær tekst:\\n" +
      "Med " +
      product +
      " fra " +
      business +
      " får " +
      audience +
      " en nemmere vej til et professionelt resultat.\\n\\n" +
      "Hvis du har overvejet det, er nu et godt tidspunkt at komme i gang.\\n\\n" +
      offer +
      "\\n\\n" +
      "Headline:\\n" +
      "Kom i gang med " +
      product +
      "\\n\\n" +
      "CTA:\\n" +
      cta;

    const hooks =
      "20 PROFESSIONELLE HOOKS\\n\\n" +
      "1. Har du brug for en bedre løsning til " +
      product +
      "?\\n" +
      "2. Få professionel hjælp uden at gøre processen besværlig.\\n" +
      "3. Derfor vælger flere " +
      business +
      ".\\n" +
      "4. Gør det nemmere at komme i gang med " +
      product +
      ".\\n" +
      "5. En tryg løsning til " +
      audience +
      ".\\n" +
      "6. Få et bedre resultat uden unødvendigt besvær.\\n" +
      "7. Leder du efter " +
      product +
      " i " +
      location +
      "?\\n" +
      "8. Stop med at udskyde det.\\n" +
      "9. Få hjælp fra nogen der ved hvad de laver.\\n" +
      "10. Klar til at tage næste skridt?\\n" +
      "11. Professionel løsning inden for " +
      industry +
      ".\\n" +
      "12. Få styr på " +
      product +
      " på en enkel måde.\\n" +
      "13. En bedre løsning starter her.\\n" +
      "14. Gør det nemt at vælge rigtigt.\\n" +
      "15. Se hvordan " +
      business +
      " kan hjælpe.\\n" +
      "16. En enklere vej til et bedre resultat.\\n" +
      "17. Kom godt i gang i dag.\\n" +
      "18. Det her gør valget nemmere.\\n" +
      "19. Til dig der vil have et professionelt resultat.\\n" +
      "20. Få en løsning der passer til dit behov.";

    const googleAds =
      "GOOGLE ADS FOR " +
      business.toUpperCase() +
      "\\n\\n" +
      "Headlines:\\n" +
      "- " +
      product +
      "\\n" +
      "- " +
      business +
      "\\n" +
      "- " +
      product +
      " " +
      location +
      "\\n" +
      "- Professionel løsning\\n" +
      "- Kom i gang i dag\\n" +
      "- " +
      offer +
      "\\n" +
      "- Få hjælp nu\\n" +
      "- Nemt og professionelt\\n" +
      "- Til " +
      audience +
      "\\n" +
      "- Få et tilbud\\n" +
      "- Book i dag\\n" +
      "- Tryg proces\\n" +
      "- God service\\n" +
      "- Start nu\\n" +
      "- " +
      industry +
      "\\n\\n" +
      "Descriptions:\\n" +
      "- Få professionel hjælp til " +
      product +
      " hos " +
      business +
      ". Kom nemt i gang i dag.\\n" +
      "- Leder du efter " +
      product +
      " i " +
      location +
      "? " +
      business +
      " hjælper dig videre.\\n" +
      "- " +
      offer +
      " En enkel løsning med fokus på resultat og tryghed.\\n" +
      "- Professionel service til " +
      audience +
      ". Kontakt " +
      business +
      " i dag.\\n\\n" +
      "Sitelinks:\\n" +
      "1. Se priser\\n" +
      "2. Kontakt os\\n" +
      "3. Sådan virker det\\n" +
      "4. Kundeanmeldelser";

    const retargeting =
      "RETARGETING FOR " +
      business.toUpperCase() +
      "\\n\\n" +
      "Målgrupper:\\n" +
      "- Website besøgende sidste 30 dage\\n" +
      "- Klik på annoncer sidste 30 dage\\n" +
      "- Facebook/Instagram engagement\\n" +
      "- Formularstart hvis relevant\\n\\n" +
      "Annonce 1:\\n" +
      "Du har allerede vist interesse for " +
      product +
      ".\\n\\n" +
      "Hvis du stadig overvejer det, kan " +
      business +
      " hjælpe dig videre med en enkel og professionel løsning.\\n\\n" +
      offer +
      "\\n\\n" +
      "CTA:\\n" +
      cta +
      "\\n\\n" +
      "Annonce 2:\\n" +
      "Stadig i tvivl?\\n\\n" +
      "Det er helt normalt at overveje tingene en ekstra gang. Hos " +
      business +
      " får du en tryg proces og professionel hjælp fra start.\\n\\n" +
      "CTA:\\n" +
      cta;

    const ugc =
      "UGC SCRIPTS FOR " +
      business.toUpperCase() +
      "\\n\\n" +
      "SCRIPT 1 — PROBLEM/LØSNING\\n\\n" +
      "Hook:\\n" +
      '"Jeg havde overvejet ' +
      product +
      ', men fik det aldrig gjort."\\n\\n' +
      "Body:\\n" +
      '"Jeg troede det ville være besværligt, men ' +
      business +
      ' gjorde processen meget nemmere. Hvis du også har udskudt det, så er det her et godt sted at starte."\\n\\n' +
      "CTA:\\n" +
      '"' +
      cta +
      '"\\n\\n' +
      "━━━━━━━━━━━━━━━━━━━━\\n\\n" +
      "SCRIPT 2 — TRUST\\n\\n" +
      "Hook:\\n" +
      '"Jeg ville bare gerne vælge nogen, der virkede professionelle."\\n\\n' +
      "Body:\\n" +
      '"Når man skal vælge ' +
      product +
      ", vil man gerne føle sig tryg. Hos " +
      business +
      ' var processen tydelig, enkel og professionel fra start."\\n\\n' +
      "CTA:\\n" +
      '"' +
      cta +
      '"';
const staticAds =
  "STATIC ANNONCER FOR " +
  business.toUpperCase() +
  "\\n\\n" +
  "STATIC 1 — PROBLEM / LØSNING\\n\\n" +
  "Overskrift på billedet:\\n"
    const landingPage =
  "LANDING PAGE TEKSTER FOR " +
  business.toUpperCase() +
  "\\n\\n" +
  "HERO SEKTION\\n\\n" +
  "Overskrift:\\n" +
  "Få en professionel løsning til " +
  product +
  "\\n\\n" +
  "Underoverskrift:\\n" +
  business +
  " hjælper " +
  audience +
  " med " +
  product +
  " på en enkel, tryg og professionel måde.\\n\\n" +
  "CTA-knap:\\n" +
  cta +
  "\\n\\n" +
  "━━━━━━━━━━━━━━━━━━━━\\n\\n" +
  "USP SEKTION\\n\\n" +
  "USP 1:\\n" +
  "En nemmere måde at komme i gang med " +
  product +
  ".\\n\\n" +
  "USP 2:\\n" +
  "Professionel hjælp fra start til slut.\\n\\n" +
  "USP 3:\\n" +
  "Tydelig proces, stærkere resultat og mindre besvær.\\n\\n" +
  "━━━━━━━━━━━━━━━━━━━━\\n\\n" +
  "PROBLEM / LØSNING\\n\\n" +
  "Problem:\\n" +
  "Mange " +
  audience +
  " udskyder " +
  product +
  ", fordi det virker uoverskueligt eller svært at vælge den rigtige løsning.\\n\\n" +
  "Løsning:\\n" +
  business +
  " gør processen nemmere og hjælper dig trygt videre med en løsning, der passer til dit behov.\\n\\n" +
  "━━━━━━━━━━━━━━━━━━━━\\n\\n" +
  "SOCIAL PROOF\\n\\n" +
  "Tekst:\\n" +
  "Flere vælger " +
  business +
  ", fordi de vil have en løsning der er enkel, professionel og tryg fra start.\\n\\n" +
  "━━━━━━━━━━━━━━━━━━━━\\n\\n" +
  "FAQ\\n\\n" +
  "Spørgsmål 1:\\n" +
  "Hvordan kommer jeg i gang?\\n\\n" +
  "Svar:\\n" +
  "Du kontakter " +
  business +
  ", og så hjælper vi dig videre med næste skridt.\\n\\n" +
  "Spørgsmål 2:\\n" +
  "Hvem passer løsningen til?\\n\\n" +
  "Svar:\\n" +
  "Den passer til " +
  audience +
  ", der ønsker en mere professionel løsning til " +
  product +
  ".\\n\\n" +
  "Spørgsmål 3:\\n" +
  "Hvad koster det?\\n\\n" +
  "Svar:\\n" +
  offer +
  "\\n\\n" +
  "━━━━━━━━━━━━━━━━━━━━\\n\\n" +
  "AFSLUTTENDE CTA\\n\\n" +
  "Overskrift:\\n" +
  "Klar til at tage næste skridt?\\n\\n" +
  "Tekst:\\n" +
  "Kom i gang med " +
  product +
  " hos " +
  business +
  " i dag.\\n\\n" +
  "CTA:\\n" +
  cta;
    let output = "";

    if (form.outputType === "Kun Meta Ads") {
      output = metaAds;
    }

    if (form.outputType === "Kun Google Ads") {
      output = googleAds;
    }

    if (form.outputType === "Kun Hooks") {
      output = hooks;
    }

    if (form.outputType === "Retargeting") {
      output = retargeting;
    }

    if (form.outputType === "UGC scripts") {
      output = ugc;
    }
    if (form.outputType === "Static annoncer") {
  output = staticAds;
    }

    if (form.outputType === "Landing Page") {
  output = landingPage;
    } 
    if (form.outputType === "Komplet kampagne") {
      output =
        "KOMPLET KAMPAGNE FOR " +
        business.toUpperCase() +
        "\\n\\n" +
        metaAds +
        "\\n\\n" +
        hooks +
        "\\n\\n" +
        googleAds +
        "\\n\\n" +
        retargeting +
        "\\n\\n" +
        ugc +
        "\\n\\n" +
        "KAMPAGNESTRUKTUR\\n\\n" +
        "Cold kampagne:\\n" +
        "- Broad målgruppe\\n" +
        "- 4-6 creatives\\n" +
        "- Test problem/løsning, trust, direkte salg og UGC\\n" +
        "- Budget: " +
        Math.round(budget * 0.7) +
        " kr/dag\\n\\n" +
        "Retargeting:\\n" +
        "- Website besøgende 30 dage\\n" +
        "- Engagement 365 dage\\n" +
        "- Budget: " +
        Math.round(budget * 0.3) +
        " kr/dag\\n\\n" +
        "Testplan:\\n" +
        "Dag 1-3: Test 4-6 creatives.\\n" +
        "Dag 4-7: Sluk svage annoncer.\\n" +
        "Efter 7 dage: Skaler vinderen 20-30%.";
    }

    setResult(output);
    setCopied(false);
  }

  if (!hasAccess) {
    return (
      <main className="accessPage">
        <div className="accessBox">
          <div className="dashBadge">AdPilot Pro</div>

          <h1>Adgang til dashboard</h1>

          <p>
            Indtast din personlige adgangskode for at åbne AdPilot Pro.
          </p>

          <input
            value={accessCode}
            onChange={(e) => setAccessCode(e.target.value)}
            placeholder="Indtast adgangskode"
          />

          <button onClick={checkAccessCode} disabled={checking}>
            {checking ? "Tjekker..." : "Åbn dashboard"}
          </button>

          <a href={stripeLink} target="_blank" rel="noopener noreferrer">
            Start AdPilot Pro – 299 kr/md
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="dashPage">
      <header className="dashNav">
        <a href="/" className="dashLogo">
          <span>A</span>AdPilot
        </a>

        <div className="dashNavRight">
          <span>{customerEmail}</span>
          <a href="/">Forside</a>
        </div>
      </header>

      <section className="dashHero">
        <div className="dashBadge">AI Campaign Generator</div>

        <h1>Generer professionelle annoncetekster</h1>

        <p>
          Universelt output til alle brancher — baseret på virksomhed,
          produkt, målgruppe, annoncevinkel og tilbud.
        </p>
      </section>

      <section className="dashLayout">
        <div className="dashCard">
          <h2>Kampagnebrief</h2>

          <p>
            Udfyld felterne præcist. Generatoren tilpasser teksten til
            det firma, du skriver.
          </p>

          <div className="dashFormGrid">
            <Field label="Virksomhedsnavn">
              <input
                value={form.business}
                onChange={(e) => update("business", e.target.value)}
                placeholder="Fx Klinik Nord"
              />
            </Field>

            <Field label="Branche">
              <input
                value={form.industry}
                onChange={(e) => update("industry", e.target.value)}
                placeholder="Fx kosmetisk klinik"
              />
            </Field>

            <Field label="Produkt/service">
              <input
                value={form.product}
                onChange={(e) => update("product", e.target.value)}
                placeholder="Fx ansigtsbehandling"
              />
            </Field>

            <Field label="Målgruppe">
              <input
                value={form.audience}
                onChange={(e) => update("audience", e.target.value)}
                placeholder="Fx kvinder 25-55"
              />
            </Field>

            <Field label="Tilbud/pris">
              <input
                value={form.offer}
                onChange={(e) => update("offer", e.target.value)}
                placeholder="Fx 499"
              />
            </Field>

            <Field label="Budget pr dag">
              <input
                value={form.budget}
                onChange={(e) => update("budget", e.target.value)}
                placeholder="Fx 150"
              />
            </Field>

            <Field label="Lokation">
              <input
                value={form.location}
                onChange={(e) => update("location", e.target.value)}
                placeholder="Fx København"
              />
            </Field>

            <Field label="Målsætning">
              <select
                value={form.goal}
                onChange={(e) => update("goal", e.target.value)}
              >
                <option>Salg</option>
                <option>Leads</option>
                <option>Bookinger</option>
                <option>Trafik</option>
              </select>
            </Field>

            <Field label="Output type">
              <select
                value={form.outputType}
                onChange={(e) => update("outputType", e.target.value)}
              >
                <option>Komplet kampagne</option>
                <option>Kun Meta Ads</option>
                <option>Kun Google Ads</option>
                <option>Kun Hooks</option>
                <option>Retargeting</option>
                <option>UGC scripts</option>
                <option>Static annoncer</option>
                <option>Landing Page</option>  
              </select>
            </Field>

            <Field label="Annoncevinkel">
              <select
                value={form.angle}
                onChange={(e) => update("angle", e.target.value)}
              >
                <option>Problem/løsning</option>
                <option>UGC style</option>
                <option>Trust</option>
                <option>Direkte salg</option>
                <option>Tilbud</option>
                <option>Retargeting</option>
              </select>
            </Field>
          </div>

          <button className="dashGenerate" onClick={generateCampaign}>
            Generer {form.outputType}
          </button>
        </div>
      </section>

      {result && (
        <section className="dashResult lightOutput">
          <div className="dashResultTop">
            <div>
              <div className="dashBadge">Færdigt output</div>
              <h2>Dine annoncetekster</h2>
            </div>

            <div className="outputToolbar">
              <button onClick={() => copyText(result)}>
                {copied ? "Kopieret ✓" : "Kopiér"}
              </button>

              <button className="dangerLight" onClick={() => setResult("")}>
                Ryd
              </button>
            </div>
          </div>

          <div className="prettyOutput">
            {result.split("\\n").map((line, index) => {
              const clean = line.trim();

              if (!clean) {
                return <br key={index} />;
              }

              if (clean.includes("━━")) {
                return <hr key={index} />;
              }

              if (clean === clean.toUpperCase() && clean.length > 4) {
                return <h3 key={index}>{clean}</h3>;
              }

              if (clean.endsWith(":")) {
                return <h4 key={index}>{clean}</h4>;
              }

              return <p key={index}>{clean}</p>;
            })}
          </div>
        </section>
      )}
    </main>
  );
}

function Field({ label, children }) {
  return (
    <label className="dashField">
      <span>{label}</span>
      {children}
    </label>
  );
}
