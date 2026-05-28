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
    const offerText = form.offer || "Aktuelt tilbud";
    const cta =
      form.goal === "Leads" ? "Få tilbud" :
      form.goal === "Bookinger" ? "Book nu" :
      form.goal === "Salg" ? "Køb nu" :
      "Læs mere";

    const campaign = `
KAMPAGNE FOR ${form.business}

Branche: ${form.industry}
Produkt/service: ${form.product}
Målgruppe: ${form.audience}
Lokation: ${form.location || "Ikke angivet"}
Budget: ${budget} kr/dag
Tilbud: ${offerText}
Mål: ${form.goal}

META ADS STRUKTUR

1. Cold kampagne
- Broad målgruppe
- 3-5 creatives
- Problem/løsning
- Budget: ${Math.round(budget * 0.7)} kr/dag

2. Retargeting
- Besøgende sidste 30 dage
- Klik på annonce
- Facebook/Instagram engagement
- Budget: ${Math.round(budget * 0.3)} kr/dag

ANNONCE 1 — PROBLEM/LØSNING

Primær tekst:
Har du brug for en nemmere og mere professionel løsning?

Med ${form.product} hjælper ${form.business} ${form.audience} med at få et bedre resultat uden besvær.

${offerText}

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

${offerText}

Headline:
Stadig interesseret?

CTA:
${cta}

HOOKS

1. Stop med at udskyde det
2. En nemmere løsning til ${form.audience}
3. Få et bedre resultat uden besvær
4. Derfor vælger flere ${form.business}
5. Klar til at tage næste skridt?
6. ${form.product} gjort nemt
7. Professionel hjælp uden besvær
8. Kom i gang i dag

GOOGLE ADS

Headlines:
- ${form.product}
- ${form.business}
- Få Hjælp I Dag
- Professionel Løsning
- Kom I Gang Nu
- ${offerText}
- Bedre Resultat Nemt
- ${form.location || "Hele Danmark"}

Descriptions:
- Få en professionel løsning hos ${form.business}. Kom nemt i gang i dag.
- ${form.product} til ${form.audience}. Klar til brug.
- ${offerText}. Kontakt os eller bestil direkte i dag.

CREATIVE IDÉER

1. UGC video med ejer/kunde der forklarer problemet
2. Før/efter annonce
3. Produkt/service billede med tydeligt tilbud
4. Kundeudtalelse med stjerner
5. Lokal annonce med ${form.location || "lokation"}

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
    <main className="new-dashboard">
      <header className="new-topbar">
        <a href="/" className="new-logo">AdPilot</a>
        <div className="top-actions">
          <span>Pro Demo</span>
          <a href="/" className="small-btn">Forside</a>
        </div>
      </header>

      <section className="dash-hero-clean">
        <div>
          <span className="blue-label">AI Campaign Generator</span>
          <h1>Generer en annoncepakke</h1>
          <p>
            Udfyld briefen og få Meta Ads, Google Ads, hooks, retargeting og
            kreative idéer klar til copy/paste.
          </p>
        </div>
      </section>

      <section className="generator-layout">
        <div className="generator-card">
          <div className="card-header">
            <div>
              <h2>Kampagnebrief</h2>
              <p>Jo mere præcis brief, jo bedre output.</p>
            </div>
          </div>

          <div className="input-grid">
            <Field label="Virksomhedsnavn">
              <input value={form.business} onChange={(e) => updateField("business", e.target.value)} placeholder="Startsmiling" />
            </Field>

            <Field label="Branche">
              <input value={form.industry} onChange={(e) => updateField("industry", e.target.value)} placeholder="Webshop, frisør, bilpleje..." />
            </Field>

            <Field label="Produkt/service">
              <input value={form.product} onChange={(e) => updateField("product", e.target.value)} placeholder="Waterflosser, solfilm, klipning..." />
            </Field>

            <Field label="Målgruppe">
              <input value={form.audience} onChange={(e) => updateField("audience", e.target.value)} placeholder="Mænd og kvinder 25-55" />
            </Field>

            <Field label="Tilbud/pris">
              <input value={form.offer} onChange={(e) => updateField("offer", e.target.value)} placeholder="299 kr / 20% rabat / gratis tilbud" />
            </Field>

            <Field label="Budget pr dag">
              <input value={form.budget} onChange={(e) => updateField("budget", e.target.value)} placeholder="150" />
            </Field>

            <Field label="Lokation">
              <input value={form.location} onChange={(e) => updateField("location", e.target.value)} placeholder="Kalundborg / hele Danmark" />
            </Field>

            <Field label="Målsætning">
              <select value={form.goal} onChange={(e) => updateField("goal", e.target.value)}>
                <option>Salg</option>
                <option>Leads</option>
                <option>Bookinger</option>
                <option>Trafik</option>
              </select>
            </Field>
          </div>

          <button className="big-generate" onClick={generateCampaign}>
            Generer kampagne
          </button>
        </div>

        <aside className="side-clean">
          <h3>Output inkluderer</h3>
          <div className="check-list">
            <span>✓ Meta Ads tekster</span>
            <span>✓ Google Ads forslag</span>
            <span>✓ Hooks</span>
            <span>✓ Retargeting strategi</span>
            <span>✓ Creative idéer</span>
            <span>✓ Budgetfordeling</span>
          </div>
        </aside>
      </section>

      {result && (
        <section className="output-section">
          <div className="output-header">
            <div>
              <span className="blue-label">Færdig kampagne</span>
              <h2>Din annoncepakke</h2>
            </div>

            <button className="copy-clean" onClick={copyCampaign}>
              {copied ? "Kopieret ✓" : "Kopiér kampagne"}
            </button>
          </div>

          <pre className="output-box">{result}</pre>
        </section>
      )}
    </main>
  );
}

function Field({ label, children }) {
  return (
    <label className="field-clean">
      <span>{label}</span>
      {children}
    </label>
  );
}
