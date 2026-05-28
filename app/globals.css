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

  function update(field, value) {
    setForm({ ...form, [field]: value });
  }

  function getCta() {
    if (form.goal === "Leads") return "Få tilbud";
    if (form.goal === "Bookinger") return "Book nu";
    if (form.goal === "Trafik") return "Læs mere";
    return "Køb nu";
  }

  function generateCampaign() {
    const budget = Number(form.budget) || 150;
    const offer = form.offer || "Aktuelt tilbud";
    const cta = getCta();

    const output = `
KAMPAGNEPAKKE FOR ${form.business || "DIN VIRKSOMHED"}

Branche:
${form.industry || "Ikke angivet"}

Produkt/service:
${form.product || "Ikke angivet"}

Målgruppe:
${form.audience || "Ikke angivet"}

Lokation:
${form.location || "Ikke angivet"}

Budget:
${budget} kr/dag

Tilbud:
${offer}

Mål:
${form.goal}

────────────────────────────

ANBEFALET STRUKTUR

1. Cold kampagne
- Broad målgruppe
- 3-5 creatives
- Problem/løsning-vinkel
- Budget: ${Math.round(budget * 0.7)} kr/dag

2. Retargeting kampagne
- Website besøgende sidste 30 dage
- Klik på annonce
- Facebook/Instagram engagement
- Budget: ${Math.round(budget * 0.3)} kr/dag

────────────────────────────

META ADS

ANNONCE 1 — PROBLEM/LØSNING

Primær tekst:
Har du brug for en nemmere og mere professionel løsning?

Med ${form.product || "løsningen"} hjælper ${form.business || "virksomheden"} ${form.audience || "målgruppen"} med at få et bedre resultat uden besvær.

${offer}

Headline:
Kom i gang med ${form.product || "løsningen"}

CTA:
${cta}

ANNONCE 2 — UGC STYLE

Hook:
"Jeg skulle bare have prøvet det her noget før."

Primær tekst:
Hvis du leder efter en løsning, der er nem, hurtig og professionel, er ${form.product || "denne løsning"} fra ${form.business || "virksomheden"} et oplagt valg.

Headline:
Derfor vælger flere ${form.business || "os"}

CTA:
${cta}

ANNONCE 3 — TRUST

Primær tekst:
Flere vælger ${form.business || "os"}, fordi de vil have en løsning der føles tryg, nem og professionel.

${form.product || "Løsningen"} er lavet til ${form.audience || "dig"}, der ønsker et bedre resultat uden at gøre det kompliceret.

Headline:
Tryg og professionel løsning

CTA:
${cta}

ANNONCE 4 — RETARGETING

Primær tekst:
Du har allerede vist interesse for ${form.product || "løsningen"}.

Hvis du stadig overvejer det, er nu et godt tidspunkt at tage næste skridt.

${offer}

Headline:
Stadig interesseret?

CTA:
${cta}

────────────────────────────

HOOKS

1. Stop med at udskyde det
2. En nemmere løsning til ${form.audience || "din målgruppe"}
3. Få et bedre resultat uden besvær
4. Derfor vælger flere ${form.business || "os"}
5. Klar til at tage næste skridt?
6. ${form.product || "Løsningen"} gjort nemt
7. Professionel hjælp uden besvær
8. Kom i gang i dag
9. Spar tid og få en bedre løsning
10. Det behøver ikke være kompliceret

────────────────────────────

GOOGLE ADS

Headlines:
- ${form.product || "Professionel løsning"}
- ${form.business || "Din virksomhed"}
- Få Hjælp I Dag
- Professionel Service
- Kom I Gang Nu
- ${offer}
- Bedre Resultat Nemt
- ${form.location || "Hele Danmark"}

Descriptions:
- Få en professionel løsning hos ${form.business || "os"}. Kom nemt i gang i dag.
- ${form.product || "Løsningen"} til ${form.audience || "din målgruppe"}. Klar til brug.
- ${offer}. Kontakt os eller bestil direkte i dag.

────────────────────────────

CREATIVE IDÉER

1. UGC-video med ejer eller kunde der forklarer problemet.
2. Før/efter-annonce med tydelig transformation.
3. Produkt/service-billede med tydeligt tilbud.
4. Kundeudtalelse med stjerner.
5. Lokal annonce med fokus på ${form.location || "lokation"}.

────────────────────────────

TESTPLAN

Dag 1-3:
Test 3-5 creatives uden at ændre for meget.

Dag 4-7:
Sluk annoncer med lav CTR og høj CPC.

Efter 7 dage:
Flyt budget mod vinderen og skalér 20-30%.
`;

    setResult(output);
    setCopied(false);
  }

  async function copyResult() {
    await navigator.clipboard.writeText(result);
    setCopied(true);
  }

  return (
    <main className="dashboard">
      <header className="dashboardHeader">
        <a href="/" className="brand dark">
          <span className="brandIcon">A</span>
          AdPilot
        </a>

        <div className="headerActions">
          <span>Pro Demo</span>
          <a href="/" className="backButton">Forside</a>
        </div>
      </header>

      <section className="dashboardHero">
        <span className="eyebrow dark">AI Campaign Generator</span>
        <h1>Generer en komplet annoncepakke</h1>
        <p>
          Udfyld briefen og få Meta Ads, Google Ads, hooks, retargeting,
          creative idéer og budgetfordeling klar til copy/paste.
        </p>
      </section>

      <section className="generatorLayout">
        <div className="formPanel">
          <div className="panelIntro">
            <h2>Kampagnebrief</h2>
            <p>Jo mere præcist du udfylder felterne, jo stærkere bliver outputtet.</p>
          </div>

          <div className="formGrid">
            <Field label="Virksomhedsnavn">
              <input value={form.business} onChange={(e) => update("business", e.target.value)} placeholder="Fx firmanavn" />
            </Field>

            <Field label="Branche">
              <input value={form.industry} onChange={(e) => update("industry", e.target.value)} placeholder="Fx webshop, klinik, håndværker" />
            </Field>

            <Field label="Produkt/service">
              <input value={form.product} onChange={(e) => update("product", e.target.value)} placeholder="Fx service, produkt eller behandling" />
            </Field>

            <Field label="Målgruppe">
              <input value={form.audience} onChange={(e) => update("audience", e.target.value)} placeholder="Fx lokale kunder, virksomheder, familier" />
            </Field>

            <Field label="Tilbud/pris">
              <input value={form.offer} onChange={(e) => update("offer", e.target.value)} placeholder="Fx 20% rabat / gratis tilbud" />
            </Field>

            <Field label="Budget pr dag">
              <input value={form.budget} onChange={(e) => update("budget", e.target.value)} placeholder="Fx 150" />
            </Field>

            <Field label="Lokation">
              <input value={form.location} onChange={(e) => update("location", e.target.value)} placeholder="Fx København / hele Danmark" />
            </Field>

            <Field label="Målsætning">
              <select value={form.goal} onChange={(e) => update("goal", e.target.value)}>
                <option>Salg</option>
                <option>Leads</option>
                <option>Bookinger</option>
                <option>Trafik</option>
              </select>
            </Field>
          </div>

          <button className="generateButton" onClick={generateCampaign}>
            Generer kampagne
          </button>
        </div>

        <aside className="summaryPanel">
          <h3>Output inkluderer</h3>
          <div className="summaryList">
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
        <section className="resultPanel">
          <div className="resultHeader">
            <div>
              <span className="eyebrow dark">Færdig kampagne</span>
              <h2>Din annoncepakke</h2>
            </div>

            <button className="copyButton" onClick={copyResult}>
              {copied ? "Kopieret ✓" : "Kopiér kampagne"}
            </button>
          </div>

          <pre className="resultBox">{result}</pre>
        </section>
      )}
    </main>
  );
}

function Field({ label, children }) {
  return (
    <label className="field">
      <span>{label}</span>
      {children}
    </label>
  );
}
