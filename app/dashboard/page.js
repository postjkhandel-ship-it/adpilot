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
  const [copied, setCopied] = useState(false);

  function updateField(field, value) {
    setForm({ ...form, [field]: value });
  }

  function generateCampaign() {
    const budget = Number(form.budget) || 150;
    const cta =
      form.goal === "Leads" ? "Få tilbud" :
      form.goal === "Bookinger" ? "Book nu" :
      form.goal === "Trafik" ? "Læs mere" :
      "Køb nu";

    const offer = form.offer || "Aktuelt tilbud";

    const campaign = `
KAMPAGNEPAKKE FOR ${form.business}

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
${offer}

Mål:
${form.goal}

--------------------------------

ANBEFALET STRUKTUR

1. Cold kampagne
- Broad målgruppe
- 3-5 creatives
- Problem/løsning vinkel
- Budget: ${Math.round(budget * 0.7)} kr/dag

2. Retargeting kampagne
- Website besøgende 30 dage
- Klik på annonce
- Facebook/Instagram engagement
- Budget: ${Math.round(budget * 0.3)} kr/dag

--------------------------------

META ADS

ANNONCE 1 — PROBLEM/LØSNING

Primær tekst:
Har du brug for en nemmere og mere professionel løsning?

Med ${form.product} hjælper ${form.business} ${form.audience} med at få et bedre resultat uden besvær.

${offer}

Headline:
Kom i gang med ${form.product}

CTA:
${cta}

ANNONCE 2 — UGC STYLE

Hook:
"Jeg skulle bare have prøvet det her noget før."

Primær tekst:
Hvis du leder efter en løsning, der er nem, hurtig og professionel, er ${form.product} fra ${form.business} et oplagt valg.

Headline:
Derfor vælger flere ${form.business}

CTA:
${cta}

ANNONCE 3 — RETARGETING

Primær tekst:
Du har allerede vist interesse for ${form.product}.

Hvis du stadig overvejer det, er nu et godt tidspunkt at tage næste skridt.

${offer}

Headline:
Stadig interesseret?

CTA:
${cta}

--------------------------------

HOOKS

1. Stop med at udskyde det
2. En nemmere løsning til ${form.audience}
3. Få et bedre resultat uden besvær
4. Derfor vælger flere ${form.business}
5. Klar til at tage næste skridt?
6. ${form.product} gjort nemt
7. Professionel hjælp uden besvær
8. Kom i gang i dag

--------------------------------

GOOGLE ADS

Headlines:
- ${form.product}
- ${form.business}
- Få Hjælp I Dag
- Professionel Løsning
- Kom I Gang Nu
- ${offer}
- Bedre Resultat Nemt
- ${form.location || "Hele Danmark"}

Descriptions:
- Få en professionel løsning hos ${form.business}. Kom nemt i gang i dag.
- ${form.product} til ${form.audience}. Klar til brug.
- ${offer}. Kontakt os eller bestil direkte i dag.

--------------------------------

CREATIVE IDÉER

1. UGC video med ejer eller kunde der forklarer problemet
2. Før/efter annonce
3. Produkt/service billede med tydeligt tilbud
4. Kundeudtalelse med stjerner
5. Lokal annonce med ${form.location || "lokation"}

--------------------------------

TESTPLAN

Dag 1-3:
Test 3-5 creatives.

Dag 4-7:
Sluk de svageste annoncer.

Efter 7 dage:
Skaler vinderen med 20-30%.
`;

    setResult(campaign);
    setCopied(false);
  }

  async function copyCampaign() {
    await navigator.clipboard.writeText(result);
    setCopied(true);
  }

  return (
    <main className="app">
      <header className="appNav">
        <a href="/" className="brand dark">AdPilot</a>
        <div>
          <span className="plan">Pro Demo</span>
          <a href="/" className="backBtn">Forside</a>
        </div>
      </header>

      <section className="appHero">
        <div>
          <div className="badge light">AI Campaign Generator</div>
          <h1>Generer en komplet annoncepakke</h1>
          <p>
            Udfyld briefen og få Meta Ads, Google Ads, hooks, retargeting og
            creative idéer klar til copy/paste.
          </p>
        </div>
      </section>

      <section className="generator">
        <div className="formBox">
          <h2>Kampagnebrief</h2>
          <p>Jo mere præcis brief, jo bedre output.</p>

          <div className="formGrid">
            <Input label="Virksomhedsnavn">
              <input value={form.business} onChange={(e) => updateField("business", e.target.value)} placeholder="Startsmiling" />
            </Input>

            <Input label="Branche">
              <input value={form.industry} onChange={(e) => updateField("industry", e.target.value)} placeholder="Webshop, frisør, bilpleje..." />
            </Input>

            <Input label="Produkt/service">
              <input value={form.product} onChange={(e) => updateField("product", e.target.value)} placeholder="Waterflosser, solfilm..." />
            </Input>

            <Input label="Målgruppe">
              <input value={form.audience} onChange={(e) => updateField("audience", e.target.value)} placeholder="Mænd og kvinder 25-55" />
            </Input>

            <Input label="Tilbud/pris">
              <input value={form.offer} onChange={(e) => updateField("offer", e.target.value)} placeholder="299 kr / 20% rabat" />
            </Input>

            <Input label="Budget pr dag">
              <input value={form.budget} onChange={(e) => updateField("budget", e.target.value)} placeholder="150" />
            </Input>

            <Input label="Lokation">
              <input value={form.location} onChange={(e) => updateField("location", e.target.value)} placeholder="Kalundborg / hele Danmark" />
            </Input>

            <Input label="Målsætning">
              <select value={form.goal} onChange={(e) => updateField("goal", e.target.value)}>
                <option>Salg</option>
                <option>Leads</option>
                <option>Bookinger</option>
                <option>Trafik</option>
              </select>
            </Input>
          </div>

          <button className="generate" onClick={generateCampaign}>
            Generer kampagne
          </button>
        </div>

        <aside className="sideBox">
          <h3>Output inkluderer</h3>
          <span>✓ Meta Ads tekster</span>
          <span>✓ Google Ads forslag</span>
          <span>✓ Hooks</span>
          <span>✓ Retargeting strategi</span>
          <span>✓ Creative idéer</span>
          <span>✓ Budgetfordeling</span>
        </aside>
      </section>

      {result && (
        <section className="resultWrap">
          <div className="resultTop">
            <div>
              <div className="badge light">Færdig kampagne</div>
              <h2>Din annoncepakke</h2>
            </div>

            <button className="copy" onClick={copyCampaign}>
              {copied ? "Kopieret ✓" : "Kopiér kampagne"}
            </button>
          </div>

          <pre className="output">{result}</pre>
        </section>
      )}
    </main>
  );
}

function Input({ label, children }) {
  return (
    <label className="inputGroup">
      <span>{label}</span>
      {children}
    </label>
  );
}
