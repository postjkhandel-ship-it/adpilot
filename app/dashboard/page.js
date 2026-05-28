"use client";

import { useState } from "react";

export default function Dashboard() {
  const [form, setForm] = useState({
    business: "",
    industry: "",
    product: "",
    audience: "",
    offer: "",
    budget: "",
    goal: "Salg",
    location: "",
  });

  const [result, setResult] = useState("");

  function updateField(field, value) {
    setForm({ ...form, [field]: value });
  }

  function getIndustryAngle(industry, product) {
    const text = industry.toLowerCase();

    if (text.includes("bil") || text.includes("solfilm") || text.includes("klargøring")) {
      return {
        problem: "Ser bilen træt, beskidt eller kedelig ud?",
        result: "Få bilen til at se skarpere, renere og mere professionel ud.",
        headline: `Professionel ${product}`,
        hook: `"Jeg troede ikke min bil kunne se sådan ud igen."`,
        cta: "Book tid",
        creative: "Før/efter billede af bilen, filmet i ægte iPhone/UGC stil.",
      };
    }

    if (text.includes("frisør") || text.includes("beauty") || text.includes("skønhed")) {
      return {
        problem: "Trænger du til et nyt look eller en behandling, der giver synligt resultat?",
        result: "Få en professionel behandling, der får dig til at føle dig mere selvsikker.",
        headline: `Book ${product} i dag`,
        hook: `"Jeg skulle bare have gjort det her noget før."`,
        cta: "Book nu",
        creative: "Før/efter transformation med kunde i stolen.",
      };
    }

    if (text.includes("håndværk") || text.includes("tømrer") || text.includes("murer") || text.includes("elektriker") || text.includes("vvs")) {
      return {
        problem: "Mangler du en pålidelig fagmand til opgaven?",
        result: "Få professionel hjælp, tydelig aftale og et resultat der holder.",
        headline: `Få tilbud på ${product}`,
        hook: `"Vi fik løst opgaven hurtigt og professionelt."`,
        cta: "Få tilbud",
        creative: "Før/efter af udført arbejde + kort kundecase.",
      };
    }

    if (text.includes("restaurant") || text.includes("café") || text.includes("mad")) {
      return {
        problem: "Leder du efter noget lækkert, nemt og velsmagende?",
        result: "Få en god oplevelse med mad, service og stemning i fokus.",
        headline: `Prøv ${product}`,
        hook: `"Det her sted skal du prøve."`,
        cta: "Bestil nu",
        creative: "UGC video med mad tæt på kameraet og ægte reaktion.",
      };
    }

    if (text.includes("webshop") || text.includes("ecommerce") || text.includes("shop")) {
      return {
        problem: "Leder du efter en nem løsning, der gør hverdagen bedre?",
        result: "Få et produkt der løser problemet hurtigt, enkelt og effektivt.",
        headline: `Køb ${product} i dag`,
        hook: `"Jeg fortryder kun, at jeg ikke købte den før."`,
        cta: "Shop nu",
        creative: "Produktdemo + pris + trust badges + kundeanmeldelse.",
      };
    }

    if (text.includes("klinik") || text.includes("tand") || text.includes("fysioterapi") || text.includes("behandling")) {
      return {
        problem: "Har du et problem, du gerne vil have professionel hjælp til?",
        result: "Få en tryg behandling med fokus på kvalitet og resultater.",
        headline: `Book ${product}`,
        hook: `"Jeg følte mig tryg fra første minut."`,
        cta: "Book tid",
        creative: "Professionel behandler + kundeudtalelse + klinikmiljø.",
      };
    }

    if (text.includes("bureau") || text.includes("marketing") || text.includes("ads") || text.includes("hjemmeside")) {
      return {
        problem: "Får din virksomhed ikke nok kunder online?",
        result: "Få en løsning der hjælper dig med flere leads, bedre synlighed og mere salg.",
        headline: `Få hjælp til ${product}`,
        hook: `"Vi begyndte endelig at få henvendelser online."`,
        cta: "Få tilbud",
        creative: "Skærmoptagelse, før/efter website eller annonce-resultater.",
      };
    }

    return {
      problem: "Har du brug for en bedre løsning, der gør hverdagen nemmere?",
      result: "Få en professionel løsning, der skaber værdi og gør det nemt at komme i gang.",
      headline: `Prøv ${product}`,
      hook: `"Det her gjorde en større forskel end forventet."`,
      cta: form.goal === "Leads" ? "Få tilbud" : form.goal === "Bookinger" ? "Book nu" : "Læs mere",
      creative: "UGC video, kundeudtalelse og tydelig før/efter-vinkel.",
    };
  }

  function generateCampaign() {
    const angle = getIndustryAngle(form.industry, form.product);
    const budget = Number(form.budget) || 150;
    const offerText = form.offer ? `Lige nu: ${form.offer}` : "Aktuelt tilbud i en begrænset periode.";
    const locationText = form.location ? ` i ${form.location}` : "";

    const campaign = `
KAMPAGNESTRUKTUR

Kampagnenavn:
${form.business} - ${form.product} - ${form.goal}

Virksomhed:
${form.business}

Branche:
${form.industry}

Produkt/service:
${form.product}

Målgruppe:
${form.audience}

Lokation:
${form.location || "Ikke angivet"}

Budget:
${budget} kr/dag

Tilbud:
${offerText}

Mål:
${form.goal}

ANBEFALET STRUKTUR

1. Cold kampagne
- Broad målgruppe
- 3-5 creatives
- Problem/løsning vinkel
- Budget: ${Math.round(budget * 0.7)} kr/dag

2. Retargeting
- Besøgende sidste 30 dage
- Engagerede på Facebook/Instagram
- Personer der har klikket på annonce
- Budget: ${Math.round(budget * 0.3)} kr/dag

3. Creative test
- UGC video
- Før/efter
- Trust/kundeanmeldelse
- Direkte tilbud
- Problem/løsning

META ADS TEKSTER

ANNONCE 1 - PROBLEM/LØSNING

Primær tekst:
${angle.problem}

Med ${form.product} hjælper ${form.business} ${form.audience} med at få en nemmere og mere professionel løsning${locationText}.

${angle.result}

${offerText}

Headline:
${angle.headline}

Beskrivelse:
En nem løsning til dig, der vil have et bedre resultat.

CTA:
${angle.cta}

ANNONCE 2 - UGC STYLE

Hook:
${angle.hook}

Primær tekst:
Jeg havde brug for en løsning, der var nem, professionel og faktisk gav mening.

Derfor prøvede jeg ${form.product} fra ${form.business} — og det gjorde processen meget lettere.

${offerText}

Headline:
Derfor vælger flere ${form.business}

Beskrivelse:
Professionel løsning gjort nemt.

CTA:
${angle.cta}

ANNONCE 3 - DIREKTE SALG / LEAD

Primær tekst:
Gør det nemt at komme i gang med ${form.product}.

Hos ${form.business} får du en løsning, der er lavet til ${form.audience}, som gerne vil have et godt resultat uden besvær.

${offerText}

Headline:
Kom i gang med ${form.product}

Beskrivelse:
Hurtigt, enkelt og professionelt.

CTA:
${angle.cta}

ANNONCE 4 - RETARGETING

Primær tekst:
Du har allerede vist interesse for ${form.product}.

Hvis du stadig overvejer det, er nu et godt tidspunkt at tage næste skridt.

${offerText}

Headline:
Stadig interesseret?

Beskrivelse:
Tag næste skridt i dag.

CTA:
${angle.cta}

ANNONCE 5 - TRUST

Primær tekst:
Flere vælger ${form.business}, fordi de vil have en løsning, der føles tryg, nem og professionel.

${form.product} er skabt til ${form.audience}, der ønsker et bedre resultat.

Headline:
Tryg og professionel løsning

Beskrivelse:
Se hvorfor kunder vælger os.

CTA:
${angle.cta}

HOOKS

1. ${angle.problem}
2. Derfor vælger flere ${form.product}
3. En nemmere løsning til ${form.audience}
4. Få et bedre resultat uden besvær
5. Stop med at udskyde det
6. Det her gør processen meget nemmere
7. Klar til at tage næste skridt?
8. Professionel hjælp gjort enkelt
9. ${form.product} uden besvær
10. Se hvorfor flere vælger ${form.business}

HEADLINES

1. ${angle.headline}
2. Kom i gang i dag
3. Professionel løsning
4. Få hjælp hurtigt
5. Bedre resultat uden besvær
6. Prøv ${form.product}
7. ${form.business} hjælper dig
8. Klar til næste skridt?

CREATIVE IDÉER

1. UGC video:
${angle.creative}

2. Før/efter annonce:
Vis problemet før og resultatet efter.

3. Trust annonce:
Brug kundeudtalelse + gule stjerner + kort tekst.

4. Tilbudsannonce:
Vis ${offerText} tydeligt sammen med ${form.product}.

5. Lokal annonce:
Hvis relevant, skriv tydeligt:
"${form.business}${locationText}"

GOOGLE ADS

Headlines:
- ${form.product} ${form.location || ""}
- ${angle.headline}
- Få Hjælp I Dag
- Professionel Service
- ${form.business}
- Klar Til At Komme I Gang
- Få Et Godt Tilbud
- Bedre Resultat Nemt

Descriptions:
- Få en professionel løsning hos ${form.business}. Kom nemt i gang i dag.
- ${form.product} til ${form.audience}. En tryg og enkel løsning.
- ${offerText} Kontakt os eller bestil direkte i dag.
- Gør det nemt at få et bedre resultat med ${form.business}.

SITELINKS

1. ${form.product}
Beskrivelse: Se mere om løsningen og kom i gang.

2. Kundeanmeldelser
Beskrivelse: Læs hvad andre kunder siger.

3. Kontakt
Beskrivelse: Få svar på dine spørgsmål.

4. Tilbud
Beskrivelse: Se aktuelle priser og kampagner.

RETARGETING STRATEGI

Målgrupper:
- Website besøgende 30 dage
- Klik på annonce 30 dage
- Facebook/Instagram engagement 365 dage
- Add to cart eller formularstart hvis relevant

Retargeting tekst:
Du har allerede kigget på ${form.product}.

Hvis du stadig overvejer det, kan ${form.business} hjælpe dig videre med en nem og professionel løsning.

${offerText}

CTA:
${angle.cta}

KPI MÅL

Hvis målet er salg:
- CTR: over 1,5%
- CPC: under 4-6 kr.
- ROAS: over 2,5x
- CPA: afhænger af avance

Hvis målet er leads:
- CTR: over 1,2%
- CPC: under 5 kr.
- Leadpris: afhænger af branche, men startmål 30-150 kr.

Hvis målet er bookinger:
- Fokus på lokal målgruppe
- Brug før/efter og trust
- Test både leadformular og website booking

TESTPLAN

Dag 1-3:
Kør 3-5 creatives uden at ændre for meget.

Dag 4-7:
Sluk de dårligste annoncer med høj CPC og lav CTR.

Efter 7 dage:
Flyt budget mod vinderen.

Skalering:
Skaler langsomt med 20-30% ad gangen.

KONKLUSION

Start med en simpel kampagnestruktur for ${form.product}. Brug problem/løsning, UGC og trust. Fokusér på én tydelig handling: ${angle.cta}.
`;

    setResult(campaign);
  }

  return (
    <main className="dashboard">
      <aside className="sidebar">
        <div className="logo">AdPilot</div>

        <nav className="nav">
          <div className="nav-active">Dashboard</div>
          <div>Create Campaign</div>
          <div>Campaign History</div>
          <div>Creative Ideas</div>
          <div>Google Ads</div>
          <div>Billing</div>
        </nav>
      </aside>

      <section className="main">
        <div className="card">
          <h2>Generer kampagne</h2>
          <p>Udfyld felterne og få en annoncepakke til næsten alle typer virksomheder.</p>

          <div className="grid">
            <label>
              Virksomhedsnavn
              <input value={form.business} onChange={(e) => updateField("business", e.target.value)} placeholder="Fx Startsmiling" />
            </label>

            <label>
              Branche
              <input value={form.industry} onChange={(e) => updateField("industry", e.target.value)} placeholder="Fx webshop, frisør, bilpleje, håndværker" />
            </label>

            <label>
              Produkt/service
              <input value={form.product} onChange={(e) => updateField("product", e.target.value)} placeholder="Fx Waterflosser, solfilm, klipning" />
            </label>

            <label>
              Målgruppe
              <input value={form.audience} onChange={(e) => updateField("audience", e.target.value)} placeholder="Fx mænd og kvinder, lokale bilejere" />
            </label>

            <label>
              Tilbud/pris
              <input value={form.offer} onChange={(e) => updateField("offer", e.target.value)} placeholder="Fx 299 kr, gratis tilbud, 20% rabat" />
            </label>

            <label>
              Budget pr dag
              <input value={form.budget} onChange={(e) => updateField("budget", e.target.value)} placeholder="Fx 150" />
            </label>

            <label>
              Lokation
              <input value={form.location} onChange={(e) => updateField("location", e.target.value)} placeholder="Fx Kalundborg, København, hele Danmark" />
            </label>

            <label>
              Målsætning
              <select value={form.goal} onChange={(e) => updateField("goal", e.target.value)}>
                <option>Salg</option>
                <option>Leads</option>
                <option>Bookinger</option>
                <option>Trafik</option>
              </select>
            </label>
          </div>

          <button className="btn" onClick={generateCampaign}>
            Generer kampagne
          </button>
        </div>

        {result && (
          <div className="card">
            <div style={{ display: "flex", justifyContent: "space-between", gap: "16px", alignItems: "center" }}>
              <h2>Din kampagne</h2>

              <button
                className="btn"
                onClick={() => navigator.clipboard.writeText(result)}
                style={{ marginTop: 0 }}
              >
                Kopiér kampagne
              </button>
            </div>

            <div className="result">{result}</div>
          </div>
        )}
      </section>
    </main>
  );
}
